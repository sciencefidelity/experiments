import React, { useState } from "react"

const Experiment = () => {
  const [text, setText] = useState("")
  const [characterCount, setCharacterCount] = useState(0)
  console.log(text.length)
  return (
    <>
      <div
        contentEditable="true"
        className="textbox"
        onInput={e => {
          setText(e.target.textContent)
          setCharacterCount(text.length)
        }}
      />
      <div className="textbox">{text}</div>
      <div className="grid">
        <div className="inline">Characters: {characterCount}</div>
        <div className="inline">Words: {text}</div>
      </div>
    </>
  )
}
export default Experiment
