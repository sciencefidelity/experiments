<script lang="ts">
	let isDarkMode = true;

	function toggleMode() {
		isDarkMode = !isDarkMode;
	}
</script>

<svelte:head>
	<title>Venn Diagram</title>
</svelte:head>

<section id="site-main" class:dark={isDarkMode} class:light={!isDarkMode}>
	<button
		id="mode"
		class:darkmode={isDarkMode}
		class:lightmode={!isDarkMode}
		on:click={toggleMode}
		aria-label={isDarkMode ? 'light mode' : 'dark mode'}
	>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<path d="M8 256a248 248 0 10496 0 248 248 0 00-496 0zm248 184V72a184 184 0 110 368z" />
		</svg>
	</button>
	<div class="container">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div>a</div>
		<div>b</div>
		<div>c</div>
		<div>i</div>
	</div>
</section>

<style lang="scss">
	$dark: hsl(238, 24%, 23%);
	$light: hsl(12, 24%, 88%);
	$green: hsl(140, 60%, 50%);
	$blue: hsl(204, 100%, 50%);
	$red: hsl(360, 100%, 60%);
	$white: hsl(0, 0%, 100%);
	$time: 0.3s ease-in-out;

	:global(*) {
		box-sizing: border-box;
		margin: 0;
		&::after,
		&::before {
			box-sizing: border-box;
		}
	}

	:global(html) {
		overflow: hidden;
		color: $white;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
	}

	#site-main {
		font-family: 'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas,
			monospace;
		display: grid;
		place-items: center;
		width: 100vw;
		height: 100vh;
	}

	.light {
		background: $light;
		transition: background $time;
	}

	.dark {
		background: $dark;
		transition: background $time;
	}

	#mode {
		position: absolute;
		top: 1.8rem;
		right: 1.8rem;
		width: 3rem;
		cursor: pointer;
		background-color: transparent;
		border: none;
	}

	.darkmode {
		fill: $light;
		transition:
			fill $time,
			transform $time,
			-webkit-transform $time;
	}

	.lightmode {
		fill: $dark;
		transition:
			fill $time,
			transform $time,
			-webkit-transform $time;
		transform: scaleX(-1);
		transform: scaleX(-1);
	}

	@mixin circle($bottom: 10.02%, $left: 2.41%, $bg: $white, $blend: normal, $op: 1) {
		@extend %after;

		position: absolute;
		bottom: $bottom;
		left: $left;
		width: 60.59%;
		background: $bg;
		border-radius: 50%;
		mix-blend-mode: $blend;
		opacity: $op;
	}

	@mixin content($top: 67%, $left: 50%) {
		position: absolute;
		top: $top;
		left: $left;
		font-size: 5rem;
		color: var(--light);
		transform: translate(-50%, -50%);
	}

	.container {
		@extend %after;

		position: relative;
		width: 90vh;
		max-width: 88vw;
		:nth-child(1) {
			@include circle($bottom: 39.41%, $left: 19.705%);
		}
		:nth-child(2) {
			@include circle($left: 37%);
		}
		:nth-child(3) {
			@include circle();
		}
		:nth-child(4) {
			@include circle($bottom: 39.41%, $left: 19.705%, $bg: $green, $blend: difference, $op: 0.65);
		}
		:nth-child(5) {
			@include circle($left: 37%, $bg: $red, $blend: difference, $op: 0.65);
		}
		:nth-child(6) {
			@include circle($bg: $blue, $blend: difference, $op: 0.65);
		}
		:nth-child(7) {
			@include content($top: 18%, $left: 50%);
		}
		:nth-child(8) {
			@include content($left: 21%);
		}
		:nth-child(9) {
			@include content($left: 78%);
		}
		:nth-child(10) {
			@include content($top: 50%);
		}
	}

	%after {
		&::after {
			display: block;
			padding-bottom: 100%;
			content: '';
		}
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
