const refs = {
  inputRangeEl: document.querySelector('#font-size-control'),
  inputLabelEl: document.querySelector('#text'),
};

refs.inputRangeEl.addEventListener('input', onRangeChange);

function onRangeChange(event) {
  const rangeValue = event.currentTarget.value;
  refs.inputLabelEl.style.fontSize = `${rangeValue}px`;
}
