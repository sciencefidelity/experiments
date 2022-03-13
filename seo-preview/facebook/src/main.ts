const url1 = "https://coast.blog"
const url2 = "https://coast.blog/design"
const url3 = "https://coast.blog/blog/design"

const googleize = (url: string): string => {
  const arr = url.split(/(?<!\/)\/(?!\/)/g)
  return arr[0] + (arr.length > 1 ? " › " + arr[arr.length - 1] : "")
}

// const googleize = (url) => {
//   const arr = url.split(/(?<!\/)\/(?!\/)/g)
//   return (
//     {arr.length === 0 && <div>{arr[0]}</div>}
//     {arr.length > 0 &&
//       <div>{arr[0]}<span>{" › " + arr[arr.length - 1]}</span></div>
//     }
//   )
// }

console.log(googleize(url1)) // https://coast.blog
console.log(googleize(url2)) // https://coast.blog › design
console.log(googleize(url3)) // https://coast.blog › design
