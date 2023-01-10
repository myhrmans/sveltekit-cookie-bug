import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session');
	console.log('Session:', session);

	console.log('Removing session');
	event.cookies.set('session', '', {
		path: '/',
		expires: new Date(Date.now() - 86400000)
	});
	event.cookies.delete('session', { path: '/' });
	return await resolve(event);
};
