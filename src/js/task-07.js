const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
range.addEventListener('input', onMoveRange);
function onMoveRange(evt) {
 text.style.fontSize = `${evt.currentTarget.value}px`
}