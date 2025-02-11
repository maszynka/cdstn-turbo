import "server-only";

import { SITE_DOMAIN, SITE_URL } from "@/constants";
import { render } from '@react-email/render'
import { ResetPasswordEmail } from "@/react-email/reset-password";
import { VerifyEmail } from "@/react-email/verify-email";
import isProd from "./isProd";

interface BrevoEmailOptions {
  to: { email: string; name?: string }[];
  subject: string;
  replyTo?: string;
  htmlContent: string;
  textContent?: string;
  templateId?: number;
  params?: Record<string, string>;
  tags?: string[];
}

interface ResendEmailOptions {
  to: string[];
  subject: string;
  html: string;
  from?: string;
  replyTo?: string;
  text?: string;
  tags?: { name: string; value: string }[];
}

//

interface GmailEmailOptions {
  to: string[];
  subject: string;
  html: string;
  from?: string;
  replyTo?: string;
  text?: string;
  labels?: string[];
}

async function sendGmailEmail({
  to,
  subject,
  html,
  from,
  replyTo: originalReplyTo,
  text,
  labels,
}: GmailEmailOptions) {
  if (!isProd) {
    return;
  }

  if (!process.env.GMAIL_CLIENT_ID || !process.env.GMAIL_CLIENT_SECRET || !process.env.GMAIL_REFRESH_TOKEN) {
    throw new Error("Gmail credentials are not set. Required: GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_REFRESH_TOKEN");
  }

  const replyTo = originalReplyTo ?? process.env.EMAIL_REPLY_TO;

  // Create OAuth2 client
  const oauth2Client = new google.auth.OAuth2(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.GMAIL_REFRESH_TOKEN
  });

  // Get access token
  const { token: accessToken } = await oauth2Client.getAccessToken();

  if (!accessToken) {
    throw new Error("Failed to get Gmail access token");
  }

  // Create Gmail API client
  const gmail = google.gmail({
    version: 'v1',
    auth: oauth2Client
  });

  // Construct email
  const emailLines = [
    `From: ${from ?? `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM}>`}`,
    `To: ${to.join(', ')}`,
    `Subject: ${subject}`,
    'MIME-Version: 1.0',
    'Content-Type: multipart/alternative; boundary="boundary"',
    '',
    '--boundary',
    'Content-Type: text/plain; charset="UTF-8"',
    'Content-Transfer-Encoding: 7bit',
    '',
    text || html.replace(/<[^>]*>/g, ''), // Strip HTML if text not provided
    '',
    '--boundary',
    'Content-Type: text/html; charset="UTF-8"',
    'Content-Transfer-Encoding: 7bit',
    '',
    html,
    '',
    '--boundary--'
  ];

  if (replyTo) {
    emailLines.splice(3, 0, `Reply-To: ${replyTo}`);
  }

  const email = emailLines.join('\r\n');

  // Encode the email in base64URL format
  const encodedEmail = Buffer.from(email)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  try {
    const response = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedEmail,
        ...(labels ? { labelIds: labels } : {})
      }
    });

    return response.data;
  } catch (error) {
    throw new Error(`Failed to send email via Gmail: ${error instanceof Error ? error.message : String(error)}`);
  }
}

type EmailProvider = "resend" | "brevo" | "gmail" | null;

// Update the getEmailProvider function
async function getEmailProvider(): Promise<EmailProvider> {
  if (process.env.RESEND_API_KEY) {
    return "resend";
  }

  if (process.env.BREVO_API_KEY) {
    return "brevo";
  }

  if (process.env.GMAIL_CLIENT_ID && process.env.GMAIL_CLIENT_SECRET && process.env.GMAIL_REFRESH_TOKEN) {
    return "gmail";
  }

  return null;
}

// Update the sendPasswordResetEmail function
export async function sendPasswordResetEmail({
  email,
  resetToken,
  username
}: {
  email: string;
  resetToken: string;
  username: string;
}) {
  const resetUrl = `${SITE_URL}/reset-password?token=${resetToken}`;

  if (!isProd) {
    console.warn('\n\n\nPassword reset url: ', resetUrl);
    return;
  }

  const html = await render(ResetPasswordEmail({ resetLink: resetUrl, username }));
  const provider = await getEmailProvider();

  if (!provider && isProd) {
    throw new Error("No email provider configured. Set either RESEND_API_KEY, BREVO_API_KEY, or Gmail credentials in your environment.");
  }

  switch (provider) {
    case "resend":
      await sendResendEmail({
        to: [email],
        subject: `Reset your password for ${SITE_DOMAIN}`,
        html,
        tags: [{ name: "type", value: "password-reset" }],
      });
      break;

    case "brevo":
      await sendBrevoEmail({
        to: [{ email, name: username }],
        subject: `Reset your password for ${SITE_DOMAIN}`,
        htmlContent: html,
        tags: ["password-reset"],
      });
      break;

    case "gmail":
      await sendGmailEmail({
        to: [email],
        subject: `Reset your password for ${SITE_DOMAIN}`,
        html,
        labels: ["password-reset"],
      });
      break;
  }
}

async function sendBrevoEmail({
  to,
  subject,
  replyTo: originalReplyTo,
  htmlContent,
  textContent,
  templateId,
  params,
  tags,
}: BrevoEmailOptions) {
  if (!isProd) {
    return;
  }

  if (!process.env.BREVO_API_KEY) {
    throw new Error("BREVO_API_KEY is not set");
  }

  const replyTo = originalReplyTo ?? process.env.EMAIL_REPLY_TO;

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "accept": "application/json",
      "content-type": "application/json",
      "api-key": process.env.BREVO_API_KEY,
    } as const,
    body: JSON.stringify({
      sender: {
        name: process.env.EMAIL_FROM_NAME,
        email: process.env.EMAIL_FROM,
      },
      to,
      htmlContent,
      textContent,
      subject,
      templateId,
      params,
      tags,
      ...(replyTo ? { replyTo } : {}),
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Failed to send email via Brevo: ${JSON.stringify(error)}`);
  }

  return response.json();
}

export async function sendPasswordResetEmail({
  email,
  resetToken,
  username
}: {
  email: string;
  resetToken: string;
  username: string;
}) {
  const resetUrl = `${SITE_URL}/reset-password?token=${resetToken}`;

  if (!isProd) {
    console.warn('\n\n\nPassword reset url: ', resetUrl)

    return
  }

  const html = await render(ResetPasswordEmail({ resetLink: resetUrl, username }));
  const provider = await getEmailProvider();

  if (!provider && isProd) {
    throw new Error("No email provider configured. Set either RESEND_API_KEY or BREVO_API_KEY in your environment.");
  }

  if (provider === "resend") {
    await sendResendEmail({
      to: [email],
      subject: `Reset your password for ${SITE_DOMAIN}`,
      html,
      tags: [{ name: "type", value: "password-reset" }],
    });
  } else {
    await sendBrevoEmail({
      to: [{ email, name: username }],
      subject: `Reset your password for ${SITE_DOMAIN}`,
      htmlContent: html,
      tags: ["password-reset"],
    });
  }
}

// Update the sendVerificationEmail function similarly
export async function sendVerificationEmail({
  email,
  verificationToken,
  username
}: {
  email: string;
  verificationToken: string;
  username: string;
}) {
  const verificationUrl = `${SITE_URL}/verify-email?token=${verificationToken}`;

  if (!isProd) {
    console.warn('\n\n\nVerification url: ', verificationUrl);
    return;
  }

  const html = await render(VerifyEmail({ verificationLink: verificationUrl, username }));
  const provider = await getEmailProvider();

  if (!provider && isProd) {
    throw new Error("No email provider configured. Set either RESEND_API_KEY, BREVO_API_KEY, or Gmail credentials in your environment.");
  }

  switch (provider) {
    case "resend":
      await sendResendEmail({
        to: [email],
        subject: `Verify your email for ${SITE_DOMAIN}`,
        html,
        tags: [{ name: "type", value: "email-verification" }],
      });
      break;

    case "brevo":
      await sendBrevoEmail({
        to: [{ email, name: username }],
        subject: `Verify your email for ${SITE_DOMAIN}`,
        htmlContent: html,
        tags: ["email-verification"],
      });
      break;

    case "gmail":
      await sendGmailEmail({
        to: [email],
        subject: `Verify your email for ${SITE_DOMAIN}`,
        html,
        labels: ["email-verification"],
      });
      break;
  }
}