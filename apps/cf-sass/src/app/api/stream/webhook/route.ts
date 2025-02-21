// subscribe to cloudflare stream webhook events

import Cloudflare from 'cloudflare';

import { getSessionFromCookie } from "@/utils/auth";
import { NextRequest } from 'next/server';
import { redirect } from "next/navigation";
import x from "@/utils/handleResults";
import crypto from 'crypto';

const corsHeaders = {
  "Access-Control-Expose-Headers": "Location",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Origin": "*",
};

const verifySignature = (
  signature: string,
  secret: string,
  body: string
): boolean => {
  const [timestamp, sig] = signature.split(',');
  const [, timeValue] = timestamp.split('=');
  const [, sigValue] = sig.split('=');

  const sourceString = `${timeValue}.${body}`;
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(sourceString)
    .digest('hex');

  return sigValue === expectedSignature;
};

export async function POST(request: NextRequest) {
  try {
    const signature = request.headers.get('Webhook-Signature');
    const body = await request.text();

    if (!signature || !process.env.CLOUDFLARE_WEBHOOK_SECRET) {
      return new Response('Unauthorized', { status: 401 });
    }

    const isValid = verifySignature(
      signature,
      process.env.CLOUDFLARE_WEBHOOK_SECRET,
      body
    );

    if (!isValid) {
      return new Response('Invalid signature', { status: 401 });
    }

    const webhook = JSON.parse(body);

    // Handle different webhook states
    if (webhook.status.state === 'ready') {
      console.log('Video ready:', webhook.uid);
      // TODO: Update your database or notify your users
    } else if (webhook.status.state === 'error') {
      console.error('Video processing error:', webhook.status.errReasonCode);
      // TODO: Handle error case
    }

    return new Response('OK', { status: 200 });
  } catch (error) {
    console.error('Webhook error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

