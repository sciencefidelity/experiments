import React, { useState, FormEvent } from "react"

const Home = () => {
  const [text, setText] = useState("")
  const [characterCount, setCharacterCount] = useState(0)
  const [wordCount, setWordCount] = useState(0)
  const calculate = (e: FormEvent<HTMLDivElement>) => {
    const content = (e.target as HTMLDivElement).textContent || ""
    setText(content)
    setCharacterCount(content.length)
    setWordCount(content.split(" ").filter(e => e !== "").length)
  }
  return (
    <>
      <div
        contentEditable="true"
        className="textbox"
        onInput={calculate}
      />
      <div className="textbox">{text}</div>
      <div className="grid">
        <div className="inline">Characters: {characterCount}</div>
        <div className="inline">Words: {wordCount}</div>
      </div>
    </>
  )
}
export default Home
