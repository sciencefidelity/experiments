"use strict"

let a = 0
let b = 1
let c = 2
let d = 3
let e = 4
let f = 5
let g = 6
let h = 7
let i = 8
let j = 9
const square1 = document.getElementById("square-1")
const square2 = document.getElementById("square-2")
const square3 = document.getElementById("square-3")
const square4 = document.getElementById("square-4")
const square5 = document.getElementById("square-5")
const square6 = document.getElementById("square-6")
const square7 = document.getElementById("square-7")
const square8 = document.getElementById("square-8")
const square9 = document.getElementById("square-9")
const square0 = document.getElementById("square-10")

setInterval(colorChange1, 100)
function colorChange1() {
  a--
  if (a === -1) {
    a = 9;
  }
  square1.className = "color-" + (a)
}
setInterval(colorChange2, 100)
function colorChange2() {
  b--
  if (b === -1) {
    b = 9;
  }
  square2.className = "color-" + (b)
}
setInterval(colorChange3, 100)
function colorChange3() {
  c--
  if (c === -1) {
    c = 9
  }
  square3.className = "color-" + (c)
}
setInterval(colorChange4, 100)
function colorChange4() {
  d--
  if (d === -1) {
    d = 9
  }
  square4.className = "color-" + (d)
}
setInterval(colorChange5, 100);
function colorChange5() {
  e--
  if (e === -1) {
    e = 9
  }
  square5.className = "color-" + (e)
}
setInterval(colorChange6, 100)
function colorChange6() {
  f--
  if (f === -1) {
    f = 9
  }
  square6.className = "color-" + (f)
}
setInterval(colorChange7, 100)
function colorChange7() {
  g--
  if (g === -1) {
    g = 9
  }
  square7.className = "color-" + (g)
}
setInterval(colorChange8, 100)
function colorChange8() {
  h--
  if (h === -1) {
    h = 9
  }
  square8.className = "color-" + (h)
}
setInterval(colorChange9, 100)
function colorChange9() {
  i--
  if (i === -1) {
    i = 9
  }
  square9.className = "color-" + (i)
}
setInterval(colorChange0, 100)
function colorChange0() {
  j--
  if (j === -1) {
    j = 9
  }
  square0.className = "color-" + (j)
}

