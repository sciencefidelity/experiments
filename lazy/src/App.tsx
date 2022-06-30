import { useCallback, useEffect, useState } from "react"

const App = () => {
  const [loaded, setLoaded] = useState(false)
  const onLoad = useCallback(() => {
    setLoaded(true)
  }, [])
  useEffect(() => {
    setLoaded(true)
  }, [loaded, onLoad])
  
  const imageUrl = "https://picsum.photos/1200/800"
  const fallbackUrl = "https://picsum.photos/12/8"
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const handleOnLoad = () => {
    console.log("Image loaded")
    
  }
  return (
    <div>
      {arr.map(num => (
        <div
          key={num}
          className="box"
        >
          <img
            src={`${imageUrl}?${alphabet[num]}`}
            className={`image ${loaded ? "loaded" : null}`}
            alt=""
            loading="lazy"
            onLoad={handleOnLoad}
          />
          <img
            src={`${fallbackUrl}?${alphabet[num]}`}
            className="placeholder"
            alt=""
            loading="eager"
            width={1200}
            height={800}
          />
        </div>
      ))}
    </div>
  )
}
export default App
