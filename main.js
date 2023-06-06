  function user() {
    const cadForm = document.getElementById("cad-usuario-form");
    const btnRGNL = document.getElementById("btnRGNL");
    const loginForm = document.getElementById("loginForm");
    const Enviar = document.getElementById("Enviar");
    let Users = [];

    function cadastro() {
      const UsernameRG = document.getElementById("UsernameRG").value;
      const PasswordRG = document.getElementById("PasswordRG").value;

      if (UsernameRG === "" || PasswordRG === "") {
        alert("Incomplete parameters!");
      } else {
        if (localStorage.hasOwnProperty("Users")) {
          Users = JSON.parse(localStorage.getItem("Users"));
        }

        for (let i = 0; i < Users.length; i++) {
          if (UsernameRG === Users[i].UsernameRG || UsernameRG === "") {
            return false;
          }
        }

        Users.push({ UsernameRG, PasswordRG });
        localStorage.setItem("Users", JSON.stringify(Users));
        location.reload();
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
              alert("successful Login!");
            } else {
              alert("Wrong Username or Password!");
              console.log("Wrong Username or Password!");
            }
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
