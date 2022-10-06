function updateHeroSection() {
  let scrollPosition = window.scrollY
  const heroTitle = document.querySelector(".hero-title")
  const heroBtn = document.querySelector(".hero-btn")

  function showText() {
    heroTitle.style.display = "block"
    heroBtn.style.display = "flex"
  }

  function hideText() {
    heroTitle.style.display = "none"
    heroBtn.style.display = "none"
  }

  window.addEventListener("scroll", (e) => {
    scrollPosition = window.scrollY

    if (scrollPosition > 1000) {
      hideText()
    } else if (scrollPosition < 1000) {
      showText()
    }
  })

  onload = (e) => {
    scrollPosition = window.scrollY

    if (scrollPosition > 900) {
      hideText()
    } else {
      showText()
    }
  }
}

export default updateHeroSection
