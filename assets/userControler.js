(function () {

  const signUpRegBtn = getById('signUpBtn');

  const modalLogin = getById('modalLogin');
  const modalEmail = getById('modalEmail');
  const modalCont = getById('modalCont');

  const singUp = getById('signUp');
  const closeBtn = getById('closeBtn');
  const close = getById('close');
  const closeLogIn = getById('closeLogIn');

  let nameInputReg = getById("nameInputReg");
  let emailInputReg = getById("emailInputReg");
  let passwordInputReg = getById("passwordInputReg");
  let loginEmail = getById("emailLogInput");
  let loginPassword = getById("passwordLogInput");

  const emailModalBtn = getById('emailModalBtn');
  const loginButton = getById("loginButton");
  const loginModalBtn = getById('loginModalBtn');

  singUp.addEventListener('click', function () {
    modalCont.style.display = 'block';
    if (modalCont.style.display === 'block') {
      closeBtn.addEventListener('click', function () {
        modalCont.style.display = 'none';
      })
    }
  })

  emailModalBtn.addEventListener('click', () => {
    modalEmail.style.display = 'block';
    modalCont.style.display = 'none';
    modalLogin.style.display = 'none';

  }
  )
  close.addEventListener('click', () => {
    modalEmail.style.display = 'none';
  })


  loginModalBtn.addEventListener('click', () => {
    modalLogin.style.display = 'block';
    modalEmail.style.display = 'none';
    modalCont.style.display = 'none';
    if (modalLogin.style.display === 'block') {
    }
  })
  closeLogIn.addEventListener('click', () => {
    modalLogin.style.display = 'none';
  })

  loginButton.addEventListener("click", function (ev) {
    ev.preventDefault();
    let email = loginEmail.value;
    let password = loginPassword.value;
    if (userStorage.login(email, password)) {
      modalLogin.style.display = 'none';
      location.hash = '#Fresh';
    } else {
      //  throw some error 
    }
  });

  signUpRegBtn.addEventListener("click", function (ev) {
    ev.preventDefault();

    const name = nameInputReg.value;
    const email = emailInputReg.value;
    const password = passwordInputReg.value;
    userStorage.register(name, email, password);
    modalEmail.style.display = 'none';
    modalLogin.style.display = 'block';

  });
})();