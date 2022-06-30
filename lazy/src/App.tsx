import { FC, useState } from "react"

interface ImageProps {
  src: string
  fallback: string
  index: number
}

const App = () => {
  const [count, setCount] = useState(0)

  const imageUrl = "https://picsum.photos/600/800"
  const fallbackUrl = "https://picsum.photos/6/8"
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // const arr = [1]
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  return (
    <div>
      {arr.map((num, idx) => (
        <div key={num} className="box">
          <button className="btn" onClick={() => setCount(count => (count = count + 1))}>
            Count: {count}
          </button>
          <Image 
            src={`${imageUrl}?${alphabet[num]}`}
            fallback={`${fallbackUrl}?${alphabet[num]}`}
            index={idx}
          />
        </div>
      ))}
    </div>
  )
}
export default App

const Image: FC<ImageProps> = ({ src, index, fallback }) => {
  const [loaded, setLoaded] = useState(false)
  function onLoad() {
    setLoaded(true)
  }

  return (
    <>
      <img
        src={fallback}
        className="placeholder"
        alt=""
        loading="eager"
        width={600}
        height={800}
      />
      <img
        src={src}
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