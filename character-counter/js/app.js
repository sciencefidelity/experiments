"use strict"

const input = document.querySelector(".text")
const output = document.querySelector(".output")

// const updateCount = (str) => {
//   let lng = str.length
//   if (lng === 1) {
//     output.innerHTML = lng + " character"
//     return
//   }
//   output.innerHTML = lng + " characters"
// }

input.addEventListener('input', function(e) {
  const target = e.target
  const lgn = target.value.length
  output.innerHTML = `${lgn} characters`
})