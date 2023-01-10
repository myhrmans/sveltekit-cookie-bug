import type { Action, Actions, PageServerLoad } from './$types';

/** @type {import('./$types').PageLoad} */
export async function load({ cookies }) {
	console.log('Setting cookie "session" to value thisisarandomtoken');

	cookies.set('session', 'thisisarandomtoken', {
		// send cookie for every page
		path: '/',
		// server side only cookie so you can't use `document.cookie`
		httpOnly: true, 
		// only requests from same site can send cookies
		// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
		sameSite: 'strict',
		// only sent over HTTPS in production
		secure: process.env.NODE_ENV === 'production',
		// set cookie to expire after a month
		maxAge: 60 * 60 * 24 * 30
	});
}
