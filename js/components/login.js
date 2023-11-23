let users = [];

export function login() {
  const username = document.querySelector("#Username").value;
  const password = document.querySelector("#Password").value;

  if (!username || !password) {
    alert("Parâmetros incompletos");
    document.querySelector("#Username").value = "";
    document.querySelector("#Password").value = "";
    return;
  }

  users = JSON.parse(localStorage.getItem("Users")) || [];
  const user = users.find(
    (user) => user.Username === username && user.Password === password
  );

  if (user) {
    alert("Login efetuado com sucesso!");
  } else {
    alert("Usuario ou senha incorreto!");
  }
}

export function register() {
  const usernameRG = document.querySelector("#UsernameRG").value;
  const passwordRG = document.querySelector("#PasswordRG").value;
  if (!usernameRG || !passwordRG) {
    alert("Parâmetros incompletos");
    document.querySelector("#PasswordRG").value = "";
    document.querySelector("#UsernameRG").value = "";
    return;
  }

  users = JSON.parse(localStorage.getItem("Users")) || [];
  const userExists = users.some((user) => user.Username === usernameRG);

  if (userExists) {
    alert("Usuário existente");
    document.querySelector("#PasswordRG").value = "";
    document.querySelector("#UsernameRG").value = "";
    return;
  } else {
    document.querySelector("#PasswordRG").value = "";
    document.querySelector("#UsernameRG").value = "";
    alert("Usuário Registrado");
    return;
  }

  users.push({ Username: usernameRG, Password: passwordRG });
  localStorage.setItem("Users", JSON.stringify(users));
}
