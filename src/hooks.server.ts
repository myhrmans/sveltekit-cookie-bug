import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	let session = event.cookies.get('session');
	console.log('Session:', session);

	console.log('Removing session');
	event.cookies.delete('session', {path:'/'})
	
	let session2 = event.cookies.get('session');

	console.log('Session after removal:', session2);
	return await resolve(event);
};
