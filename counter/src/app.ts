// Count-up that triggers on click of a button
// adjust speed and updateCount to change duration

const counters = document.querySelectorAll(
  "h1"
) as NodeListOf<HTMLHeadingElement>
const btn = document.getElementById("btn") as HTMLButtonElement
const speed = 200

btn.onclick = () => {
  counters.forEach(counter => {
    counter.innerText = "0"
    const updateCount = () => {
      const target = Number(counter.getAttribute("data-target"))
      const count = Number(counter.innerText)
      const inc = target / speed
      if (count < target) {
        counter.innerText = Math.ceil(count + inc).toString()
        setTimeout(updateCount, 10)
      } else {
        counter.innerText = target.toString()
      }
    }
    updateCount()
  })
}
