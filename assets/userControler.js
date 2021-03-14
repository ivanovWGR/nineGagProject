(function () {
  const signUpRegBtn = getById('signUpBtn');
  const loginButton = getById("loginButton");
  const profilePicutre = document.querySelector('#profilePic img');
  const moods = getById('moods');

  let nameInputReg = getById("nameInputReg");
  let emailInputReg = getById("emailInputReg");
  let passwordInputReg = getById("passwordInputReg");
  let loginEmail = getById("emailLogInput");
  let loginPassword = getById("passwordLogInput");
  let errorCont = getById('errorCont');
  let errorReg = getById('errorRegister');
  let headerButton = getById('signUp');

  function checkIfLoggedIn() {
    let email = loginEmail.value;
    let password = loginPassword.value;
    if (userStorage.login(email, password)) {
      console.log('vutre');
      logIn.style.display = 'none';
      headerButton.innerText = 'Update';
      document.querySelector('#bellIcon a').style.display = 'inline-block';
      profilePicutre.style.display = 'inline-block';

      errorCont.innerHTML = '';
      modalLogin.style.display = 'none';
      location.hash = '#Fresh';
    } else {
      errorCont.style.color = 'red';
      errorCont.innerHTML = 'Wrong email or password. Try again!';
    }
  }

  loginButton.addEventListener("click", function (ev) {
    ev.preventDefault();
    checkIfLoggedIn();
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
    } else {
      errorReg.style.color = 'red';
      errorReg.innerHTML = 'Wrong email, password or username. Try again!';
    }

    nameInputReg.value = '';
    emailInputReg.value = '';
    passwordInputReg.value = '';
  });

  moods.addEventListener('click', () => {

    if (moods.style.display === 'block') {
      document.body.style.backgroundColor = 'white';
      moods.style.display = 'inline-block';
    } else {
      document.body.style.backgroundColor = 'black';
      moods.style.display = 'block';
      // TODO must be white headers and icons 
    }
  });


})();