<svelte:head>
	<title>Fractions</title>
</svelte:head>

<section class="fractions">
	{#each Array.from(Array(8).keys()) as i}
		<div>
			{#each Array(i + 1) as _}
				<div></div>
			{/each}
		</div>
	{/each}
</section>

<style lang="scss">
	:root {
		--bg: hsl(210, 4%, 11%);
		--text: hsl(0, 0%, 96%);
		--color-0: hsl(241, 60%, 55%);
		--color-1: hsl(148, 68%, 43%);
		--color-2: hsl(92, 68%, 53%);
		--color-3: hsl(51, 100%, 50%);
		--color-4: hsl(36, 100%, 51%);
		--color-5: hsl(12, 100%, 55%);
		--color-6: hsl(351, 75%, 52%);
		--color-7: hsl(290, 53%, 46%);
		--color-8: hsl(241, 60%, 55%);
		--color-9: hsl(92, 68%, 53%);
		--color-10: hsl(51, 100%, 50%);
		--color-11: hsl(351, 75%, 52%);
		--color-12: hsl(36, 100%, 51%);
		--color-13: hsl(241, 60%, 55%);
		--color-14: hsl(92, 68%, 53%);
		--color-15: hsl(51, 100%, 50%);
		--color-16: hsl(36, 100%, 51%);
		--color-17: hsl(351, 75%, 52%);
		--color-18: hsl(290, 53%, 46%);
		--color-19: hsl(241, 60%, 55%);
		--color-20: hsl(148, 68%, 43%);
		--color-21: hsl(92, 68%, 53%);
		--color-22: hsl(51, 100%, 50%);
		--color-23: hsl(36, 100%, 51%);
		--color-24: hsl(351, 75%, 52%);
		--color-25: hsl(290, 53%, 46%);
	}

	%container {
		position: relative;
		width: 100%;
		&::after {
			display: block;
			padding-bottom: 100%;
			content: '';
		}
	}

	%inner {
		position: absolute;
		border-radius: 50%;
	}

	.fractions {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 1rem;
		width: 80%;
		margin: 2rem auto;
		:nth-child(8) {
			@extend %container;
			@for $i from 0 through 7 {
				:nth-child(#{$i + 1}) {
					@extend %inner;

					clip-path: polygon(50% 0, 0 0, 0 0%, 50% 50%);
					background: var(--color-#{$i * 1});
					transform: rotate(45deg * $i);
				}
			}
		}
		:nth-child(7) {
			@extend %container;
			@for $i from 0 through 6 {
				:nth-child(#{$i + 1}) {
					@extend %inner;

					clip-path: polygon(50% 0, 0 0, 0 10.5%, 50% 50%);
					background: var(--color-#{$i + 19});
					transform: rotate(51.43deg * $i);
				}
			}
		}
		:nth-child(6) {
			@extend %container;
			@for $i from 0 through 5 {
				:nth-child(#{$i + 1}) {
					@extend %inner;

					clip-path: polygon(50% 0, 0 0, 0 21.3%, 50% 50%);
					background: var(--color-#{$i + 13});
					transform: rotate(60deg * $i);
				}
			}
		}
		:nth-child(5) {
			@extend %container;
			@for $i from 0 through 4 {
				:nth-child(#{$i + 1}) {
					@extend %inner;

					clip-path: polygon(50% 0, 0 0, 0 34%, 50% 50%);
					background: var(--color-#{$i + 13});
					transform: rotate(72deg * $i);
				}
			}
		}
		:nth-child(4) {
			@extend %container;
			@for $i from 0 through 3 {
				:nth-child(#{$i + 1}) {
					@extend %inner;

					clip-path: polygon(50% 0, 0 0, 0 50%, 50% 50%);
					background: var(--color-#{($i + 8)});
					transform: rotate(90deg * $i);
				}
			}
		}
		:nth-child(3) {
			@extend %container;
			@for $i from 0 through 2 {
				:nth-child(#{$i + 1}) {
					@extend %inner;

					clip-path: polygon(50% 0, 0 0, 0 79%, 50% 50%);
					background: var(--color-#{$i * 3});
					transform: rotate(120deg * $i);
				}
			}
		}
		:nth-child(2) {
			@extend %container;
			@for $i from 0 through 1 {
				:nth-child(#{$i + 1}) {
					@extend %inner;

					clip-path: polygon(50% 0, 0 0, 0 100%, 50% 100%);
					background: var(--color-#{$i * 3});
					transform: rotate(180deg * $i);
				}
			}
		}
		:nth-child(1) {
			@extend %container;
			:nth-child(1) {
				@extend %inner;

				background: var(--color-0);
			}
		}
	}
</style>
