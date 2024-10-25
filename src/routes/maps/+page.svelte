<script lang="ts">
	import { PUBLIC_GOOGLE_API_KEY } from '$env/static/public';
	import { onMount } from 'svelte';

	const MAP_COUNT = 8;
	const ZOOM = 10;
	const lat: number[] = [];
	const lng: number[] = [];
	let elements: HTMLDivElement[] = [];

	onMount(() => {
		for (let i = 0; i < MAP_COUNT; i++) {
			lat.push(Number(rand(-84, 84).toFixed(3)));
			lng.push(Number(rand(-180, 180).toFixed(3)));
		}
		loadMaps();
	});

	function rand(min: number, max: number) {
		return ((Math.pow(10, 14) * Math.random() * Math.random()) % (max - min + 1)) + min;
	}

	async function loadMaps() {
		const pkg = await import('@googlemaps/js-api-loader');
		const { Loader } = pkg;
		const loader = new Loader({
			apiKey: PUBLIC_GOOGLE_API_KEY,
			version: 'weekly',
			libraries: ['maps']
		});

		let { Map } = await loader.importLibrary('maps');
		for (let i = 0; i < MAP_COUNT; i++) {
			new Map(elements[i], {
				center: { lat: lat[i], lng: lng[i] },
				zoom: ZOOM,
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
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
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
		aspect-ratio: 1/1;
		border: 1px solid hsl(0, 0%, 10%);
	}
</style>
