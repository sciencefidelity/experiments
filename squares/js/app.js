"use strict"

const square0 = document.querySelector(".color-0")
const square1 = document.querySelector(".color-1")
const square2 = document.querySelector(".color-2")
const square3 = document.querySelector(".color-3")
const square4 = document.querySelector(".color-4")
const square5 = document.querySelector(".color-5")
const square6 = document.querySelector(".color-6")
const square7 = document.querySelector(".color-7")
const square8 = document.querySelector(".color-8")
const square9 = document.querySelector(".color-9")

let i = 0

function splitToDigit(n) {
  return [...n + ''].map(Number)
}

const colorChange = setInterval(() => {
  if (i === 10) {
    i = 0
  }
  square0.className = "color-" + splitToDigit(i + 0).reverse()[0]
  square1.className = "color-" + splitToDigit(i + 1).reverse()[0]
  square2.className = "color-" + splitToDigit(i + 2).reverse()[0]
  square3.className = "color-" + splitToDigit(i + 3).reverse()[0]
  square4.className = "color-" + splitToDigit(i + 4).reverse()[0]
  square5.className = "color-" + splitToDigit(i + 5).reverse()[0]
  square6.className = "color-" + splitToDigit(i + 6).reverse()[0]
  square7.className = "color-" + splitToDigit(i + 7).reverse()[0]
  square8.className = "color-" + splitToDigit(i + 8).reverse()[0]
  square9.className = "color-" + splitToDigit(i + 9).reverse()[0]
  i++
}, 50)
