<script lang="ts">
	import Login from '$lib/components/Login.svelte';
	import BottomNav from '$lib/components/nav/BottomNav.svelte';
	import Navbar from '$lib/components/nav/Navbar.svelte';
	import { currentUser } from '$lib/services/pb';
	import { isMobile } from '$lib/services/platform';
	import type NavElement from '$lib/types/NavElement';
	import '../app.postcss';
	import '../fonts.css';

	const navElements: NavElement[] = [
		{
			name: 'Home',
			href: '/',
			icon: 'home',
			mobileOnly: true
		},
		{
			name: 'Categories',
			href: '/categories',
			icon: 'tag'
		},
		{
			name: 'Locations',
			href: '/locations',
			icon: 'map-pin'
		},
		{
			name: 'Designations',
			href: '/designations',
			icon: 'archive-box-arrow-down'
		}
	];
</script>

{#if !$isMobile}
	<Navbar {navElements} />
{/if}
<div class="flex justify-center w-full">
	<div
		class="flex flex-col justify-center justify-self-center self-center w-full px-10 md:px-20 md:w-3/4 items-center"
	>
		{#if $currentUser.model}
			<slot />
		{:else}
			<Login />
		{/if}
	</div>
</div>

{#if $isMobile}
	<BottomNav {navElements} />
{/if}
