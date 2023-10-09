// Get all the form elements
const formElements = document.querySelectorAll("input, select, textarea");
// Add an event listener to each form element
formElements.forEach((element) => {
  element.addEventListener("blur", () => {
    // Check if the element is valid
    if (!element.checkValidity()) {
      // Add the error class to the element
      element.classList.add("error");
    } else {
      // Remove the error class from the element
      element.classList.remove("error");
    }
  });
});
// Add a submit event listener to the form
document.querySelector("form").addEventListener("submit", (event) => {
  // Prevent the form from submitting if there are any errors
  if (document.querySelectorAll(".error").length > 0) {
    event.preventDefault();
  }
});
