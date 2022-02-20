import React, { FC, useState, useEffect, FormEvent } from "react"
import { Squares } from "components/Squares"

const Home: FC = () => {
  const [ hueMin, setHueMin ] = useState(0)
  const [ hueMax, setHueMax ] = useState(360)
  const [ saturation, setSaturaton ] = useState(50)
  const [ lightness, setLightness ] = useState(50)
  const [ animateButtonValue, setAnimateButtonValue] = useState("animate")
  const [ playAnimation, setPlayAnimation ] = useState(true)

  const squares = 10

  const changeHueMin = (e: FormEvent<HTMLInputElement>) => {
    setHueMin(parseInt(e.currentTarget.value))
  }
  const changeHueMax = (e: FormEvent<HTMLInputElement>) => {
    setHueMax(parseInt(e.currentTarget.value))
  }
  const changeSaturation = (e: FormEvent<HTMLInputElement>) => {
    setSaturaton(parseInt(e.currentTarget.value))
  }
  const changeLightness = (e: FormEvent<HTMLInputElement>) => {
    setLightness(parseInt(e.currentTarget.value))
  }
  console.log("render: Index")
  const toggleAnim = () => {
    let v = Math.min(1, hueMax) + hueMin
    const dx = 1 // "speed"
    if (playAnimation === true) {
      setPlayAnimation(false)
      setAnimateButtonValue("stop")
    }
    if (playAnimation === false) {
      setPlayAnimation(true)
      setAnimateButtonValue("animate")
    }
    const anim = () => {
      v += dx
      if (v > 360) v = 1
      setHueMin(Math.round(v))
      if (playAnimation) requestAnimationFrame(anim)
    }
    if (playAnimation === true) anim()
  }
  return (
    <>
      <Squares
        lightness={lightness}
        hueMax={hueMax}
        hueMin={hueMin}
        saturation={saturation}
        squares={squares}
      />
      <div>
        <input
          id="range"
          name="hueMax"
          type="range"
          min="0"
          max="360"
          defaultValue="360"
          onInput={changeHueMax}
        />
        <input
          id="range"
          name="hueMin"
          type="range"
          min="0"
          max="360"
          defaultValue="0"
          onInput={changeHueMin}
        />
        <input
          id="range"
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          onInput={changeSaturation}
        />
        <input
          id="range"
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          onInput={changeLightness}
        />
        <input id="animate"
          type="button"
          value={animateButtonValue}
          onClick={toggleAnim}
        />
      </div>
    </>
  )
}

export default Home
