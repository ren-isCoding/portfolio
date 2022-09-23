function updateHeader() {
  let scrollPosition = window.scrollY
  const header = document.querySelector("header")
  const topBtn = document.querySelector("#top-btn")
  topBtn.addEventListener("click", (e) => scrollToTop())

  function addClassOnScroll() {
    header.classList.add("background")
  }

  function removeClassOnScroll() {
    header.classList.remove("background")
  }

  window.addEventListener("scroll", function () {
    scrollPosition = window.scrollY

    if (scrollPosition > 900) {
      addClassOnScroll()
    } else {
      removeClassOnScroll()
    }
  })

  onload = (e) => {
    scrollPosition = window.scrollY

    if (scrollPosition > 923) {
      addClassOnScroll()
    } else {
      removeClassOnScroll()
    }
  }

  function scrollToTop() {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }
}

export default updateHeader
