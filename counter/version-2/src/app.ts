const counterContainer = document.querySelector(".counter") as HTMLDivElement
const counter = document.querySelector(".counter") as HTMLDivElement
const options = {
  rootMargin: "-80px"
}

let timerId: NodeJS.Timeout

const observer = new IntersectionObserver(entries => {
  clearTimeout(timerId)
  counter.innerText = "0"
  if (!entries[0].isIntersecting) {
    return
  }
  counting()
}, options)

observer.observe(counterContainer)

const counting = () => {
  let count = 0
  counter.innerText = count.toString()
  const updateCount = () => {
    const target = parseInt(counter.getAttribute("data-target") ?? "0")
    if (count < target) {
      count = count + (target / 2000)
      counter.innerText = Math.floor(count).toString()
      timerId = setTimeout(updateCount, 100)
    } else {
      counter.innerText = target.toString()
      clearTimeout(timerId)
    }
  }
  updateCount()
}
