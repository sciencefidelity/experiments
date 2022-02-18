import { defineConfig } from "vite"
import { resolve } from "path"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import preprocess from "svelte-preprocess"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({ preprocess: preprocess() })],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      lib: resolve(__dirname, "./src/lib"),
      routes: resolve(__dirname, "./src/routes"),
      styles: resolve(__dirname, "./src/styles")
    }
  }
})
