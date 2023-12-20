// Your JS code here. If required.
let inputElements = document.querySelectorAll(".code");

console.log(inputElements.length);

for (let i = 0; i < inputElements.length; i++) {
  inputElements[i].addEventListener("input", (event) => {
    let currentElement = event.target;
    let code = event.data;

    if (!code) {
      let prevElement = currentElement.previousElementSibling;
      if (prevElement) {
        prevElement.focus();
      }
      return;
    }

    if (code >= "0" && code <= "9") {
      let nextElement = currentElement.nextElementSibling;
      if (nextElement) {
        nextElement.focus();
      }
    } else {
      currentElement.value = ""; // Clear the current input if a non-digit is entered
    }
  });
}
