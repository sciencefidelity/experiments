<script lang="ts">
	let patterns = [
		'dots',
		'circles',
		'lines',
		'lines-vertical',
		'squares',
		'cubes',
		// 'diagonal', // TODO: fixme!
		'textbook',
		'cross',
		'isometric',
		'radial',
		'repeating-circles',
		'zigzag',
		'isometric-3d',
		'target'
	];
</script>

<svelte:head>
	<title>Patterns</title>
</svelte:head>

<section class="patterns">
	{#each patterns as pattern}
		<div id={pattern} class="box"><button class="btn">{pattern}</button></div>
	{/each}
</section>

<style lang="scss">
	:root {
		--pattern-foreground: hsl(0, 0%, 0%);
		--pattern-pattern: hsl(0, 0%, 75%);
		--pattern-light: hsla(0, 0%, 75%, 50%);
		--pattern-background: hsl(60, 15%, 95%);
	}

	.patterns {
		background-color: var(--pattern-background);
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		justify-content: center;
		padding: 2rem;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
		gap: 0.5rem;
		padding: 0.5rem;
	}

	.box {
		display: grid;
		place-items: center;
		aspect-ratio: 1/1;
		background-color: var(--pattern-background);
		background-repeat: repeat;
		border: 1px solid var(--pattern-foreground);
	}

	#dots {
		background-image: radial-gradient(var(--pattern-pattern) 12%, transparent 12%),
			radial-gradient(var(--pattern-pattern) 12%, transparent 12%);
		background-position:
			0 0,
			10px 10px;
		background-size: 20px 20px;
	}

	#circles {
		background-image: radial-gradient(var(--pattern-pattern) 9%, transparent 9%),
			radial-gradient(var(--pattern-pattern) 9%, transparent 9%);
		background-position: center;
		background-size: 32px 32px;
	}

	#lines {
		background-image: linear-gradient(
			0deg,
			transparent 49%,
			var(--pattern-pattern) 49%,
			var(--pattern-pattern) 50%,
			transparent 50%,
			transparent 99%,
			var(--pattern-pattern) 99%,
			var(--pattern-pattern) 100%
		);
		background-position: center;
		background-size: 62px 62px;
	}

	#lines-vertical {
		background-image: linear-gradient(
			90deg,
			transparent 49%,
			var(--pattern-pattern) 49%,
			var(--pattern-pattern) 50%,
			transparent 50%,
			transparent 99%,
			var(--pattern-pattern) 99%,
			var(--pattern-pattern) 100%
		);
		background-position: center;
		background-size: 62px 62px;
	}

	#squares {
		background-image: linear-gradient(
				0deg,
				transparent 49%,
				var(--pattern-pattern) 49%,
				var(--pattern-pattern) 50%,
				transparent 50%,
				transparent 99%,
				var(--pattern-pattern) 99%,
				var(--pattern-pattern) 100%
			),
			linear-gradient(
				90deg,
				transparent 49%,
				var(--pattern-pattern) 49%,
				var(--pattern-pattern) 50%,
				transparent 50%,
				transparent 99%,
				var(--pattern-pattern) 99%,
				var(--pattern-pattern) 100%
			);
		background-position: center;
		background-size: 62px 62px;
	}

	#cubes {
		background-image: linear-gradient(
				0deg,
				transparent 49.5%,
				var(--pattern-pattern) 49.5%,
				var(--pattern-pattern) 50%,
				transparent 50%,
				transparent 99.5%,
				var(--pattern-pattern) 99.5%,
				var(--pattern-pattern) 100%
			),
			linear-gradient(
				90deg,
				transparent 49.5%,
				var(--pattern-pattern) 49.5%,
				var(--pattern-pattern) 50%,
				transparent 50%,
				transparent 99.5%,
				var(--pattern-pattern) 99.5%,
				var(--pattern-pattern) 100%
			);
		background-position: center;
		background-size: 120px 120px;
	}

	#diagonal {
		background-image: linear-gradient(
				45deg,
				transparent 49%,
				var(--pattern-pattern) 49%,
				var(--pattern-pattern) 50%,
				transparent 50%,
				transparent 99%,
				var(--pattern-pattern) 99%,
				var(--pattern-pattern) 100%
			),
			linear-gradient(
				-45deg,
				transparent 49%,
				var(--pattern-pattern) 49%,
				var(--pattern-pattern) 50%,
				transparent 50%,
				transparent 99%,
				var(--pattern-pattern) 99%,
				var(--pattern-pattern) 100%
			);
		background-position: center;
		background-size: 21px 21px;
	}

	#textbook {
		background-image: linear-gradient(var(--pattern-pattern) 2px, transparent 2px),
			linear-gradient(90deg, var(--pattern-pattern) 2px, transparent 2px),
			linear-gradient(var(--pattern-pattern) 1px, transparent 1px),
			linear-gradient(90deg, var(--pattern-pattern) 1px, transparent 1px);
		background-position: center;
		background-size:
			100px 100px,
			100px 100px,
			20px 20px,
			20px 20px;
		opacity: 0.8;
	}

	#target {
		background-image: repeating-radial-gradient(var(--pattern-pattern), 1px, transparent 30px);
	}

	#repeating-circles {
		background-image: repeating-radial-gradient(var(--pattern-pattern) 0 0.2%, transparent 0.2% 2%);
	}

	#radial {
		background-image: radial-gradient(
			transparent 21%,
			var(--pattern-pattern) 21% 24%,
			transparent 26%
		);
		background-position: center;
		background-size: 21px 21px;
	}

	#zigzag {
		background-image: linear-gradient(135deg, var(--pattern-pattern) 25%, transparent 25%),
			linear-gradient(225deg, var(--pattern-pattern) 25%, transparent 25%),
			linear-gradient(45deg, var(--pattern-pattern) 25%, transparent 25%),
			linear-gradient(315deg, var(--pattern-pattern) 25%, transparent 25%);
		background-position:
			20px 0,
			20px 0,
			0 0,
			0 0;
		background-size: 40px 80px;
	}

	#isometric {
		background-image: url('/isometric.svg');
		background-size: 60px;
		background-position: center;
	}

	#isometric-3d {
		background-image: linear-gradient(
				30deg,
				var(--pattern-pattern) 12%,
				transparent 12.5%,
				transparent 87%,
				var(--pattern-pattern) 87.5%,
				var(--pattern-pattern)
			),
			linear-gradient(
				150deg,
				var(--pattern-pattern) 12%,
				transparent 12.5%,
				transparent 87%,
				var(--pattern-pattern) 87.5%,
				var(--pattern-pattern)
			),
			linear-gradient(
				30deg,
				var(--pattern-pattern) 12%,
				transparent 12.5%,
				transparent 87%,
				var(--pattern-pattern) 87.5%,
				var(--pattern-pattern)
			),
			linear-gradient(
				150deg,
				var(--pattern-pattern) 12%,
				transparent 12.5%,
				transparent 87%,
				var(--pattern-pattern) 87.5%,
				var(--pattern-pattern)
			),
			linear-gradient(
				60deg,
				var(--pattern-light) 25%,
				transparent 25.5%,
				transparent 75%,
				var(--pattern-light) 75%,
				var(--pattern-light)
			),
			linear-gradient(
				60deg,
				var(--pattern-light) 25%,
				transparent 25.5%,
				transparent 75%,
				var(--pattern-light) 75%,
				var(--pattern-light)
			);
		background-position:
			0 0,
			0 0,
			10px 18px,
			10px 18px,
			0 0,
			10px 18px;
		background-size: 20px 35px;
	}

	#cross {
		background:
			radial-gradient(
				circle,
				transparent 20%,
				var(--pattern-background) 20%,
				var(--pattern-background) 80%,
				transparent 80%,
				transparent
			),
			radial-gradient(
					circle,
					transparent 20%,
					var(--pattern-background) 20%,
					var(--pattern-background) 80%,
					transparent 80%,
					transparent
				)
				25px 25px,
			linear-gradient(var(--pattern-pattern) 1px, transparent 1px) 0 -1px,
			linear-gradient(90deg, var(--pattern-pattern) 1px, var(--pattern-background) 1px) -1px 0;
		background-size:
			50px 50px,
			50px 50px,
			25px 25px,
			25px 25px;
	}

	.btn {
		width: 150px;
		height: 50px;
		font-size: 1rem;
		font-family: monospace;
		cursor: pointer;
		background: hsl(0, 100%, 100%);
		border: 2px solid var(--pattern-foreground);
		border-radius: 999px;
	}
</style>
