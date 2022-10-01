export default function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show")
      }
    })
  })

  // Observe elements with hidden class and on intersection add a show class
  const hiddenElements = document.querySelectorAll(".hidden")
  hiddenElements.forEach((el) => observer.observe(el))
}
