function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputCounter = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

buttonDestroy.addEventListener('click', destroyBoxes);
function destroyBoxes() {
   boxes.innerHTML = "";
}
 
buttonCreate.addEventListener('click', paintBoxes);
function paintBoxes() {
  destroyBoxes();
  createBoxes(inputCounter.value);
}

function createBoxes(amount) {
  
    const arr = [];
   
    let sizeElement = 30;
  if (inputCounter.value <= 0) {
    alert('Please,enter a number!')
  } else {
    for (let i = 0; i < amount; i += 1) {
      sizeElement += 10;
     let element = document.createElement('div'); 
      element.style.width = `${sizeElement}px`;
      element.style.height = `${sizeElement}px`;
      const color = getRandomHexColor();
      element.style.backgroundColor = color;
      arr.push(element);

    }
    boxes.append(...arr);

  }
}
