<script lang="ts">
	import { page } from '$app/stores';
	import type NavElement from '$lib/types/NavElement';

	export let navElements: NavElement[];
</script>

<div class="btm-nav">
	{#each navElements as navElement}
		<a href={navElement.href} class:active={$page.url.pathname == navElement.href}>
			<img src={`/icons/${navElement.icon}.svg`} alt={navElement.name} height="24" width="24" />
			<span class="btm-nav-label">{navElement.name}</span>
		</a>
	{/each}
</div>
