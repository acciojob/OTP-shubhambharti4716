document.addEventListener("DOMContentLoaded", function () {
  let inputElements = document.querySelectorAll(".code");

  for (let i = 0; i < inputElements.length; i++) {
    inputElements[i].addEventListener("input", function (event) {
      let currentElement = event.target;
      let code = event.data;

      if (!code) {
        handleBackspace(currentElement);
        return;
      }

      if (code >= "0" && code <= "9") {
        focusNextInput(currentElement);
      } else {
        currentElement.value = "";
      }
    });

    inputElements[i].addEventListener("keydown", function (event) {
      if (event.key === "Backspace") {
        event.preventDefault(); // Prevent the default backspace behavior
        handleBackspace(inputElements[i]);
      }
    });
  }
});

function focusNextInput(currentElement) {
  let nextElement = currentElement.nextElementSibling;
  if (nextElement) {
    nextElement.focus();
  }
}

function handleBackspace(currentElement) {
  let prevElement = currentElement.previousElementSibling;
  if (prevElement) {
    prevElement.focus();
    prevElement.value = ""; // Clear the value of the previous input
  }
}
