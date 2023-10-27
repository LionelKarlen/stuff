<script>
	import HandlerList from '$lib/components/handler/HandlerList.svelte';
	import { categories } from '$lib/services/handlers';
	import { pb } from '$lib/services/pb';

	async function handleDeleted() {
		categories.set(await pb.collection('categories').getFullList());
	}
</script>

<HandlerList handlers={$categories} handlerName={'Categories'} on:deleted={handleDeleted} />
