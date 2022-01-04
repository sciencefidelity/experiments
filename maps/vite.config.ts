import { defineConfig } from "vite"
import { resolve } from "path"
import VitePluginHtmlEnv from "vite-plugin-html-env"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VitePluginHtmlEnv()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  }
})
