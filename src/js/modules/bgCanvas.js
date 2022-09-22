function drawBgCanvas() {
  const canvas = document.querySelector("#bg-canvas"),
    ctx = canvas.getContext("2d"),
    colorDot = [
      "rgb(81, 162, 233)",
      "rgb(81, 162, 233)",
      "rgb(81, 162, 233)",
      "rgb(81, 162, 233)",
      "rgb(255, 77, 90)",
    ],
    color = "rgb(81, 162, 233)"

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  canvas.style.display = "block"
  ctx.lineWidth = 0.3
  ctx.strokeStyle = color

  let mousePosition = {
    x: (30 * canvas.width) / 100,
    y: (30 * canvas.height) / 100,
  }

  const windowSize = window.innerWidth
  let dots

  dots = {
    nb: 900, // number of particles
    array: [],
  }

  function Dot() {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height

    this.vx = -0.5 + Math.random()
    this.vy = -0.5 + Math.random()

    this.radius = Math.random() * 1.5

    this.colour = colorDot[Math.floor(Math.random() * colorDot.length)]
  }

  Dot.prototype = {
    create: function () {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)

      const dotDistance =
        ((this.x - mousePosition.x) ** 2 + (this.y - mousePosition.y) ** 2) ** 0.5
      const distanceRatio = dotDistance / (windowSize / 1.7)

      ctx.fillStyle = this.colour.slice(0, -1) + `,${1 - distanceRatio})`

      ctx.fill()
    },

    animate: function () {
      for (let i = 1; i < dots.nb; i++) {
        const dot = dots.array[i]
        dot.x += dot.vx
        dot.y += dot.vy
      }
    },
  }

  function createDots() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < dots.nb; i++) {
      dots.array.push(new Dot())
      var dot = dots.array[i]

      dot.create()
    }

    dot.animate()
  }

  mousePosition.x = window.innerWidth / 2
  mousePosition.y = window.innerHeight / 2

  const draw = setInterval(createDots, 1000 / 30)
}

export default drawBgCanvas
