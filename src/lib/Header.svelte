<script lang="ts">
	export let paths: string[];
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

<style>
	header {
		place-items: center;
		/* height: 2.5rem; */
		padding: 0.5rem;
		border-bottom: 1px solid hsl(0, 0%, 10%);
	}

	ul {
		padding: 0;
		line-height: 1.5;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
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
