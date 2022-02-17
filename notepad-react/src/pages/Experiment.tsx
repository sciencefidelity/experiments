import React, { useState } from "react"

const Experiment = () => {
  const [text, setText] = useState("")
  return (
    <>
      <div
        contentEditable="true"
        style={{
          height: "50vh",
          width: "100vw",
          border: "1px solid grey"
        }}
        onInput={e => {
          setText(e.target.textContent)
        }}
      />
      <div
        style={{
          height: "50vh",
          width: "100vw",
          border: "1px solid grey"
        }}
      >{text}</div>
    </>
  )
}
export default Experiment
