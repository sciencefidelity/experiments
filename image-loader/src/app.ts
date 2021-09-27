// Page is loaded
const objects = document.querySelectorAll(
  ".async-image"
) as NodeListOf<HTMLImageElement>
Array.from(objects).map(item => {
  // Start loading image
  const img = new Image()
  img.src = item.dataset.src || ""
  // Once image is loaded replace the src of the HTML element
  img.onload = () => {
    item.classList.remove("async-image")
    item.classList.add("full-image")
    return item.nodeName === "IMG"
      ? (item.src = item.dataset.src || "")
      : (item.style.backgroundImage = `url(${item.dataset.src})`)
  }
})
