const userStorage = (function () {
    class User {
      constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
  
      }
    }
  
    class UserStorage {
      constructor() {
        if (localStorage.getItem("users")) {
          this.users = JSON.parse(localStorage.getItem("users"));
        } else {
          this.users = [
            new User('Borislav', 'borislavivanovtw@gmail.com', 1234),
            new User('Rusin', 'rusintw@gmail.com', 1234)
          ];
          localStorage.setItem("users", JSON.stringify(this.users));
        }
      }
  
      register(name, email, password) {
        this.users.push(new User(name, email, password));
        localStorage.setItem('users', JSON.stringify(this.users));
      }
  
      login(email, password) {
        const isUserLogIn = this.users.some(
          (user) => user.email === email && user.password === password
        );
  
        return isUserLogIn;
      }
  
      validate(email, password, username) {
        if (email.trim().length > 5 && password.trim().length > 5 && username.trim().length > 3) {
          return true;
        }
  
        return false;
      }
    }
  
    return new UserStorage();
  })();