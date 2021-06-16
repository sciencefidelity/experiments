
'use strict'

const input: Element = document.querySelector('#input')
const output: Element = document.querySelector('#output')

// document.onload(output.innerHTML = localStorage.getItem('content'))

// initialise the input content
input.textContent = ''

// save input text into local storage
input.addEventListener('input', updateValue)

function updateValue(e) {
  localStorage.setItem('content', input.textContent)
  output.innerHTML = e.target.textContent
    .replace('Matt', '<span style="color:orange">Matt</span>')
    .replace('World', '<span style="color:limegreen">World</span>')
}

// copy input text into output
input.textContent = localStorage.getItem('content')
output.innerHTML = localStorage.getItem('content')
  .replace('Matt', '<span style="color:orange">Matt</span>')
  .replace('World', '<span style="color:limegreen">World</span>')

