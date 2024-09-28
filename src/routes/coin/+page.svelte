<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => preloadImages());

	let canvas: HTMLCanvasElement;
	const frameCount = 602;
	const currentFrame = (index: number) => {
		return `/videos/coin/frame-${index.toString().padStart(6, '0')}.jpg.webp`;
	};

	document.body.style.height = `${frameCount * 3}vh`;

	const preloadImages = () => {
		for (let i = 1; i < frameCount; i++) {
			const img = new Image();
			img.src = currentFrame(i);
		}
	};

	$: context = canvas && canvas.getContext('2d');
	$: if (canvas) {
		canvas.width = 1920;
		canvas.height = 1080;
	}

	const img = new Image();
	img.onload = function () {
		context?.drawImage(img, 0, 0);
	};
	img.src = currentFrame(1);
	const updateImage = (index: number) => {
		img.src = currentFrame(index);
		context && context?.drawImage(img, 0, 0);
	};

	let scrollY = 0;
	let innerWidth = 0;

	function onScroll() {
		const scrollFraction = scrollY / innerWidth;
		const frameIndex = Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount));

		requestAnimationFrame(() => updateImage(frameIndex + 1));
	}
</script>

<svelte:head>
	<title>Coin</title>
</svelte:head>
<svelte:window bind:scrollY bind:innerWidth on:scroll={onScroll} />

<section class="coin-container">
	<canvas id="coin" bind:this={canvas}></canvas>
</section>

<style>
	.coin-container {
		height: 100%;
	}

	#coin {
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: -2;
		width: 90vw;
		border: 1px solid hsl(0, 0%, 10%);
		transform: translate(-50%, -50%);
	}
</style>
