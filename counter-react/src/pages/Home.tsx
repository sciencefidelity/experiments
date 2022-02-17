import React, { FC, useState, useEffect } from "react"
import PropTypes from "prop-types"
import type { RouteComponentProps } from "@reach/router"
import Layout from "components/Layout"
import { capitalize } from "lib/utils"
import logo from "images/logo.svg"
import styles from "styles/Home.module.scss"

interface Props extends RouteComponentProps {
  title: string
}

const Home: FC<Props> = ({ title }) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000)
    return () => clearTimeout(timer)
  }, [count, setCount])
  return (
    <Layout>
      <div className={styles[title]}>
        <h1>{capitalize(title)}</h1>
        <img src={logo} className={styles["app-logo"]} alt="logo" />
        <p>
          Page has been open for <code data-testid="count">{count}</code> seconds.
        </p>
      </div>
    </Layout>
  )
}

Home.propTypes = {
  title: PropTypes.string.isRequired
}

export default Home
