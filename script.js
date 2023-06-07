document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("#loginForm");
  const Enviar = document.querySelector("#Enviar");
  const Message1 = document.querySelector("#Message1");
  const Message2 = document.querySelector("#Message2");
  const cadForm = document.querySelector("#cad-usuario-form");
  const btnRGNL = document.querySelector("#btnRGNL");
  const usernameInput = document.querySelector("#Username");
  const passwordInput = document.querySelector("#Password");
  const enviarButton = document.querySelector("#Enviar");
  const Result = document.querySelector("#Result");
  let Users = [];

  function showMessage(element, text, color) {
    element.textContent = text;
    element.style.display = "block";
    element.style.backgroundColor = color;
    element.style.color = "white";
    setTimeout(function () {
      element.style.display = "none";
    }, 1500);
  }

  function hideLoginForm() {
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    enviarButton.style.display = "none";
    Result.style.display = "flex";
  }

  function login() {
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (!username || !password) {
      showMessage(Message1, "Parâmetros incompletos!", "red");
      return;
    }

    Users = JSON.parse(localStorage.getItem("Users")) || [];

    const user = Users.find(
      (user) => user.UsernameRG === username && user.PasswordRG === password
    );

    if (user) {
      hideLoginForm();
    } else {
      showMessage(Message1, "Usuário ou senha incorretos!", "red");
    }
  }

  function cadastro() {
    const usernameRG = document.getElementById("UsernameRG").value;
    const passwordRG = document.getElementById("PasswordRG").value;

    if (!usernameRG || !passwordRG) {
      showMessage(Message2, "Parâmetros incompletos!", "red");
      return;
    }

    Users = JSON.parse(localStorage.getItem("Users")) || [];

    const userExists = Users.some((user) => user.UsernameRG === usernameRG);

    if (userExists) {
      showMessage(Message2, "Usuário já cadastrado!", "red");
      return false;
    }

    Users.push({ UsernameRG: usernameRG, PasswordRG: passwordRG });
    localStorage.setItem("Users", JSON.stringify(Users));

    showMessage(Message2, "Registro efetuado com sucesso!", "#228b22");
    document.getElementById("UsernameRG").value = "";
    document.getElementById("PasswordRG").value = "";
  }

  Enviar.addEventListener("click", login);
  loginForm.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      login();
    }
  });

  btnRGNL.addEventListener("click", cadastro);
  cadForm.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      cadastro();
    }
  });

  console.log("O DOM foi completamente carregado!");
});
