// /accounts/{account_id}/stream/{identifier}
import { getSessionFromCookie } from "@/utils/auth";
import { NextRequest } from 'next/server';
import { redirect } from "next/navigation";
import Cloudflare from 'cloudflare';
import x from "@/utils/handleResults";

const corsHeaders = {
  "Access-Control-Expose-Headers": "Location",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Origin": "*",
};


export async function GET(request: NextRequest,
  { params }: { params: Promise<{ id: string }> }) {

  const { id: videoId } = await params;

  const session = await getSessionFromCookie()
  if (!session) redirect('/')

  console.log('session', session);

  try {
    const { CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_STREAM_API_TOKEN } = process.env;
    if (!CLOUDFLARE_ACCOUNT_ID || !CLOUDFLARE_STREAM_API_TOKEN) {
      throw new Error('Missing Cloudflare credentials');
    }

    const client = new Cloudflare({
      apiToken: process.env.CLOUDFLARE_STREAM_API_TOKEN,
    });

    const [video, gettingVideoDetailsError] = await x(client.stream.get(videoId, {
      account_id: CLOUDFLARE_ACCOUNT_ID,
    }));

    if (gettingVideoDetailsError || !video) {
      console.error('Error getting video details:', gettingVideoDetailsError);
      return new Response("Failed to get video details", { status: 400 });
    }

    return Response.json(video, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      }
    });
  } catch (error) {
    console.error('Upload error:', error);
    return new Response("Internal server error", { status: 500 });
  }
}
