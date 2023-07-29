const input = document.querySelector('#validation-input');

input.addEventListener('blur', onBlur);
function onBlur(evt) {
  if (evt.currentTarget.value.length !== Number(input.dataset.length) ) {
    input.classList.add('invalid');
    console.log(evt.currentTarget.value);
  }
  else {
     input.classList.remove('invalid');
     input.classList.add('valid');
    
    }
}