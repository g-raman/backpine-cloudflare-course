import { Hono } from 'hono';
import { Bindings } from 'hono/types';

export const App = new Hono<{ Bindings: Env }>();

App.get('/:id', async (c) => {
	const cf = c.req.raw.cf;

	const country = cf?.country;
	const lat = cf?.latitude;
	const long = cf?.longitude;
	return c.json({
		country,
		lat,
		long,
	});
});
