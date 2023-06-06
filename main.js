function user() {
  const cadForm = document.getElementById("cad-usuario-form");
  const btnRGNL = document.getElementById("btnRGNL");
  const loginForm = document.getElementById("loginForm");
  const Enviar = document.getElementById("Enviar");
  const Message = document.getElementById("Message");
  let Users = [];

  function showMessage(text, color) {
    Message.textContent = text;
    Message.style.display = "block";
    Message.style.backgroundColor = color;
    Message.style.color = "white";
    setTimeout(function () {
      Message.style.display = "none";
    }, 1500);
  }

  function cadastro() {
    const UsernameRG = document.getElementById("UsernameRG").value;
    const PasswordRG = document.getElementById("PasswordRG").value;

    if (UsernameRG === "" || PasswordRG === "") {
      showMessage("Incomplete parameters!", "red");
    } else {
      if (localStorage.hasOwnProperty("Users")) {
        Users = JSON.parse(localStorage.getItem("Users"));
        const userExists = Users.some((user) => user.UsernameRG === UsernameRG);
        if (userExists) {
          showMessage("Usuário já cadastrado!", "red");
          return false;
        }
      }

      Users.push({ UsernameRG, PasswordRG });
      localStorage.setItem("Users", JSON.stringify(Users));

      showMessage("Registro efetuado com sucesso!", "#228b22");
      document.getElementById("UsernameRG").value = "";
      document.getElementById("PasswordRG").value = "";
    }
  }

  function login() {
    Users = JSON.parse(localStorage.getItem("Users"));
    const Username = document.getElementById("Username").value;
    const Password = document.getElementById("Password").value;

    if (Username === "" || Password === "") {
      alert("Incomplete parameters!");
    } else {
      if (!Users) {
        Users = JSON.parse(localStorage.getItem("Users"));
        alert("Incorrect parameters!");
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
            showMessage("successful Login!", "#228b22");
            success = true;
            break;
          }
        }
        if (!success) {
          showMessage("Wrong Username or Password!", "red");
        }
      }
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
