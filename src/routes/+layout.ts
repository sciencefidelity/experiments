export function load() {
	const modules = import.meta.glob('./**/*.svelte');
	let paths = [];

	for (let path in modules) {
		if (path.startsWith('./+')) continue;
		paths.push(path.split('/')[1]);
	}

	return {
		paths
	};
}
