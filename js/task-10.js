function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputNumberEl: document.querySelector('[type="number"]'),
  btnCreateEl: document.querySelector('[data-create]'),
  btnDestroyEl: document.querySelector('[data-destroy]'),
  containerEl: document.querySelector('#boxes'),
};

refs.btnCreateEl.addEventListener('click', onCreate);
refs.btnDestroyEl.addEventListener('click', onDestroy);

function createBoxes(amount) {
  let boxSize = 20;
  let markup = ``;

  for (let i = 0; i < amount; i += 1) {
    const hexColorValue = getRandomHexColor();

    boxSize += 10;
    markup += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${hexColorValue}"></div>`;
  }

  refs.containerEl.insertAdjacentHTML('afterbegin', markup);
}

function onCreate() {
  const amount = Number(refs.inputNumberEl.value);

  const isAmountValid =
    amount >= refs.inputNumberEl.getAttribute('min') &&
    amount <= refs.inputNumberEl.getAttribute('max');

  if (!isAmountValid)
    return alert(
      `Error! Invalid value! \nPlease enter a number in the range of ${refs.inputNumberEl.getAttribute(
        'min'
      )} to ${refs.inputNumberEl.getAttribute('max')}.`
    );

  createBoxes(amount);
}

function onDestroy() {
  [...refs.containerEl.children].forEach(el => {
    el.remove();
  });
  refs.inputNumberEl.value = '';
}
