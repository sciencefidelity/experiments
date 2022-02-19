import React, { FC, useState, FormEvent } from "react"
const Home: FC = () => {
  const [ hueMin, setHueMin ] = useState(0)
  const [ hueMax, setHueMax ] = useState(360)
  const [ saturation, setSaturaton ] = useState(50)
  const [ lightness, setLightness ] = useState(50)
  const squares = 10
  const arr = Array.from(Array(squares).keys())
  const recalculateHueMin = (e: FormEvent<HTMLInputElement>) => {
    setHueMin(parseInt(e.currentTarget.value))
  }
  const recalculateHueMax = (e: FormEvent<HTMLInputElement>) => {
    setHueMax(parseInt(e.currentTarget.value))
  }
  const recalculateSaturation = (e: FormEvent<HTMLInputElement>) => {
    setSaturaton(parseInt(e.currentTarget.value))
  }
  const recalculateLightness = (e: FormEvent<HTMLInputElement>) => {
    setLightness(parseInt(e.currentTarget.value))
  }
  const H = hueMax
  const S = saturation
  const L = lightness
  return (
    <>
      <div className="canvas">
        {arr.map((e: number) =>
          <div
            key={e}
            className={`color-${e.toString()}`}
            style={{
              width: `${10 * (e + 1)}%`,
              backgroundColor:
                `hsl(${((H / squares) * e) - hueMin}, ${S}%, ${L}%)`
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
          onInput={recalculateHueMax}
        />
        <input
          id="range"
          name="hueMin"
          type="range"
          min="0"
          max="360"
          defaultValue="0"
          onInput={recalculateHueMin}
        />
        <input
          id="range"
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          onInput={recalculateSaturation}
        />
        <input
          id="range"
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          onInput={recalculateLightness}
        />
      </div>
    </>
  )
}

export default Home
