<svelte:head>
	<title>Triangle</title>
</svelte:head>

<section class="triangle">
	{#each Array(10) as _}
		<div></div>
	{/each}
</section>

<style lang="scss">
	:root {
		--background: hsl(40, 13%, 62%);
		--color-1: hsl(148, 68%, 43%);
		--color-2: hsl(86, 68%, 53%);
		--color-3: hsl(58, 89%, 48%);
		--color-4: hsl(39, 92%, 51%);
		--color-5: hsl(19, 92%, 54%);
		--color-6: hsl(354, 81%, 56%);
		--color-7: hsl(330, 52%, 51%);
		--color-8: hsl(277, 54%, 50%);
		--color-9: hsl(264, 63%, 47%);
		--color-10: hsl(241, 67%, 51%);
	}

	.triangle {
		position: relative;
		width: 20em;
		font-size: min(5vh, 4vw);
		&::after {
			display: block;
			padding-bottom: 86.66%;
			content: '';
		}
		@for $i from 1 through 10 {
			:nth-child(#{$i}) {
				position: absolute;
				top: 0;
				left: 50%;
				z-index: (10 - $i);
				width: 0;
				height: 0;
				border-right: (1em * $i) solid transparent;
				border-bottom: ((1.732em) * $i) solid var(--color-#{$i});
				border-left: (1em * $i) solid transparent;
				// box-shadow: 0 0.03em 0 0 rgba(hsl(0, 0%, 0%), 0.2);
				transform: translateX(-50%);
			}
		}
	}
</style>
