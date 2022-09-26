function validateForm() {
  const formEl = document.querySelector("#contact-form")
  const nameEl = formEl.querySelector("#name-input")
  const emailEl = formEl.querySelector("#email-input")
  const messageEl = formEl.querySelector("#message-input")
  const errorContainer = formEl.querySelector("#error-container")

  function checkIfEmpty(element) {
    if (element.value.trim().length == 0) throwError(element)
    else element.classList.remove("error")
  }

  function throwError(element) {
    event.preventDefault()
    element.classList.add("error")
    const errorMessage = document.createElement("p")
    errorMessage.textContent = `${element.name} is empty${
      element.name == "Email" ? " or invalid" : ""
    }.`
    errorContainer.append(errorMessage)
  }

  formEl.onsubmit = (e) => {
    errorContainer.innerHTML = ""
    checkIfEmpty(nameEl)
    checkIfEmpty(emailEl)
    checkIfEmpty(messageEl)
  }
}

export default validateForm
