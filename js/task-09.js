function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  pageEl: document.querySelector('body'),
  colorValueEl: document.querySelector('.widget .color'),
  btnSwitch: document.querySelector('.change-color'),
};

refs.btnSwitch.addEventListener('click', onClick);

function onClick(event) {
  const hexColorValue = getRandomHexColor();
  refs.colorValueEl.textContent = hexColorValue;
  refs.pageEl.style.backgroundColor = hexColorValue;
}
