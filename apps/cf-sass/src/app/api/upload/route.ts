import { NextRequest } from 'next/server';
import { Upload } from 'tus-js-client';
// import { createReadStream, statSync } from 'fs';
// import { join } from 'path';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get('file') as File;
  console.log({ formData, file});
  if (!file) {
    return new Response('No file provided', { status: 400 });
  }

  try {
    const upload = new Upload(file, {
      endpoint: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/stream`,
      headers: {
        Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
      },
      chunkSize: 50 * 1024 * 1024, // 50MB chunks
      retryDelays: [0, 3000, 5000, 10000, 20000],
      metadata: {
        name: file.name,
        filetype: file.type,
      },
      onError: (error) => {
        throw error;
      },

      onProgress: (bytesUploaded, bytesTotal) => {
        const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
        console.log(`Upload progress: ${percentage}%`);
      },

      onSuccess: () => {
        resolve(new Response('Upload successful', { status: 200 }));
      },
    });

    return new Promise((resolve, reject) => {
      upload.start();

      upload.onError = (error) => {
        reject(new Response(error.message, { status: 500 }));
      };

      upload.onProgress = (bytesUploaded, bytesTotal) => {
        const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
        console.log(`Upload progress: ${percentage}%`);
      };

      upload.onSuccess = () => {
        resolve(new Response('Upload successful', { status: 200 }));
      };
    });
  } catch (error) {
    console.error('Upload error:', error);
    return new Response('Upload failed', { status: 500 });
  }
}
