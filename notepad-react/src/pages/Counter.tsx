import React, { FC, useState } from "react"
import PropTypes from "prop-types"
import type { RouteComponentProps } from "@reach/router"
import { capitalize } from "lib/utils"
import Layout from "components/Layout"
import styles from "styles/Counter.module.scss"

interface Props extends RouteComponentProps {
  title: string
}

const Counter: FC<Props> = ({ title }) => {
  const [count, setCount] = useState(0)
  const countDown = () => {
    setCount(count - 1)
  }
  const countUp = () => {
    setCount(count + 1)
  }
  return (
    <Layout>
      <div className={styles[title]}>
        <h1>{capitalize(title)}</h1>
        <button onClick={countDown}>–</button>
        <div className={styles.count}>{count}</div>
        <button onClick={countUp}>+</button>
        <p>
          The button has been pushed <code data-testid="count">{count}</code> times.
        </p>
      </div>
    </Layout>
  )
}

Counter.propTypes = {
  title: PropTypes.string.isRequired
}

export default Counter
