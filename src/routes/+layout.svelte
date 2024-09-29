<script lang="ts">
	import { page } from '$app/stores';
	import GlobalStyles from '$lib/GlobalStyles.svelte';
	import Header from '$lib/Header.svelte';
</script>

<GlobalStyles>
	<Header paths={$page.data.paths} />
	<main>
		<slot />
	</main>
</GlobalStyles>

<style>
	main {
		display: grid;
		height: calc(100vh - 2.5rem - 1px);
		place-items: center;
	}
</style>
