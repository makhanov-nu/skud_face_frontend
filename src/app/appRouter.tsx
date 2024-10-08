import { createRouter } from '@tanstack/react-router';
import { routeTree } from '@/routeTree.gen';

const router = createRouter({
	routeTree,
	defaultPreload: 'intent',
});

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

export function appRouter() {
	return router;
}
