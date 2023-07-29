function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector(".change-color");
const containerColor = document.querySelector('.color');
const container = document.querySelector('body');

button.addEventListener('click', changeColor);

function changeColor() {
  const currentColor = getRandomHexColor();
  container.style.backgroundColor = currentColor;
  containerColor.textContent = currentColor;
}