import { getSessionFromCookie } from "@/utils/auth";
import { NextRequest } from 'next/server';
// import { Upload } from 'tus-js-client';
import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
    const session = await getSessionFromCookie()

    if (!session) {
      redirect('/')
    }

    const { env } = process;
    const { CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN } = env;
    const endpoint = `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/stream?direct_user=true`;

    const reqMatadata = request.headers.get("Upload-Metadata");
    const responseMetadata = `maxDurationSeconds NjAw${reqMatadata ? `, ${reqMatadata}` : ""}`

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `bearer ${CLOUDFLARE_API_TOKEN}`,
        "Tus-Resumable": "1.0.0",
        "Upload-Length": request.headers.get("Upload-Length") || "0",
        "Upload-Metadata": responseMetadata,
      },
    });

    const destination = response.headers.get("Location");
    if (!destination) {
      return new Response("Failed to create upload", { status: 500 });
    }

    return new Response(null, {
      headers: {
        "Access-Control-Expose-Headers": "Location",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        Location: destination,
      },
    });
}
