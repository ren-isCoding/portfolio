function validateForm() {
  const form = document.querySelector("#contact-form")
  const nameInput = form.querySelector("#name-input")
  const emailInput = form.querySelector("#email-input")
  const messageInput = form.querySelector("#message-input")
  const errorContainer = form.querySelector("#error-container")

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

  function showSuccessMessage() {
    const successMessage = document.createElement("p")
    successMessage.classList.add("success")
    successMessage.textContent = `Message sent successfully`
    errorContainer.append(successMessage)
  }

  function clearForm() {
    nameInput.value = ""
    emailInput.value = ""
    messageInput.value = ""
  }

  form.onsubmit = (e) => {
    errorContainer.innerHTML = ""
    checkIfEmpty(nameInput)
    checkIfEmpty(emailInput)
    checkIfEmpty(messageInput)

    // Code for backend

    // let formData = {
    //   subject: `(Portfolio) You've got a new message.`,
    //   name: nameInput.value,
    //   email: emailInput.value,
    //   message: `
    //   From: ${emailInput.value},
    //   \n
    //   Name: ${nameInput.value},
    //   \n
    //   Message: ${messageInput.value}`,
    // }

    // // Create a new XML HTTP request
    // let xhr = new XMLHttpRequest()
    // // Post the formData Object to the backend via JSON format
    // xhr.open("POST", "/")
    // xhr.setRequestHeader("content-type", "application/json")
    // xhr.onload = function () {
    //   if (xhr.responseText === "success") {
    //     showSuccessMessage()
    //     clearForm()
    //   } else {
    //     alert("Something went wrong")
    //   }
    // }

    // // Stringify json for backend
    // xhr.send(JSON.stringify(formData))
  }
}

export default validateForm
