"use strict"
// Page is loaded
const objects = document.querySelectorAll(
  ".asyncImage"
) as NodeListOf<HTMLImageElement>
Array.from(objects).map(item => {
  // Start loading image
  const img = new Image()
  img.src = item.dataset.src || ""
  // Once image is loaded replace the src of the HTML element
  img.onload = () => {
    item.classList.remove("asyncImage")
    item.classList.add("fullImage")
    return item.nodeName === "IMG"
      ? (item.src = item.dataset.src || "")
      : (item.style.backgroundImage = `url(${item.dataset.src})`)
  }
})
