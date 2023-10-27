<script>
	import HandlerList from '$lib/components/handler/HandlerList.svelte';
	import { locations } from '$lib/services/handlers';
	import { pb } from '$lib/services/pb';

	async function handleDeleted() {
		locations.set(await pb.collection('locations').getFullList());
	}
</script>

<HandlerList handlers={$locations} handlerName={'Locations'} on:deleted={handleDeleted} />
