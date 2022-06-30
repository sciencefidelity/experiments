import { useCallback, useEffect, useState } from "react"

const App = () => {
  const [loaded, setLoaded] = useState(false)
  const onLoad = useCallback(() => {
    setLoaded(true)
  }, [])
  useEffect(() => {
    let ignore = false
    if (!ignore) {
      setLoaded(true)
    }
    return () => {
      ignore = true
    }
  }, [loaded, onLoad])
  
  const imageUrl = "https://picsum.photos/600/800"
  const fallbackUrl = "https://picsum.photos/6/8"
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // const arr = [1]
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  return (
    <div>
      {arr.map((num, idx) => (
        <div
          key={num}
          className="box"
        >
          <img
            src={`${fallbackUrl}?${alphabet[num]}`}
            className="placeholder"
            alt=""
            loading={idx === 0 ? "eager" : "lazy"}
            width={600}
            height={800}
          />
          <img
            src={`${imageUrl}?${alphabet[num]}`}
            className={`image ${loaded ? "loaded" : null}`}
            alt=""
            loading="lazy"
            onLoad={onLoad}
            width={600}
            height={800}
          />
        </div>
      ))}
    </div>
  )
}
export default App
