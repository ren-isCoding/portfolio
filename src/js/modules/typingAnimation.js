function animateTyping() {
  const element = document.querySelector("#typewriter")
  const textArray = ["Developer", "Designer", "Martial Artist", "Coffeeholic"]

  // Current text being processed
  let currentText = 0

  // Character number of the current text being processed
  let currentCharacter = 0

  // Holds the handle returned from setInterval
  let interval

  // Implements typing effect
  function Type() {
    // Get substring with 1 characater added
    const text = textArray[currentText].substring(0, currentCharacter + 1)
    element.innerHTML = text
    currentCharacter++

    // If full text has been displayed then start to delete the text after some time
    if (text === textArray[currentText]) {
      clearInterval(interval)
      setTimeout(function () {
        interval = setInterval(Delete, 100)
      }, 1000)
    }
  }

  // Implements deleting effect
  function Delete() {
    // Get substring with 1 characater deleted
    const text = textArray[currentText].substring(0, currentCharacter - 1)
    element.innerHTML = text
    currentCharacter--

    // If text has been deleted then start to display the next text
    if (text === "") {
      clearInterval(interval)

      // If current text was last then display the first one, else move to the next
      if (currentText == textArray.length - 1) currentText = 0
      else currentText++

      currentCharacter = 0

      // Start to display the next text after some time
      setTimeout(function () {
        interval = setInterval(Type, 150)
      }, 200)
    }
  }

  // Start animation on load
  interval = setInterval(Type, 150)
}

export default animateTyping
