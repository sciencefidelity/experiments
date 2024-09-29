<script lang="ts">
	import { strategies } from '$lib/data';

	function rand(min: number, max: number) {
		return (Math.floor(Math.pow(10, 14) * Math.random() * Math.random()) % (max - min + 1)) + min;
	}

	const i = rand(0, strategies.length - 1);
</script>

<svelte:head>
	<title>Oblique Strategies</title>
</svelte:head>

<section class="oblique">
	<div class="container">
		<p class="strategy">{strategies[i]}</p>
	</div>
</section>

<style lang="scss">
	.container {
		height: 20rem;
		width: 32rem;
		margin: auto;
		border: 1px solid hsl(0, 0%, 10%);
		font-family: Helvetica, sans-serif;
		background-color: hsl(60, 15%, 95%);
		border-radius: 1rem;
	}

	.strategy {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		padding: 0;
		margin: 0;
		line-height: 1.4;
	}
</style>
