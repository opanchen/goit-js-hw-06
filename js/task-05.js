const refs = {
  inputEl: document.querySelector('#name-input'),
  outputEl: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  //   console.log(event.currentTarget.value);
  refs.outputEl.textContent = event.currentTarget.value;
  if (refs.outputEl.textContent === '') {
    refs.outputEl.textContent = 'Anonymous';
  }
}
