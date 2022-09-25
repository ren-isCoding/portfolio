function updateNavBar() {
  let scrollPosition = window.scrollY
  const header = document.querySelector("#nav-bar")
  const topBtn = document.querySelector("#top-btn")
  topBtn.addEventListener("click", (e) => scrollToTop())

  function hideNavBarElements() {
    header.classList.remove("background")
    topBtn.classList.remove("show")
  }

  function showNavBarElements() {
    header.classList.add("background")
    topBtn.classList.add("show")
  }

  window.addEventListener("scroll", (e) => {
    scrollPosition = window.scrollY

    if (scrollPosition > 900) {
      showNavBarElements()
    } else {
      hideNavBarElements()
    }
  })

  onload = (e) => {
    scrollPosition = window.scrollY

    if (scrollPosition > 900) {
      showNavBarElements()
    } else {
      hideNavBarElements()
    }
  }

  function scrollToTop() {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }
}

export default updateNavBar
