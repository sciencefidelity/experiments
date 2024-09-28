<svelte:head>
	<title>Rainbow</title>
</svelte:head>

<section class="rainbow"><div></div></section>

<style lang="scss">
	$background: hsl(40, 13%, 62%);
	$color-1: hsl(360, 79%, 48%);
	$color-2: hsl(32, 100%, 52%);
	$color-3: hsl(48, 100%, 54%);
	$color-4: hsl(86, 67%, 52%);
	$color-5: hsl(169, 69%, 44%);
	$color-6: hsl(241, 100%, 63%);
	$color-7: hsl(264, 72%, 52%);
	$inset: inset 0 0 0;

	@mixin after($padding: 100%) {
		&::after {
			display: block;
			padding-bottom: $padding;
			content: '';
		}
	}

	.rainbow {
		@include after($padding: 50%);

		position: relative;
		width: min(150vh, 90vw);
		overflow: hidden;
		:nth-child(1) {
			@include after();

			position: absolute;
			width: 100%;
			font-size: min(3.57vw, 5.9vh);
			background: transparent;
			border-radius: 50%;
			box-shadow:
				$inset 0.5em $color-1,
				$inset 1em $color-2,
				$inset 1.5em $color-3,
				$inset 2em $color-4,
				$inset 2.5em $color-5,
				$inset 3em $color-6,
				$inset 3.5em $color-7;
		}
	}
</style>
