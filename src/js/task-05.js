const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
const textDefault = nameOutput.textContent;

nameInput.addEventListener('input', handlerClick);

function handlerClick(evt) {
  nameOutput.textContent = evt.currentTarget.value.trim();
  if (nameInput.textContent.trim() === '') {
    nameOutput.textContent = textDefault;
  }
}
console.log(nameInput.textContent);