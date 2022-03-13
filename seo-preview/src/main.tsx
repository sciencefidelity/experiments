import React from "react"
import ReactDOM from "react-dom"
import { Router } from "@reach/router"
import "sanitize.css/sanitize.css"
import "sanitize.css/assets.css"
import "sanitize.css/reduce-motion.css"
import "sanitize.css/typography.css"
import Facebook from "pages/Facebook"
import Google from "pages/Google"
import Home from "pages/Home"
import Twitter from "pages/Twitter"
import NotFound from "pages/404"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Home path="/" title="home" />
      <Google path="/google" />
      <Twitter path="/twitter" title="twitter" />
      <Facebook path="/facebook" title="facebook" />
      <NotFound default />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
