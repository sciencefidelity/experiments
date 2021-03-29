"use strict"

const input = document.getElementById("input")
const output = document.getElementById("output")

input.addEventListener('input', function(e) {
  const target = e.target
  const lgn = target.value.length
  if (lgn === 1) {
    output.innerHTML = `${lgn} character`
    return
  }
  output.innerHTML = `${lgn} characters`
})
