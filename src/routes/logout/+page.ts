import { pb } from '$lib/services/pb';
import { goto } from '$app/navigation';
export const load: PageLoad = async () => {
	await pb.authStore.clear();
	goto('/');
};
