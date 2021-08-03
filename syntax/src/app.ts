const loadContent = localStorage.getItem("content")
const input = document.querySelector("#input") as HTMLPreElement
const output = document.querySelector("#output") as HTMLDivElement

// initialise the input content
input.innerHTML = ""

// save input text into local storage
input.addEventListener("input", updateValue)

function updateValue(e: Event) {
  const target = e.target as HTMLDivElement
  localStorage.setItem("content", input.innerHTML)
  // prettier-ignore
  if (target.textContent)
    output.innerHTML = target.textContent
      .replaceAll("Matt", "<span style=\"color:orange\">Matt</span>")
      .replaceAll("World", "<span style=\"color:limegreen\">World</span>")
}

// copy input text into output
// prettier-ignore
if (loadContent) {
  input.innerHTML = loadContent
    .replaceAll("Matt", "<span style=\"color:orange\">Matt</span>")
    .replaceAll("World", "<span style=\"color:limegreen\">World</span>")
}
// prettier-ignore
if (loadContent) {
  output.innerHTML = loadContent
    .replaceAll("Matt", "<span style=\"color:orange\">Matt</span>")
    .replaceAll("World", "<span style=\"color:limegreen\">World</span>")
}

// Bold (double asterisk)
// /(?:\*\*(?!\s).+?(?!\s)\*\*)/g

// Heading
// /^\#\s.+$/gm

// Heading 2
// /^\#\#\s.+$/gm
