const userStorage = (function () {
  class User {
    constructor(name, email, password) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.IsLoggedIn = false;

    }

    get username() {
      return this._username;
    }

    set username(parametur) {

      if (typeof parametur !== 'string' || parametur.length < 3 || parametur.length > 20) {
        alert('Invalid username! Must be less than 20 symbols and longer than 3.');
        throw new Error('Invalid username! Must be less than 20 symbols and longer than 3.');
      }

      this._username = parametur;
    }

    get password() {
      return this._password;
    }

    set password(correctPass) {

      if (correctPass.length < 2 || correctPass.length > 20) {
        alert('Invalid password! Мust be  less than 20 symbols and longer than 3.');
        throw new Error('Invalid password! Мust be  less than 20 symbols and longer than 3.');
      }

      this._password = correctPass;
    }
  }

  class UserStorage {
    constructor() {

      if (localStorage.getItem("users")) {
        this.users = JSON.parse(localStorage.getItem("users"));
      } else {
        this.users = [
          new User('Borislav', 'borislavivanovtw@gmail.com', '1234ss'),
          new User('Rusin', 'rusintw@gmail.com', '1234ss')
        ];
        localStorage.setItem("users", JSON.stringify(this.users));
      }

    }

    register(name, email, password) {
      this.users.push(new User(name, email, password));
      localStorage.setItem('users', JSON.stringify(this.users));
    }

    login(email, password) {
      
      let currentUser = this.users.some(user => user.email === email && user.password === password);
      if (currentUser) {
        this.users.forEach(user => {
          if (user.email === email && user.password === password) {
            user.IsLoggedIn = true;
          } else {
            user.IsLoggedIn = false;
          }
        })
        localStorage.setItem('users', JSON.stringify(this.users));

      }
      return currentUser;
    }

    getCurrentUser() {
      return this.users.find(user => user.IsLoggedIn === true);
    }

    validate(email, password, username) {

      if (email.trim().length > 5 && password.trim().length > 5 && username.trim().length > 3) {
        let emailValidator = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;

        if (!email.match(emailValidator)) {
          alert("Invalid еmail аddress!");

          return false;
        }

        return true;
      }

      return false;
    }
  }

  return new UserStorage();
})();