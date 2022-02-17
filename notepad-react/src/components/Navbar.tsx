import React, { FC } from "react"
import { Link } from "@reach/router"

const Navbar: FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/counter">
            <li>Counter</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
