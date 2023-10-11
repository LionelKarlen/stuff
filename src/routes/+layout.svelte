<script>
	import Login from '$lib/components/Login.svelte';
	import { currentUser } from '$lib/services/pb';
	import { isMobile } from '$lib/services/platform';
	import '../app.postcss';
	import '../fonts.css';
</script>

<div class="flex justify-center w-full">
	<div
		class="flex flex-col justify-center justify-self-center self-center w-full px-10 md:px-20 md:w-3/4 items-center"
	>
		{#if $currentUser.model}
			{#if $isMobile}
				<slot />
			{:else}
				<slot />
			{/if}
		{:else}
			<Login />
		{/if}
	</div>
</div>
