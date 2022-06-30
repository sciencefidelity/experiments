import { FC, useState } from "react"

interface ImageProps {
  imageUrl: string
  fallbackUrl: string
  index: number
}

const App = () => {
  const [count, setCount] = useState(0)

  const imageUrl = "https://picsum.photos/600/800"
  const fallbackUrl = "https://picsum.photos/6/8"
  const length = 10
  const arr = Array.from(Array(length).keys())
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  return (
    <div>
      <button className="btn" onClick={() => setCount(count => (count = count + 1))}>
        Count: {count}
      </button>
      {arr.map((num, idx) => (
        <div key={num} className="box">
          <Image 
            imageUrl={`${imageUrl}?${alphabet[num]}`}
            fallbackUrl={`${fallbackUrl}?${alphabet[num]}`}
            index={idx}
          />
        </div>
      ))}
    </div>
  )
}
export default App

const Image: FC<ImageProps> = ({ imageUrl, index, fallbackUrl }) => {
  const [loaded, setLoaded] = useState(false)
  function onLoad() {
    setLoaded(true)
  }

  return (
    <>
      <img
        src={fallbackUrl}
        className="placeholder"
        alt=""
        loading="eager"
        width={600}
        height={800}
      />
      <img
        src={imageUrl}
        className={`image ${loaded ? "loaded" : ""}`}
        alt=""
        loading={index === 0 ? "eager" : "lazy"}
        onLoad={onLoad}
        width={600}
        height={800}
      />
    </>
  )
}