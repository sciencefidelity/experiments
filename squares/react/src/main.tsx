import React from "react"
import ReactDOM from "react-dom"
import Index from "pages/Index"
import "sanitize.css/sanitize.css"
import "sanitize.css/assets.css"
import "sanitize.css/reduce-motion.css"
import "sanitize.css/typography.css"
import "styles/globals.scss"

ReactDOM.render(
  <React.StrictMode>
    <Index path="/" />
  </React.StrictMode>,
  document.getElementById("root")
)

// https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
