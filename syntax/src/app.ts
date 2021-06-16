
'use strict'

const input: Element = document.querySelector('#input')
const output: Element = document.querySelector('#output')

// initialise the input content
input.textContent = ''

// save input text into local storage
input.addEventListener('input', updateValue)

function updateValue(e) {
  localStorage.setItem('content', input.textContent)
  output.innerHTML = e.target.textContent.replace('Matt', '<span style="color:orange">Matt</span>')
}

// copy input text into output
let re = /\**/gi
input.textContent = localStorage.getItem('content')
const p: string = localStorage.getItem('content')
output.innerHTML = p

