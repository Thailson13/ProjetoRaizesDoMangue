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
  const logoutButton = document.querySelector("#Logout");
  const logIn = document.querySelector("#LogIn");
  const signIn = document.querySelector("#signIn");
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
    logIn.style.display = "none";
    signIn.style.display = "none";
    Result.style.display = "flex";
  }

  function showLoginForm() {
    usernameInput.style.display = "block";
    passwordInput.style.display = "block";
    enviarButton.style.display = "block";
    logIn.style.display = "block";
    signIn.style.display = "block";
    Result.style.display = "none";
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
      localStorage.setItem("loggedIn", "true");
      hideLoginForm();
      updateLogoutButtonVisibility(true);
    } else {
      showMessage(Message1, "Usuário ou senha incorretos!", "red");
    }
  }

  function cadastro() {
    const usernameRG = document.querySelector("#UsernameRG").value;
    const passwordRG = document.querySelector("#PasswordRG").value;

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
    document.querySelector("#UsernameRG").value = "";
    document.querySelector("#PasswordRG").value = "";
  }

  function logout() {
    localStorage.removeItem("loggedIn");
    showLoginForm();
    updateLogoutButtonVisibility(false);
  }

  function updateLogoutButtonVisibility(loggedIn) {
    if (loggedIn) {
      logoutButton.style.display = "block";
    } else {
      logoutButton.style.display = "none";
    }
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

  logoutButton.addEventListener("click", logout);

  const loggedIn = localStorage.getItem("loggedIn");
  if (loggedIn === "true") {
    hideLoginForm();
    updateLogoutButtonVisibility(true);
  } else {
    showLoginForm();
    updateLogoutButtonVisibility(false);
  }

  console.log("O DOM foi completamente carregado!");
});

const arrowTop = document.querySelector("#arrowTop");

arrowTop.addEventListener("click", function top() {
  window.scroll(0, 0);
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    arrowTop.style.display = "flex";
  } else {
    arrowTop.style.display = "none";
  }
});
