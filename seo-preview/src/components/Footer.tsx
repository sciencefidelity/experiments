import React, { FC } from "react"

const Footer: FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
