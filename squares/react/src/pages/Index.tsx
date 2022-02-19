import React, { FC, useState, FormEvent } from "react"
const Home: FC = () => {
  const [ hueMin, setHueMin ] = useState(0)
  const [ hueMax, setHueMax ] = useState(360)
  const [ saturation, setSaturaton ] = useState(50)
  const [ lightness, setLightness ] = useState(50)
  const [ animateButtonValue, setAnimateButtonValue] = useState("animate")
  const [ playAnimation, setPlayAnimation ] = useState(true)
  // const [ reverse, setReverse ] = useState(1)
  const squares = 10
  const arr = Array.from(Array(squares).keys())
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
  const h = (e: number) => ((hueMax / squares) * e) - hueMin
  const s = `${saturation}%`
  const l = `${lightness}%`
  // const toggleReverse = () => {
  //   setReverse(-reverse)
  // }
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
      <div className="canvas">
        {arr.map((e: number) =>
          <div
            key={e}
            className={`color-${e.toString()}`}
            style={{
              width: `${10 * (e + 1)}%`,
              backgroundColor: `hsl(${h(e)}, ${s}, ${l})`
            }}
          ></div>
        )}
      </div>
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
        <input id="animate" type="button" value={animateButtonValue} onClick={toggleAnim} />
        {/* <input id="animate" type="button" value="reverse" onClick={toggleReverse} /> */}
      </div>
    </>
  )
}

export default Home
