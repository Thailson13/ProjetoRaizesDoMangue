function user() {
  const cadForm = document.getElementById("cad-usuario-form");
  const btnRGNL = document.getElementById("btnRGNL");
  const loginForm = document.getElementById("loginForm");
  const Enviar = document.getElementById("Enviar");
  const Message1 = document.getElementById("Message1");
  const Message2 = document.getElementById("Message2");
  let Users = [];

  function showMessage1(text, color) {
    Message1.textContent = text;
    Message1.style.display = "block";
    Message1.style.backgroundColor = color;
    Message1.style.color = "white";
    setTimeout(function () {
      Message1.style.display = "none";
    }, 1500);
  }

  function showMessage2(text, color) {
    Message2.textContent = text;
    Message2.style.display = "block";
    Message2.style.backgroundColor = color;
    Message2.style.color = "white";
    setTimeout(function () {
      Message2.style.display = "none";
    }, 1500);
  }

  function login() {
    Users = JSON.parse(localStorage.getItem("Users"));
    const Username = document.getElementById("Username").value;
    const Password = document.getElementById("Password").value;

    if (Username === "" || Password === "") {
      showMessage1("Incomplete parameters!", "red");
    } else {
      if (!Users) {
        Users = JSON.parse(localStorage.getItem("Users"));
        showMessage1("Incorrect parameters!", "red");
      } else {
        let success = false;
        for (let i = 0; i < Users.length; i++) {
          if (
            Username === Users[i].UsernameRG &&
            Password === Users[i].PasswordRG
          ) {
            console.log("successful Login!");
            const x = document.getElementById("Username");
            const y = document.getElementById("Password");
            const z = document.getElementById("Enviar");
            x.style.display = "none";
            y.style.display = "none";
            z.style.display = "none";
            const Result = document.getElementById("Result");
            Result.style.display = "flex";
            showMessage1("successful Login!", "#228b22");
            success = true;
            break;
          }
        }
        if (!success) {
          showMessage1("Wrong Username or Password!", "red");
        }
      }
    }
  }

  function cadastro() {
    const UsernameRG = document.getElementById("UsernameRG").value;
    const PasswordRG = document.getElementById("PasswordRG").value;

    if (UsernameRG === "" || PasswordRG === "") {
      showMessage2("Incomplete parameters!", "red");
    } else {
      if (localStorage.hasOwnProperty("Users")) {
        Users = JSON.parse(localStorage.getItem("Users"));
        const userExists = Users.some((user) => user.UsernameRG === UsernameRG);
        if (userExists) {
          showMessage2("Usuário já cadastrado!", "red");
          return false;
        }
      }

      Users.push({ UsernameRG, PasswordRG });
      localStorage.setItem("Users", JSON.stringify(Users));

      showMessage2("Registro efetuado com sucesso!", "#228b22");
      document.getElementById("UsernameRG").value = "";
      document.getElementById("PasswordRG").value = "";
    }
  }
  Enviar.onclick = login;
  loginForm.onkeypress = (event) => {
    if (event.keyCode === 13) {
      login();
    }
  };

  btnRGNL.onclick = cadastro;
  cadForm.onkeypress = (event) => {
    if (event.keyCode === 13) {
      cadastro();
    }
  };
}

user();
