const modeSwitch = document.querySelector("#mode") as HTMLDivElement
const background = document.querySelector("#site-main") as HTMLElement
const mode = document.querySelector("#mode") as HTMLDivElement

modeSwitch.onclick = () => {
  if (background && background.className === "light") {
    background.className = "dark"
    mode.className = "darkmode"
  } else {
    background.className = "light"
    mode.className = "lightmode"
  }
}

export {}
