"use strict"

const input = document.querySelector(".input")
const output = document.querySelector(".output")

input.addEventListener('input', function(e) {
  const target = e.target
  const lgn = target.value.length
  if (lgn === 1) {
    output.innerHTML = `${lgn} character`
    return
  }
  output.innerHTML = `${lgn} characters`
})
