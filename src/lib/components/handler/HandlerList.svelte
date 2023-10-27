<script lang="ts">
	import { currentUser } from '$lib/services/pb';
	import type Handler from '$lib/types/Handler';
	import HandlerEntry from './HandlerEntry.svelte';

	export let handlers: Handler[];
	export let handlerName: string;

	function addHandler() {
		const handler: Handler = {
			id: 'new',
			name: '',
			user: ($currentUser.model ?? {}).id ?? ''
		};
		handlers.push(handler);
		handlers = handlers;
	}
</script>

<div class="w-full flex justify-center flex-col">
	<div class="flex flex-row justify-between mb-5">
		<h3 class="text-2xl self-center">{handlerName}</h3>
		<button class="btn btn-ghost" on:click={addHandler}
			><svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
			</svg>

			Add</button
		>
	</div>
	<table class="table w-full">
		<!-- head -->
		<thead>
			<tr>
				<th class="">Name</th>
				<th class="text-end">Actions</th>
			</tr>
		</thead>
		<tbody>
			{#each handlers as handler}
				<HandlerEntry
					on:deleted
					bind:handler
					collection={handlerName.toLowerCase()}
					isEdit={handler.id == 'new'}
				/>
			{/each}
		</tbody>
	</table>
</div>
