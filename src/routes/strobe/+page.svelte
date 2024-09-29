<script lang="ts">
	import { onMount } from 'svelte';

	let i = 0;

	onMount(() => setInterval(colorChange, 2000));

	const colorChange = () => {
		i++;
		if (i === 6) {
			i = 0;
		}
	};
</script>

<svelte:head>
	<title>Strobe</title>
</svelte:head>

<section class="strobe">
	<div class="shape c{i}"></div>
</section>

<style lang="scss">
	.strobe {
		background-color: hsl(210, 3%, 16%);
		width: 100%;
		height: 100%;
	}

	.shape {
		position: relative;
		width: 100%;
		height: 100vh;
	}

	.c0 {
		background: hsl(120, 100%, 25%);
	}

	.c1 {
		background: hsl(48, 95%, 52%);
	}

	.c2 {
		background: hsl(19, 94%, 56%);
	}

	.c3 {
		background: hsl(354, 81%, 56%);
	}

	.c4 {
		background: hsl(271, 54%, 39%);
	}

	.c5 {
		background: hsl(188, 58%, 53%);
	}
</style>
