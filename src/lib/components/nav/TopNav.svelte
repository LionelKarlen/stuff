<script lang="ts">
	import type NavElement from '$lib/types/NavElement';

	export let profileElements: NavElement[];
</script>

<div class="navbar bg-base-100 shadow-md absolute top-0 md:px-10">
	<div class="navbar-start">
		<a class="btn btn-ghost hover:bg-transparent normal-case text-xl" href="/">
			<img src="/Logo.png" alt="stuff logo" height="40" width="40" />
			stuff</a
		>
	</div>
	<div class="navbar-end flex flex-row gap-2">
		{#each profileElements as profileElement}
			<a class="btn btn-ghost" href={profileElement.href}>
				<img
					src={`/icons/${profileElement.icon}.svg`}
					alt={profileElement.name}
					height="24"
					width="24"
				/>
			</a>
		{/each}
	</div>
</div>
