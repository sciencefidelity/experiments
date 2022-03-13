import React, { FC } from "react"
import { Link } from "@reach/router"

const Navbar: FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/google">
            <li>Google</li>
          </Link>
          <Link to="/twitter">
            <li>Twitter</li>
          </Link>
          <Link to="/facebook">
            <li>Facebook</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}
export default Navbar
