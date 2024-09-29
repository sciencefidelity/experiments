<script lang="ts">
	let play = false;
	let canvas: HTMLCanvasElement;
	let blocks: HTMLInputElement;
	let animate: HTMLInputElement;
	let img: HTMLImageElement;
	let ctx: CanvasRenderingContext2D | null = null;

	$: if (canvas) {
		ctx = canvas.getContext('2d');
		const initialImageURL = '/images/umbrella-lg.jpg';
		draw(initialImageURL);
	}

	function draw(imgURL: string) {
		img = new Image();
		img.crossOrigin = 'anonymous';
		img.src = imgURL;
		img.onload = function () {
			canvas.height = img.height;
			canvas.width = img.width;
			ctx?.drawImage(img, 0, 0, img.height, img.width);
		};
	}

	function pixelate(v: any) {
		if (ctx) {
			canvas.height = img.height;
			canvas.width = img.width;

			const size = Number(play ? v : blocks.value) * 0.01;
			const w = canvas.width * size;
			const h = canvas.height * size;

			ctx.drawImage(img, 0, 0, w, h);
			ctx.imageSmoothingEnabled = false;
			ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
		}
	}

	function toggleAnim() {
		let v = Math.min(20, parseInt(blocks.value, 10));
		let dx = 0.01; // "speed"
		play = !play;
		animate.value = play ? 'stop' : 'Animate';

		const anim = () => {
			v += dx;
			if (v <= 1 || v > 20) dx = -dx;
			pixelate(v);
			if (play) requestAnimationFrame(anim);
		};

		if (play === true) anim();
	}
</script>

<svelte:head>
	<title>Pixelate</title>
</svelte:head>

<div class="crop">
	<canvas class="canvas" bind:this={canvas}></canvas>
</div>

<div class="control">
	<input class="blocks" type="range" min="1" max="50" value="1" bind:this={blocks} />
	<input class="animate" type="button" value="animate" bind:this={animate} on:click={toggleAnim} />
</div>

<style lang="scss">
	.canvas {
		image-rendering: optimizeSpeed;
		image-rendering: crisp-edges;
	}

	.control {
		padding-top: 1em;
	}

	.crop {
		position: relative;
	}
</style>
