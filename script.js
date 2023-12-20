document.addEventListener("DOMContentLoaded", function () {
  const inputElements = document.querySelectorAll(".code");

  inputElements.forEach((inputElement, index) => {
    inputElement.addEventListener("input", function (event) {
      const code = event.data;

      if (!code) {
        handleBackspace(inputElement);
        return;
      }

      if (/^[0-9]$/.test(code)) {
        focusNextInput(index);
      } else {
        inputElement.value = "";
      }
    });

    inputElement.addEventListener("keydown", function (event) {
      if (event.key === "Backspace") {
        event.preventDefault();
        handleBackspace(inputElement);
      }
    });
  });
});

function focusNextInput(index) {
  const inputElements = document.querySelectorAll(".code");
  const nextIndex = index + 1;
  if (nextIndex < inputElements.length) {
    inputElements[nextIndex].focus();
  }
}

function handleBackspace(currentElement) {
  const prevElement = currentElement.previousElementSibling;
  if (prevElement) {
    prevElement.focus();
    prevElement.value = "";
  }
}
