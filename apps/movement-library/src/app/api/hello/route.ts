import { cookies } from 'next/headers';

export const runtime = 'edge';

export async function GET(_: Request) {
	const cookieStore = await cookies();
	const token = cookieStore.get('token');
	console.log('token', token);

	return new Response('Hello, Next.js!', {
		status: 200,
		// headers: { ...(hasCookie && {'Set-Cookie': `token=${token}`}) },
	});
}