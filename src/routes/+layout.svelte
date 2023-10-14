<script lang="ts">
	import Login from '$lib/components/Login.svelte';
	import NavLayout from '$lib/components/nav/NavLayout.svelte';
	import TopNav from '$lib/components/nav/TopNav.svelte';
	import { currentUser } from '$lib/services/pb';
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
	const profileElements: NavElement[] = [
		{
			name: 'Settings',
			href: '/settings',
			icon: 'cog-6-tooth'
		},
		{
			name: 'Logout',
			href: '/logout',
			icon: 'arrow-right-on-rectangle'
		}
	];
</script>

{#if $currentUser.model}
	<NavLayout {profileElements} {navElements}>
		<slot />
	</NavLayout>
{:else}
	<TopNav profileElements={[]} />
	<div class="flex justify-center w-full">
		<div
			class="flex flex-col justify-center justify-self-center self-center w-full px-10 md:px-20 md:w-3/4 items-center"
		>
			<Login />
		</div>
	</div>
{/if}
