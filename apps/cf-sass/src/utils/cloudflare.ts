export async function registerWebhook(accountId: string, apiToken: string) {
  const webhookUrl = process.env.NEXT_PUBLIC_APP_URL + '/api/stream/webhook';

  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/stream/webhook`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          notificationUrl: webhookUrl,
        }),
      }
    );

    const data = await response.json();
    if (!data.success) {
      throw new Error('Failed to register webhook');
    }

    // Store the webhook secret securely
    process.env.CLOUDFLARE_WEBHOOK_SECRET = data.result.secret;

    return data.result;
  } catch (error) {
    console.error('Error registering webhook:', error);
    throw error;
  }
}
