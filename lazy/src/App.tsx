const App = () => {
  const imageUrl = "https://picsum.photos/400/400"
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  return (
    <div>
      {arr.map(num => (
        <div key={num} style={{ height: "100vh", display: "grid", placeItems: "center" }}>
          <img src={`${imageUrl}?${alphabet[num]}`} alt="" />
        </div>
      ))}
    </div>
  )
}
export default App

