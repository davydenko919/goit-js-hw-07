function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;

const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

button.addEventListener("click", () => {
  let color = getRandomHexColor();
  body.style.background = color;
  span.textContent = color;
});
