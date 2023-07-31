let counterValue = 0;
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

buttonDecrement.addEventListener("click", decrementClick);
buttonIncrement.addEventListener("click", incrementClick);
function updateValue(){
  value.textContent = counterValue;
};
function decrementClick() {
  counterValue -= 1;
  updateValue()
  }
function incrementClick() {
  counterValue += 1;
  updateValue()
}
