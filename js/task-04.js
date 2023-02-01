const refs = {
  btnDecr: document.querySelector('[data-action="decrement"]'),
  btnIncr: document.querySelector('[data-action="increment"]'),
  counterEl: document.querySelector('#value'),
};

let counterValue = 0;

refs.btnIncr.addEventListener('click', increaseValue);
refs.btnDecr.addEventListener('click', decreaseValue);

function increaseValue() {
  counterValue += 1;
  //   console.log(counterValue);
  refs.counterEl.textContent = counterValue;
}

function decreaseValue() {
  counterValue -= 1;
  //   console.log(counterValue);
  refs.counterEl.textContent = counterValue;
}
