"use strict"

const text = document.querySelector(".text")
const output = document.querySelector(".output")

const updateCount = (str) => {
  let lng = str.length
  if (lng === 1) {
    output.innerHTML = lng + " character"
    return
  }
  output.innerHTML = lng + " characters"
}
