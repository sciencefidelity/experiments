const canvas = document.querySelector("#canvas") as HTMLDivElement

const triangles = 10

for (let i = 0; i < triangles; i++) {
  const triangle = document.createElement("div")

  canvas.appendChild(triangle)
}
