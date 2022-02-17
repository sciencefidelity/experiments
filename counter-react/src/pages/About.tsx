import React, { FC } from "react"
import PropTypes from "prop-types"
import type { RouteComponentProps } from "@reach/router"
import { capitalize } from "lib/utils"
import Layout from "components/Layout"
import styles from "styles/About.module.scss"

interface Props extends RouteComponentProps {
  title: string
}

const About: FC<Props> = ({ title }) => {
  return (
    <Layout>
      <div className={styles[title]}>
        <h1>{capitalize(title)}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis
          nunc sed augue lacus. Sit amet est placerat in egestas erat imperdiet
          sed. Et pharetra pharetra massa massa ultricies mi. Nibh sed pulvinar
          proin gravida. Ornare massa eget egestas purus viverra accumsan in.
          Euismod nisi porta lorem mollis aliquam ut porttitor leo. Augue lacus
          viverra vitae congue eu consequat. Habitant morbi tristique senectus
          et netus et. Euismod in pellentesque massa placerat duis ultricies
          lacus sed. Auctor neque vitae tempus quam. Elementum facilisis leo vel
          fringilla est ullamcorper eget.
        </p>
      </div>
    </Layout>
  )
}

About.propTypes = {
  title: PropTypes.string.isRequired
}

export default About
