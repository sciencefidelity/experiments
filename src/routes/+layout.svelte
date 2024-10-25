<script lang="ts">
	import type { Snippet } from 'svelte';
	import GlobalStyles from '$lib/GlobalStyles.svelte';
	import Header from '$lib/Header.svelte';
	import type { PageData } from './$types';

	type Props = {
		children: Snippet;
		data: PageData;
	};

	const { children, data }: Props = $props();
	const { paths } = $derived(data);
</script>

<GlobalStyles>
	<Header {paths} />
	<main>
		{@render children()}
	</main>
</GlobalStyles>

<style>
	main {
		display: grid;
		height: calc(100vh - 56px);
		place-items: center;
	}
</style>
