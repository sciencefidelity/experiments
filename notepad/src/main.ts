import { textLeft, textRight, save } from "./variables"
import { mode } from "./mode"

// initialise the input content
if (textLeft) textLeft.textContent = "&nbsp;"

// save input text into local storage
textLeft?.addEventListener("input", updateValue)

function updateValue(e: Event) {
  if (textLeft && textRight) {
    localStorage.setItem("leftText", textLeft.textContent || "")
    textRight.textContent = (<HTMLDivElement>e.target).textContent
  }
}

if (textLeft) textLeft.textContent = localStorage.getItem("leftText")
if (textRight) textRight.textContent = localStorage.getItem("leftText")

// light/dark mode switching
mode()

// Download notes to a markdown file.

const fileDownload = (
  content: string,
  filename: string,
  contentType: string
) => {
  const a = document.createElement("a")
  const file = new Blob([content], { type: contentType })

  a.href = URL.createObjectURL(file)
  a.download = filename
  a.click()
  URL.revokeObjectURL(a.href)
}

if (save) {
  save.onclick = () => {
    fileDownload(textLeft && textLeft.textContent || "", "browser-note.md", "text/markdown")
  }
}
