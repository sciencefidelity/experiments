<script lang="ts">
	const modules = import.meta.glob('./**/*.svelte');
	let paths = [];

	for (let path in modules) {
		if (path.startsWith('./+')) continue;
		paths.push(path.split('/')[1]);
	}
</script>

<header>
	<ul>
		{#each paths as path}
			<li>
				<a href="/{path}">{path}</a>
			</li>
		{/each}
	</ul>
</header>
<main>
	<slot />
</main>

<style global>
	:root {
		--background: hsl(40, 13%, 62%);
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

	header {
		display: grid;
		place-items: center;
		height: 2.5rem;
		border-bottom: 1px solid hsl(0, 0%, 10%);
	}

	main {
		display: grid;
		height: calc(100vh - 2.5rem - 1px);
		place-items: center;
	}

	ul {
		padding: 0;
	}

	li {
		display: inline;
		padding-inline: 0.75rem;
		font-family: monospace;
		a {
			color: hsl(0, 0%, 10%);
		}
	}
</style>
