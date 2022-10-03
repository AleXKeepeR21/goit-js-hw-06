const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const makeItems = ingredients => {
  return ingredients.map(ingredient => {
    const navItemRef = document.createElement('li');
    navItemRef.textContent = ingredient;
    navItemRef.classList.add('item');
    return navItemRef;
  });
}

const itemsEl = makeItems(ingredients);

ingredientsRef.append(...itemsEl);

console.log(...itemsEl)

// const navItemRef = document.createElement('li');
// navItemRef.classList.add('item');
// navItemRef.textContent = 'Potatoes';
// console.log(navItemRef);




