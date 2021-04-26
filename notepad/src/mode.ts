const mode = () => {
  modeSwitch.onclick = () => {
    
    if (textLeft.className === "light-mode-left") {
      textLeft.className = "dark-mode-left"
      textRight.className = "dark-mode-right"
    } else {
      textLeft.className = "light-mode-left"
      textRight.className = "light-mode-right"
    }
    
  }
}

export default mode()
