<script lang="ts">
	const SQUARES = 10;
	let hueMin = 0;
	let hueMax = 360;
	let saturation = 50;
	let lightness = 50;
	let isPlayingAnimation = false;
	$: buttonText = isPlayingAnimation ? 'stop' : 'animate';

	const h = (e: number) => (hueMax / SQUARES) * e - hueMin;
	const changeHueMin = (e: Event) => {
		hueMin = parseInt((e.currentTarget as HTMLInputElement).value);
	};
	const changeHueMax = (e: Event) => {
		hueMax = parseInt((e.currentTarget as HTMLInputElement).value);
	};
	const changeSaturation = (e: Event) => {
		saturation = parseInt((e.currentTarget as HTMLInputElement).value);
	};
	const changeLightness = (e: Event) => {
		lightness = parseInt((e.currentTarget as HTMLInputElement).value);
	};
	const toggleAnimation = () => {
		let v = Math.min(1, hueMax) + hueMin;
		const dx = 1; // "speed"
		isPlayingAnimation = !isPlayingAnimation;
		const anim = () => {
			v += dx;
			if (v > 360) v = 1;
			hueMin = Math.round(v);
			if (isPlayingAnimation) requestAnimationFrame(anim);
		};
		if (isPlayingAnimation) anim();
	};
</script>

<svelte:head>
	<title>Coloured Squares</title>
</svelte:head>

<section id="container">
	{#each Array.from(Array(SQUARES).keys()) as i}
		<div
			class="color-{i}"
			style="background-color: hsl({h(i)}, {saturation}%, {lightness}%);"
		></div>
	{/each}
</section>
<div>
	<input type="range" min="0" max="360" value={hueMax} on:input={changeHueMax} />
	<input type="range" min="0" max="360" value={hueMin} on:input={changeHueMin} />
	<input type="range" min="0" max="100" value={saturation} on:input={changeSaturation} />
	<input type="range" min="0" max="100" value={lightness} on:input={changeLightness} />
	<div class="animate">
		<button on:click={toggleAnimation}>{buttonText}</button>
	</div>
</div>

<style lang="scss">
	$background: hsl(40, 13%, 62%);
	$colors: (
		color-0: hsl(129, 44%, 33%),
		color-1: hsl(120, 62%, 49%),
		color-2: hsl(48, 95%, 52%),
		color-3: hsl(33, 99%, 51%),
		color-4: hsl(21, 100%, 50%),
		color-5: hsl(352, 100%, 41%),
		color-6: hsl(300, 70%, 40%),
		color-7: hsl(254, 59%, 59%),
		color-8: hsl(211, 66%, 56%),
		color-9: hsl(233, 100%, 47%)
	);

	@mixin after($pos: relative) {
		position: $pos;
		&::after {
			display: block;
			padding-bottom: 100%;
			content: '';
		}
	}

	:global(*) {
		box-sizing: border-box;
		margin: 0;
		&::after,
		&::before {
			box-sizing: border-box;
		}
	}

	:global(body) {
		display: grid;
		place-items: center;
		width: 100vw;
		height: 100vh;
		background: $background;
	}

	@each $x, $color in $colors {
		.#{$x} {
			background: $color;
		}
	}

	#container {
		@include after();

		width: min(80vh, 88vw);
		@for $i from 1 through 10 {
			:nth-child(#{$i}) {
				@include after($pos: absolute);

				bottom: 0;
				z-index: (20 - $i);
				width: (10% * $i);
			}
		}
	}

	.animate {
		text-align: center;
		margin-top: 0.75rem;
		button {
			background-color: gray;
			border: none;
			padding: 0.5rem 1rem;
			border-radius: 0.5rem;
			width: 6rem;
		}
	}

	input {
		outline: none;
	}
</style>
