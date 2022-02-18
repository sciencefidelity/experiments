import App from "@/App.svelte"
import "sanitize.css/sanitize.css"
import "sanitize.css/assets.css"
import "sanitize.css/reduce-motion.css"
import "sanitize.css/typography.css"
import "styles/app.scss"

const app = new App({
  target: document.body as HTMLBodyElement
})

export default app
