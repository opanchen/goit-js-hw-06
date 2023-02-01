const refs = {
  formEl: document.querySelector('.login-form'),
  inputEmailEl: document.querySelector('[type="email"]'),
  inputPasswordEl: document.querySelector('[type="password"]'),
  btnSubmitEl: document.querySelector('[type="submit"]'),
};

refs.formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (refs.inputEmailEl.value === '' || refs.inputPasswordEl.value === '') {
    return alert('Please fill in all the fields to continue!');
  }

  const dataUserInfo = {
    email: email.value,
    password: password.value,
  };

  // console.log(`Email: ${dataUserInfo.email} \nPassword: ${dataUserInfo.password}`);
  console.log(dataUserInfo);

  event.currentTarget.reset();
}
