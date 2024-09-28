<svelte:head>
	<title>Circles</title>
</svelte:head>

<main id="site-main">
	{#each Array.from(Array(6).keys()) as i}
		<div id="layer-{i + 1}">
			{#each Array(i + 1) as _j}
				<div></div>
			{/each}
		</div>
	{/each}
</main>

<style lang="scss" global>
	@charset 'utf-8';

	$background: hsl(40, 13%, 62%);
	$bright1: hsl(207, 83%, 44%);
	$bright2: hsl(100, 71%, 44%);
	$bright3: hsl(48, 100%, 64%);
	$bright4: hsl(13, 100%, 59%);
	$bright5: hsl(357, 83%, 48%);
	$bright6: hsl(335, 78%, 57%);
	$cutout: 0.02em 0.05em 0.02em 0.02em rgba(hsl(0, 0%, 0%), 0.15);

	:global(*) {
		box-sizing: border-box;
		margin: 0;
		&::before,
		&::after {
			box-sizing: border-box;
		}
	}

	:global(body) {
		display: grid;
		place-items: center;
		height: 100vh;
		background: $background;
	}

	#site-main {
		position: relative;
		width: min(80vh, 88vw);
		&::after {
			display: block;
			padding-bottom: 100%;
			content: '';
		}
	}

	%layers {
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
	}

	@mixin circle($num: 1, $width: 50%, $color: $bright2) {
		@extend %layers;
		@for $i from 0 through $num {
			:nth-child(#{($i + 1)}) {
				position: absolute;
				top: 50%;
				left: $width * $i;
				width: $width;
				height: $width;
				background: $color;
				border-radius: 100%;
				box-shadow: $cutout;
				transform: translateY(-50%);
			}
		}
	}

	#layer-1 {
		@extend %layers;

		background: $bright1;
		border-radius: 100%;
		box-shadow: $cutout;
	}

	#layer-2 {
		@include circle();
	}

	#layer-3 {
		@include circle($num: 2, $width: 33.33%, $color: $bright3);
	}

	#layer-4 {
		@include circle($num: 3, $width: 25%, $color: $bright4);
	}

	#layer-5 {
		@include circle($num: 4, $width: 20%, $color: $bright5);
	}

	#layer-6 {
		@include circle($num: 5, $width: 16.66%, $color: $bright6);
	}

	:global(html::after) {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 201;
		width: 100%;
		height: 100%;
		pointer-events: none;
		content: '';
		background: url('/images/noise.jpg');
		opacity: 0.05;
	}
</style>
