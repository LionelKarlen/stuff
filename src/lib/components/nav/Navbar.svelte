<script lang="ts">
	import type NavElement from '$lib/types/NavElement';

	export let navElements: NavElement[];
	export let profileElements: NavElement[];
</script>

<div class="navbar bg-base-100 shadow-md mb-10 px-10">
	<div class="navbar-start">
		<a class="btn btn-ghost hover:bg-transparent normal-case text-xl" href="/">stuff</a>
	</div>
	<div class="navbar-end flex flex-row gap-2">
		{#each navElements as navElement}
			{#if !navElement.mobileOnly}
				<a class="btn btn-ghost" href={navElement.href}>
					<img src={`/icons/${navElement.icon}.svg`} alt={navElement.name} height="24" width="24" />
					{navElement.name}
				</a>
			{/if}
		{/each}
		<div class="dropdown dropdown-end">
			<button tabindex="0" class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
					/>
				</svg>
			</button>
			<ul class="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
				{#each profileElements as profileElement}
					<li><a href={profileElement.href}>{profileElement.name}</a></li>
				{/each}
			</ul>
		</div>
	</div>
</div>
