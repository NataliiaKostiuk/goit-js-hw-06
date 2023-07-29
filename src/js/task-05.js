const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
const textDefault = nameOutput.textContent;

nameInput.addEventListener('input', handlerClick);

function handlerClick(evt) {
  
  if (nameInput === '') {
    nameOutput.textContent = textDefault;
  } else {
    nameOutput.textContent = evt.currentTarget.value;
  }
}