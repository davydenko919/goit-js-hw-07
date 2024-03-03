function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const textInput = document.querySelector(".text-input");
const boxContainer = document.getElementById("boxes");

createBtn.addEventListener("click", () => {
  const amount = parseInt(textInput.value);

  boxContainer.innerHTML = "";

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }

  textInput.value = "";
});

destroyBtn.addEventListener("click", () => {
  boxContainer.innerHTML = "";
});

function createBoxes(amount) {
  let firstBoxSize = 20;
  for (let i = 0; i < amount; i++) {
    firstBoxSize += 10;
    const box = document.createElement("div");
    box.style.width = `${firstBoxSize}px`;
    box.style.height = `${firstBoxSize}px`;
    box.style.background = getRandomHexColor();
    boxContainer.appendChild(box);
  }
}
