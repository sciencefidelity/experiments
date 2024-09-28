<svelte:head>
	<title>Typography</title>
</svelte:head>

<section class="typography">
	<div id="graph">
		<i>t</i><i>y</i><i>p</i><i>o</i><i>g</i><i>r</i><i>a</i><i>p</i><i>h</i><i>y</i>
	</div>
	<div id="grape">grapefruit</div>
	<div id="melon">watermelon</div>
</section>

<style lang="scss">
	$bg: hsl(40, 7%, 8%);
	$grape: hsl(51, 100%, 50%);
	$melon: hsl(290, 53%, 46%);
	$graph: hsl(92, 68%, 53%);

	@keyframes grape {
		0% {
			font-variation-settings:
				'MONO' 1,
				'CASL' 0,
				'wght' 300,
				'slnt' 0;
			color: $melon;
		}
		50% {
			font-variation-settings:
				'MONO' 1,
				'CASL' 1,
				'wght' 1000,
				'slnt' 0;
			color: $grape;
		}
		100% {
			font-variation-settings:
				'MONO' 1,
				'CASL' 0,
				'wght' 300,
				'slnt' 0;
			color: $melon;
		}
	}

	@keyframes melon {
		0% {
			font-variation-settings:
				'MONO' 1,
				'CASL' 1,
				'wght' 1000,
				'slnt' 0;
			color: $grape;
		}
		50% {
			font-variation-settings:
				'MONO' 1,
				'CASL' 0,
				'wght' 300,
				'slnt' 0;
			color: $melon;
		}
		100% {
			font-variation-settings:
				'MONO' 1,
				'CASL' 1,
				'wght' 1000,
				'slnt' 0;
			color: $grape;
		}
	}

	.typography {
		font-family: Recursive;
	}

	// Variation range for Recursive:
	// "MONO" 0 - 1, "CASL" 0 - 1, "wght" 300 - 1000, "slnt" -15 - 0
	%vari {
		font-size: min(20vh, 15vw);
		text-align: center;
	}

	#graph {
		@extend %vari;

		color: $graph;
		@for $i from 1 through 10 {
			:nth-child(#{$i}) {
				font-variation-settings:
					'MONO' 1,
					'CASL' ($i - 1) * 0.11,
					'wght' (($i - 1) * 78) + 300,
					'slnt' ($i - 1) * -1.67;
			}
		}
	}

	#grape {
		@extend %vari;

		animation: grape 15s infinite;
	}

	#melon {
		@extend %vari;

		animation: melon 15s infinite;
	}
</style>
