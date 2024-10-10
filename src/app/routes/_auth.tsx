import { createFileRoute, redirect } from '@tanstack/react-router';
import { isAuthenticated } from '@/entities/session';

export const Route = createFileRoute('/_auth')({
	beforeLoad: async ({ location }) => {
		if (!isAuthenticated()) {
			throw redirect({
				to: '/',
				search: {
					// Use the current location to power a redirect after login
					// (Do not use `router.state.resolvedLocation` as it can
					// potentially lag behind the actual current location)
					redirect: location.href,
				},
			});
		}
	},
});
