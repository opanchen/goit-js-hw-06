const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', OnInputBlur);

function OnInputBlur(event) {
  inputEl.className = inputEl.value.length === Number(inputEl.dataset.length) ? 'valid' : 'invalid';
}
