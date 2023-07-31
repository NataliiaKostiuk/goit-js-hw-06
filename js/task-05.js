const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
const textDefault = nameOutput.textContent;

nameInput.addEventListener('input', handlerClick);
function handlerClick(evt) {
   nameOutput.textContent = evt.currentTarget.value; 
  getDefautlName();
}
function getDefautlName() {
   if (nameOutput.textContent === '') {
     nameOutput.textContent = textDefault;
  } 
}
