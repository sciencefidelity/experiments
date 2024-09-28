<script lang="ts">
	import { PUBLIC_GOOGLE_API_KEY } from '$env/static/public';
	import { Loader } from '@googlemaps/js-api-loader';
	import { onMount } from 'svelte';

	const apiKey = PUBLIC_GOOGLE_API_KEY;
	const zoom = 10;
	const lat: number[] = [];
	const lng: number[] = [];
	const MAP_COUNT = 8;
	let elements: HTMLDivElement[] = [];

	onMount(() => start());

	function rand(min: number, max: number) {
		return ((Math.pow(10, 14) * Math.random() * Math.random()) % (max - min + 1)) + min;
	}

	for (let i = 0; i < 8; i++) {
		lat.push(Number(rand(-84, 84).toFixed(3)));
		lng.push(Number(rand(-180, 180).toFixed(3)));
	}

	async function start() {
		const loader = new Loader({
			apiKey: apiKey,
			version: 'weekly',
			libraries: ['maps']
		});
		let { Map } = await loader.importLibrary('maps');

		for (let i = 0; i < MAP_COUNT; i++) {
			new Map(elements[i], {
				center: { lat: lat[i], lng: lng[i] },
				zoom,
				mapId: 'mapid',
				disableDefaultUI: true
			});
		}
	}
</script>

<svelte:head>
	<title>Random Map Generator</title>
</svelte:head>

<section class="maps">
	{#each Array.from(Array(MAP_COUNT).keys()) as i}
		<div class="map{i}" bind:this={elements[i]}></div>
	{/each}
</section>

<style lang="scss">
	:root {
		--ocean: #aadaff;
	}

	.maps {
		display: flex;
		flex-wrap: wrap;
		/* grid-template-columns: 1fr 1fr 1fr 1fr; */
		justify-content: center;
		gap: 0.5rem;
		padding: 0.5rem;
	}

	.map0,
	.map1,
	.map2,
	.map3,
	.map4,
	.map5,
	.map6,
	.map7 {
		width: 20rem;
		height: 20rem;
		border: 1px solid hsl(0, 0%, 10%);
	}
</style>
