import React, { FC, useState, FormEvent } from "react"
import { Squares } from "components/Squares"
import { Controls } from "components/Controls"

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
  const toggleAnimation = () => {
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
      <Controls
        animateButtonValue={animateButtonValue}
        changeLightness={changeLightness}
        changeHueMax={changeHueMax}
        changeHueMin={changeHueMin}
        changeSaturation={changeSaturation}
        toggleAnimation={toggleAnimation}
      />
    </>
  )
}

export default Home
