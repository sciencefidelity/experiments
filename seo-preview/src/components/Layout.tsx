import React, { FC } from "react"
import Header from "components/Header"
import Footer from "components/Footer"
import Navbar from "components/Navbar"
import "styles/layout.scss"

interface Props {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
        <Navbar />
      </div>
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}
export default Layout
