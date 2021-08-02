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
  if (target.textContent)
    output.innerHTML = target.textContent
      //eslint-disable-next-line quotes
      .replaceAll("Matt", '<span style="color:orange">Matt</span>')
      //eslint-disable-next-line quotes
      .replaceAll("World", '<span style="color:limegreen">World</span>')
}

// copy input text into output
if (loadContent) {
  input.innerHTML = loadContent
    //eslint-disable-next-line quotes
    .replaceAll("Matt", '<span style="color:orange">Matt</span>')
    //eslint-disable-next-line quotes
    .replaceAll("World", '<span style="color:limegreen">World</span>')
}
if (loadContent) {
  output.innerHTML = loadContent
    //eslint-disable-next-line quotes
    .replaceAll("Matt", '<span style="color:orange">Matt</span>')
    //eslint-disable-next-line quotes
    .replaceAll("World", '<span style="color:limegreen">World</span>')
}
