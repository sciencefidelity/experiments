"use strict"

const charCount = document.querySelector(".charCount")
const output = document.querySelector(".output")

function updateCount(str) {
  let lng = str.length
  if (lng === 1) {
    output.innerHTML = lng + " character"
  } else {
    output.innerHTML = lng + " characters"
  }
}