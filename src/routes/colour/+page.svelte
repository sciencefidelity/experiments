<script lang="ts">
	let colour = 'transparent';

	function generateRandomColour() {
		colour = `rgb(${color()}, ${color()}, ${color()})`;
	}

	function color() {
		return `${(Math.random() * 255).toFixed(0)}`.padStart(3, '0');
	}
</script>

<svelte:head>
	<title>Random Colour</title>
</svelte:head>

<section class="colour" style="background-color: {colour};">
	<button onclick={generateRandomColour} aria-label="change colour">
		<p>{colour};</p>
	</button>
</section>

<style lang="scss">
	.colour {
		width: 100%;
		height: 100%;
		button {
			cursor: pointer;
			width: 100%;
			height: 100%;
			background-color: transparent;
			border: none;
		}
	}

	p {
		font-family: monospace;
		width: 100%;
		padding: 2rem;
		background-color: transparent;
	}
</style>
