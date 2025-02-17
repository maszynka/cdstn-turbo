// /accounts/{account_id}/stream/{identifier}
import { getSessionFromCookie } from "@/utils/auth";
import { NextRequest } from 'next/server';
import { redirect } from "next/navigation";

const corsHeaders = {
  "Access-Control-Expose-Headers": "Location",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Origin": "*",
};


export async function GET(  request: NextRequest,
  { params }: { params: Promise<{ team: string }> }) {
    const { identifier } = await params;
    const session = await getSessionFromCookie()
    if (!session) redirect('/')

      console.log('session', session);

    try {
        const { CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_STREAM_API_TOKEN } = process.env;
        if (!CLOUDFLARE_ACCOUNT_ID || !CLOUDFLARE_STREAM_API_TOKEN) {
            throw new Error('Missing Cloudflare credentials');
        }


        const endpoint = `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/stream/${identifier}`;



        const response = await fetch(endpoint, {
            method: "GET",
            headers: {
                Authorization: `bearer ${CLOUDFLARE_STREAM_API_TOKEN}`,
                // "Tus-Resumable": "1.0.0",
                // "Upload-Length": request.headers.get("Upload-Length") || "0",
                // "Upload-Metadata": responseMetadata,
            },
        });

        console.log({response},
          '\n\n', CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_STREAM_API_TOKEN
        );

        if (!response.ok) {
            return new Response("Failed to get video URL", { status: response.status });
        }

        debugger;


        return new Response(null, {
            headers: { ...corsHeaders }
        });
    } catch (error) {
        console.error('Upload error:', error);
        return new Response("Internal server error", { status: 500 });
    }
}
