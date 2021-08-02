const modeSwitch = document.querySelector("#mode") as HTMLDivElement
const background = document.querySelector("#site-main") as HTMLElement
const mode = document.querySelector("#mode") as HTMLDivElement

modeSwitch.onclick = () => {
  if (background && background.className === "light") {
    background.className = "dark"
    if (mode) mode.className = "darkmode"
  } else {
    if (background) background.className = "light"
    if (mode) mode.className = "lightmode"
  }
}
