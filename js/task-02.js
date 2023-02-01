const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listEl = document.querySelector('#ingredients');

const items = ingredients.map(item => {
  const itemEl = document.createElement('li');
  itemEl.textContent = item;
  itemEl.className = 'item';
  return itemEl;
});

listEl.append(...items);
