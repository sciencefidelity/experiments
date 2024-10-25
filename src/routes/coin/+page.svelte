<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => preloadImages());

	const FRAME_COUNT = 602;
	let canvas: HTMLCanvasElement;
	let context: CanvasRenderingContext2D | null = null;
	const img = new Image();

	function currentFrame(index: number) {
		return `/videos/coin/frame-${index.toString().padStart(6, '0')}.jpg.webp`;
	}

	function preloadImages() {
		for (let i = 1; i < FRAME_COUNT; i++) {
			const img = new Image();
			img.src = currentFrame(i);
		}
	}

	function updateImage(index: number) {
		img.src = currentFrame(index);
		context && context?.drawImage(img, 0, 0);
	}

	function onScroll(e: Event) {
		let scrollY = (e.target as HTMLDivElement).scrollTop;
		let innerHeight = FRAME_COUNT * 8.5;
		const scrollFraction = scrollY / innerHeight;
		const frameIndex = Math.min(FRAME_COUNT - 1, Math.ceil(scrollFraction * FRAME_COUNT));

		requestAnimationFrame(() => updateImage(frameIndex + 1));
	}

	$effect(() => {
		img.onload = function () {
			context?.drawImage(img, 0, 0);
		};
		img.src = currentFrame(1);

		context = canvas.getContext('2d');
		canvas.width = 1920;
		canvas.height = 1080;
	});
</script>

<svelte:head>
	<title>Coin</title>
</svelte:head>

<section class="coin-wrapper" onscroll={onScroll}>
	<div class="coin-container" style:height="{FRAME_COUNT * 10}px">
		<canvas class="coin" bind:this={canvas}></canvas>
	</div>
</section>

<style>
	.coin-wrapper {
		height: calc(100vh - 56px);
		width: 100vw;
		overflow: hidden auto;
	}

	.coin {
		position: fixed;
		top: calc(50% + 20px);
		left: 50%;
		z-index: -2;
		width: 90vw;
		border: 1px solid hsl(0, 0%, 10%);
		border-radius: 1rem;
		transform: translate(-50%, -50%);
		opacity: 0.9;
	}
</style>
