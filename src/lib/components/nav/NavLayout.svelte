<script lang="ts">
	import { isMobile } from '$lib/services/platform';
	import type NavElement from '$lib/types/NavElement';
	import BottomNav from './BottomNav.svelte';
	import Navbar from './Navbar.svelte';
	import TopNav from './TopNav.svelte';

	export let navElements: NavElement[];
	export let profileElements: NavElement[];
</script>

{#if $isMobile}
	<TopNav {profileElements} />
{:else}
	<Navbar {navElements} {profileElements} />
{/if}

<div class="flex justify-center w-full">
	<div
		class="flex flex-col justify-center justify-self-center self-center w-full px-10 md:px-20 md:w-3/4 items-center"
	>
		<slot />
	</div>
</div>

{#if $isMobile}
	<BottomNav {navElements} />
{/if}
