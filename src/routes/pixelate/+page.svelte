<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => preloadImage());

	let canvas: HTMLCanvasElement;
	let context: CanvasRenderingContext2D | null = null;
	let animate: HTMLInputElement;
	let isAnimating = $state(false);
	let blocks = $state(50);
	const img = new Image();

	$effect(() => {
		img.onload = function () {
			context?.drawImage(img, 0, 0);
		};
		img.src = '/images/umbrella-lg.jpg';

		context = canvas.getContext('2d');
		canvas.width = 1000;
		canvas.height = 666;
	});

	function preloadImage() {
		const img = new Image();
		img.src = '/images/umbrella-lg.jpg';
	}

	function pixelate(v: number) {
		if (context) {
			const size = (isAnimating ? v : blocks) * 0.01;
			const w = canvas.width * size;
			const h = canvas.height * size;

			context.drawImage(img, 0, 0, w, h);
			context.imageSmoothingEnabled = false;
			context.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
		}
	}

	function toggleAnim() {
		let v = Math.min(20, blocks);
		let dx = 0.01; // "speed"
		isAnimating = !isAnimating;

		const anim = () => {
			v += dx;
			if (v <= 1 || v > 20) dx = -dx;
			pixelate(v);
			if (isAnimating) requestAnimationFrame(anim);
		};

		if (isAnimating === true) anim();
	}

	function updateBlocks(e: Event) {
		blocks = Number((e.target as HTMLInputElement).value);
		pixelate(blocks);
	}
</script>

<svelte:head>
	<title>Pixelate</title>
</svelte:head>

<div class="pixelate-container">
	<canvas class="pixelate" bind:this={canvas}></canvas>
	<div class="control">
		<input class="blocks" type="range" min="1" max="50" value={blocks} oninput={updateBlocks} />
		<input
			class="animate"
			type="button"
			value={isAnimating ? 'stop' : 'animate'}
			bind:this={animate}
			onclick={toggleAnim}
		/>
	</div>
</div>

<style lang="scss">
	.pixelate-container {
		position: relative;
	}

	.pixelate {
		image-rendering: optimizeSpeed;
		image-rendering: crisp-edges;
		width: min(130vh, 90vw);
		border: 1px solid hsl(0, 0%, 10%);
		border-radius: 1rem;
	}

	.control {
		width: 100%;
		text-align: center;
	}

	.animate {
		text-align: center;
		margin-top: 0.75rem;
		font-family: monospace;
		background-color: gray;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		width: 6rem;
	}
</style>
