const textInput = document.getElementById("name-input");
const output = document.getElementById("name-output");

textInput.addEventListener("input", (event) => {
  let inputValue = event.currentTarget.value.trim();

  if (inputValue === "" || /^\s+$/.test(inputValue)) {
    output.textContent = "Anonymous";
  } else {
    output.textContent = inputValue;
  }
});
