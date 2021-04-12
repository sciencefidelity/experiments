
"use strict"

const input = document.querySelector('#input')
const output = document.querySelector('#output')

// initialise the input content
input.textContent = ""

// save input text into local storage
input.addEventListener('input', updateValue)

function updateValue(e) {
  localStorage.setItem('content', input.textContent)
  output.textContent = e.target.textContent
}

// copy input text into output
let re = /\**/gi
input.textContent = localStorage.getItem('content')
const p = localStorage.getItem('content')
output.textContent = p.replace(re, '')
