<script lang="ts">
	const SQUARES = 10;
	let hueMin = $state(0);
	let hueMax = $state(360);
	let saturation = $state(50);
	let lightness = $state(50);
	let isPlayingAnimation = false;

	function h(e: number) {
		return (hueMax / SQUARES) * e - hueMin;
	}

	function changeHueMin(e: Event) {
		hueMin = parseInt((e.currentTarget as HTMLInputElement).value);
	}

	function changeHueMax(e: Event) {
		hueMax = parseInt((e.currentTarget as HTMLInputElement).value);
	}

	function changeSaturation(e: Event) {
		saturation = parseInt((e.currentTarget as HTMLInputElement).value);
	}

	function changeLightness(e: Event) {
		lightness = parseInt((e.currentTarget as HTMLInputElement).value);
	}

	function toggleAnimation() {
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
	}

	const buttonText = $state(isPlayingAnimation ? 'stop' : 'animate');
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
	<input type="range" min="0" max="360" value={hueMax} oninput={changeHueMax} />
	<input type="range" min="0" max="360" value={hueMin} oninput={changeHueMin} />
	<input type="range" min="0" max="100" value={saturation} oninput={changeSaturation} />
	<input type="range" min="0" max="100" value={lightness} oninput={changeLightness} />
	<div class="animate">
		<button onclick={toggleAnimation}>{buttonText}</button>
	</div>
</div>

<style lang="scss">
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
			font-family: monospace;
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
