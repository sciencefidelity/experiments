
"use strict"

const modeSwitch = document.querySelector('#modeSwitch')
const textLeft = document.querySelector('#textLeft')
const textRight = document.querySelector('#textRight')

// initialise the input content
textLeft.textContent = ""

// save input text into local storage
textLeft.addEventListener('input', updateValue)

function updateValue(e) {
  localStorage.setItem('leftText', textLeft.textContent)
  textRight.textContent = e.target.textContent
}

textLeft.textContent = localStorage.getItem('leftText')
textRight.textContent = localStorage.getItem('leftText')

// Switch between "dark mode" and "light mode"

modeSwitch.onclick = () => {
  
  if (textLeft.className === "light-mode-left") {
    textLeft.className = "dark-mode-left"
    textRight.className = "dark-mode-right"
  } else {
    textLeft.className = "light-mode-left"
    textRight.className = "light-mode-right"
  }
  
}

// Download notes to a markdown file.

const save = document.querySelector('#save')

const fileDownload = (content, filename, contentType) => {
  const a = document.createElement('a')
  const file = new Blob([content], {type: contentType})

  a.href= URL.createObjectURL(file)
  a.download = filename
  a.click()
  URL.revokeObjectURL(a.href)
}

textLeft.onclick = () => {
  fileDownload(text.textContent, "browser-note.md", "text/markdown")
}

