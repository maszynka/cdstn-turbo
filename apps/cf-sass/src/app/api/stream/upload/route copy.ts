import { getSessionFromCookie } from "@/utils/auth";
import { NextRequest } from 'next/server';
import { redirect } from "next/navigation";
import Cloudflare from 'cloudflare';


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




// const helper = async <T, U>(fn: () => Promise<T>): Promise<[T, null] | [null, unknown]> => {
//   try {
//     const data = await fn();
//     return [data, null];
//   } catch (error) {
//     return [null, error];
//   }
// }


export async function POST(request: NextRequest) {
    const session = await getSessionFromCookie()
    if (!session) redirect('/')

      console.log('session', session);

    try {
      const { CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_STREAM_API_TOKEN } = process.env;
      if (!CLOUDFLARE_ACCOUNT_ID || !CLOUDFLARE_STREAM_API_TOKEN) {
          throw new Error('Missing Cloudflare credentials');
      }


        // const endpoint = `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/stream?direct_user=true`;
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


        // const response = await fetch(endpoint, {
        //     method: "POST",
        //     headers: {
        //         Authorization: `bearer ${CLOUDFLARE_STREAM_API_TOKEN}`,
        //         "Tus-Resumable": "1.0.0",
        //         "Upload-Length": request.headers.get("Upload-Length") || "0",
        //         "Upload-Metadata": responseMetadata,
        //     },
        // });

      const client = new Cloudflare({
        apiEmail: process.env['CLOUDFLARE_EMAIL'], // This is the default and can be omitted
        apiToken: CLOUDFLARE_STREAM_API_TOKEN, // This is the default and can be omitted
      });

      let directCreatorsUploadResponse;

      const param = {
        'Tus-Resumable': "1.0.0",
        "Upload-Length": request.headers.get("Upload-Length") || "0",
        'Upload-Creator': creator,
        "Upload-Metadata": responseMetadata,
      }

      try {
        directCreatorsUploadResponse = await client.stream.directUpload.create({
          ...param,
          account_id: CLOUDFLARE_ACCOUNT_ID,
          maxDurationSeconds: 10 * 60,
          creator: session.user.id,
          allowedOrigins: ['*'],
          // meta: {
          //   expiry: expiryBase64
          // }
        });

        console.log('directCreatorsUploadResponse', directCreatorsUploadResponse);
      } catch (e) {
        console.error('Error creating direct upload', e);
        return new Response("Failed to create upload", { status: 500 });
      }



      console.log( '\n\n', {request, directCreatorsUploadResponse}, '\n\n');


        const destination = directCreatorsUploadResponse.uploadURL;
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
