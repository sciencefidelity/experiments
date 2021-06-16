
'use strict'

const input: Element = document.querySelector('#input')
const output: Element = document.querySelector('#output')

// initialise the input content
input.innerHTML = ''

// save input text into local storage
input.addEventListener('input', updateValue)

function updateValue(e) {
  localStorage.setItem('content', input.innerHTML)
  output.innerHTML = e.target.textContent
    .replaceAll('Matt', '<span style="color:orange">Matt</span>')
    .replaceAll('World', '<span style="color:limegreen">World</span>')
}

// copy input text into output
input.innerHTML = localStorage.getItem('content')
  .replaceAll('Matt', '<span style="color:orange">Matt</span>')
  .replaceAll('World', '<span style="color:limegreen">World</span>')
output.innerHTML = localStorage.getItem('content')
  .replaceAll('Matt', '<span style="color:orange">Matt</span>')
  .replaceAll('World', '<span style="color:limegreen">World</span>')

