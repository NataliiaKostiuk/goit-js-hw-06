const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const container = document.querySelector("#ingredients");

const listIngredients = [];
for (const element of ingredients) {
  let ingredient = document.createElement('li');
  ingredient.classList.add('item');
  ingredient.textContent = element;
  listIngredients.push(ingredient)
}
container.append(...listIngredients)
console.dir(container);