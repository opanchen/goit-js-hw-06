const categoriesListEl = document.querySelector('#categories');

console.log(`Number of categories: ${categoriesListEl.children.length}`);

const itemList = [...categoriesListEl.children];

function getInfo() {
  itemList.map(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
  });
}

getInfo();
