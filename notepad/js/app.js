"use strict"

// Switch between "dark mode" and "light mode".

const modeSwitch = document.getElementById("modeSwitch")
const textLeft = document.getElementById("textLeft")
const textRight = document.getElementById("textRight")

modeSwitch.onclick = () => { 
  if (textLeft.className === "light-mode-left") {
    textLeft.className = "dark-mode-left"
    textRight.className = "dark-mode-right"
  } else {
    textLeft.className = "light-mode-left"
    textRight.className = "light-mode-right"
  }
}

// Download notes to a file.

const downloadToFile = (content, filename, contentType) => {
  const a = document.createElement("a");
  const file = new Blob([content], {type: contentType});
  
  a.href= URL.createObjectURL(file);
  a.download = filename;
  a.click();

  URL.revokeObjectURL(a.href);
};

document.getElementById("save").addEventListener("click", () => {
  const textArea = document.getElementById("textLeft");
  
  downloadToFile(textArea.value, "browser-note.md", "text/markdown");
});



