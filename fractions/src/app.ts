const btn = document.getElementById("btn") as HTMLButtonElement
const turntable = document.querySelector("main") as HTMLElement

btn.onclick = () => {
  if (turntable.className === "stop") {
    turntable.className = "spin"
  } else {
    turntable.className = "stop"
  }
}

export {}
