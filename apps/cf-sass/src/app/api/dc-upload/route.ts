import { getSessionFromCookie } from "@/utils/auth";
import { NextRequest } from 'next/server';
import { redirect } from "next/navigation";

const corsHeaders = {
  "Access-Control-Expose-Headers": "Location",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Origin": "*",
};

/**
 * Converts duration in minutes to base64 encoded seconds
 * @param {number} durationMinutes - Duration in minutes
 * @returns {string} Base64 encoded duration in seconds
 */
function getMaxDurationBase64(durationMinutes = 10) {
  const durationSeconds = durationMinutes * 60;
  return Buffer.from(durationSeconds.toString()).toString('base64');
}

/**
 * Generates base64 encoded expiry timestamp
 * @param {number} expiryMinutes - Minutes from current time
 * @returns {string} Base64 encoded RFC3339 timestamp
 */
function getExpiryBase64(expiryMinutes = 10) {
  const expiryDate = new Date();
  expiryDate.setMinutes(expiryDate.getMinutes() + expiryMinutes);
  const expiryTimestamp = expiryDate.toISOString().replace(/\.\d{3}Z$/, 'Z');
  return Buffer.from(expiryTimestamp).toString('base64');
}



export async function POST(request: NextRequest) {
    const session = await getSessionFromCookie()
    if (!session) redirect('/')

      console.log('session', session);

    try {
        const { CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_STREAM_API_TOKEN } = process.env;
        if (!CLOUDFLARE_ACCOUNT_ID || !CLOUDFLARE_STREAM_API_TOKEN) {
            throw new Error('Missing Cloudflare credentials');
        }

        const endpoint = `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/stream?direct_user=true`;
        const metadataParts = [];

        const reqMatadata = request.headers.get("Upload-Metadata");
        metadataParts.push(reqMatadata);

        const creator = session.user.id;

        metadataParts.push(`creator ${Buffer.from(creator).toString('base64')}`);

        const maxDurationSecondsBase64 = getMaxDurationBase64(10);
        metadataParts.push(`maxDurationSeconds ${maxDurationSecondsBase64}`);

        // metadataParts.push('requiresignedurls');

        const expiryBase64 = getExpiryBase64(10);

        metadataParts.push(`expiry ${expiryBase64}`);


        const responseMetadata = metadataParts.join(',');


        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                Authorization: `bearer ${CLOUDFLARE_STREAM_API_TOKEN}`,
                "Tus-Resumable": "1.0.0",
                "Upload-Length": request.headers.get("Upload-Length") || "0",
                "Upload-Metadata": responseMetadata,
            },
        });

        console.log({response},
          '\n\n', CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_STREAM_API_TOKEN
        );

        if (!response.ok) {
            return new Response("Failed to create upload", { status: response.status });
        }

        const destination = response.headers.get("Location");
        if (!destination) {
            return new Response("Failed to get upload location", { status: 500 });
        }

        return new Response(null, {
            headers: { ...corsHeaders, Location: destination }
        });
    } catch (error) {
        console.error('Upload error:', error);
        return new Response("Internal server error", { status: 500 });
    }
}
