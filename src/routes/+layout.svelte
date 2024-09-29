<script lang="ts">
	import Header from '$lib/Header.svelte';

	const modules = import.meta.glob('./**/*.svelte');
	let paths = [];

	for (let path in modules) {
		if (path.startsWith('./+')) continue;
		paths.push(path.split('/')[1]);
	}
</script>

<Header {paths} />
<main>
	<slot />
</main>

<style global>
	:root {
		--background: hsl(40, 13%, 62%);
	}

	@font-face {
		font-family: Recursive;
		font-size: normal;
		font-weight: normal;
		font-optical-sizing: auto;
		src:
			url('/fonts/recursive.woff2') format('woff supports variations'),
			url('/fonts/recursive.woff2') format('woff2-variations');
		font-display: swap;
	}

	* {
		box-sizing: border-box;
		margin: 0;
		::before,
		::after {
			box-sizing: border-box;
		}
	}

	html {
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
	}

	html::after {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 201;
		width: 100%;
		height: 100%;
		pointer-events: none;
		content: '';
		background: url('/images/noise.jpg');
		opacity: 0.05;
	}

	body {
		background-color: var(--background);
	}

	main {
		display: grid;
		height: calc(100vh - 2.5rem - 1px);
		place-items: center;
	}
</style>
