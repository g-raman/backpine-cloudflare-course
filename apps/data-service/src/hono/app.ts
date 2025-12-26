import { Hono } from 'hono';
import { Bindings } from 'hono/types';

export const App = new Hono<{ Bindings: Env }>();

App.get('/:id', async (c) => {
	return c.json({
		message: 'Hello World!',
	});
});
