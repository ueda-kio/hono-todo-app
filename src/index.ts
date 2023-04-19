import { Hono } from 'hono';
import { basicAuth } from 'hono/basic-auth';
import { todos } from './todos/api';

const app = new Hono();
app.route('/api/todos', todos);

app.use(
	'/api/*',
	basicAuth({
		username: 'kio',
		password: 'kio',
	})
);

export default app;
