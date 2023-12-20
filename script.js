let inputElements = document.getElementsByClassName("code");
console.log(inputElements.length);

for (let i = 0; i < inputElements.length; i++) {
  inputElements[i].addEventListener("input", (event) => {
    let currentElement = event.target;
    let code = event.data; // Use event.data to get the input value

    if (event.inputType === "deleteContentBackward") {
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
      event.target.value = "";
    }
  });
}
