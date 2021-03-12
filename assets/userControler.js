
(function () {
  const signUpRegBtn = getById('signUpBtn');
  const loginButton = getById("loginButton");


  let nameInputReg = getById("nameInputReg");
  let emailInputReg = getById("emailInputReg");
  let passwordInputReg = getById("passwordInputReg");
  let loginEmail = getById("emailLogInput");
  let loginPassword = getById("passwordLogInput");
  let errorCont = getById('errorCont');
  let errorReg = getById('errorRegister');


  loginButton.addEventListener("click", function (ev) {
    ev.preventDefault();
    let email = loginEmail.value;
    let password = loginPassword.value;
    if (userStorage.login(email, password)) {
      errorCont.innerHTML = '';
      modalLogin.style.display = 'none';
      location.hash = '#Fresh';
    } else {
      errorCont.style.color = 'red';
      errorCont.innerHTML = 'Wrong Email or password.Try again!';
    }
  });



  signUpRegBtn.addEventListener("click", function (ev) {
    ev.preventDefault();


    const name = nameInputReg.value;
    const email = emailInputReg.value;
    const password = passwordInputReg.value;

    if (userStorage.validate(email, password, name)) {
      errorReg.innerHTML = '';
      userStorage.register(name, email, password);
      modalEmail.style.display = 'none';
      modalLogin.style.display = 'block';
      nameInputReg.value = '';
      emailInputReg.value = '';
      passwordInputReg.value = '';
    }
    else {
      errorReg.style.color = 'red';
      errorReg.innerHTML = 'Wrong Email,password or username.Try again!';
      nameInputReg.value = '';
      emailInputReg.value = '';
      passwordInputReg.value = '';
    }

  });
})();