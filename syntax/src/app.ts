const loadContent = localStorage.getItem("content")
const input = document.querySelector("#input") as HTMLPreElement
const output = document.querySelector("#output") as HTMLDivElement

const purple = "#bd93f9"
let word = ""

// initialise the input content
input.innerHTML = ""

// save input text into local storage
input.addEventListener("input", updateValue)

function updateValue(e: Event) {
  const target = e.target as HTMLDivElement
  localStorage.setItem("content", input.innerHTML)
  if (target.textContent) {
    word = target.textContent
    output.innerHTML = target.textContent
      .replaceAll(
        /\b(?<![a-zA-Z0-9-_])(?:_(?!\s).+?(?!\s)_)(?![a-zA-Z0-9-_])/gm,
        `<em>${word.slice(1, word.length - 1)}</em>`
      )
      .replaceAll(/^#\s.+$/g, `<h1>${word.slice(2)}</h1>`)
      .replaceAll(/^##\s.+$/g, `<h2>${word.slice(2)}</h2>`)
  }
}

// copy input text into output
if (loadContent) {
  input.innerHTML = loadContent
    .replaceAll(
      /\b(?<![a-zA-Z0-9-_])(?:_(?!\s).+?(?!\s)_)(?![a-zA-Z0-9-_])/gm,
      `<span style="color:${purple};font-style:italic">_${word}_</span>`
    )
    .replaceAll(
      /^#\s.+$/g,
      `<span style="color:${purple};font-weight:bold"># ${word}</span>`
    )
    .replaceAll(
      /^##\s.+$/g,
      `<span style="color:${purple};font-weight:bold"># ${word}</span>`
    )
}
if (loadContent) {
  output.innerHTML = loadContent
    .replaceAll(
      /\b(?<![a-zA-Z0-9-_])(?:_(?!\s).+?(?!\s)_)(?![a-zA-Z0-9-_])/gm,
      `<em>${word.slice(1, word.length - 1)}</em>`
    )
    .replaceAll(/^#\s.+$/g, `<h1>${word.slice(2)}</h1>`)
    .replaceAll(/^##\s.+$/g, `<h2>${word.slice(2)}</h2>`)
}

// Bold (double asterisk)
// /(?:\*\*(?!\s).+?(?!\s)\*\*)/g

// Bold
// /\*\*.+\*\*/g

// Bold
// /\*\*.*?\*\*/g

// Italic (underscore)
// /(?<![a-zA-Z0-9-_])(?:_(?!\s).+?(?!\s)_)(?![a-zA-Z0-9-_])/g

// Strikethrough
// /(?<![a-zA-Z0-9-_])(?:~~(?!\s).+?(?!\s)~~)(?![a-zA-Z0-9-_])/g

// Code
// /`.*?`/g

// Heading
// /^\#\s.+$/g

// Heading 2
// /^\#\#\s.+$/g
