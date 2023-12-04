function user() {
  var cadForm = document.getElementById("cad-usuario-form");
  let Users = new Array();
  cadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let UsernameRG = document.getElementById("UsernameRG").value;
    let PasswordRG = document.getElementById("PasswordRG").value;
    if (UsernameRG == "" || PasswordRG == "") {
      alert("Parâmentros incompletos!");
    } else {
      if (localStorage.hasOwnProperty("Users")) {
        Users = JSON.parse(localStorage.getItem("Users"));
      }
      for (let i = 0; i < Users.length; i++) {
        if (UsernameRG == Users[i].UsernameRG || UsernameRG == "") {
          return false;
        }
      }
      Users.push({ UsernameRG, PasswordRG });
      localStorage.setItem("Users", JSON.stringify(Users));
    }
  });

  var loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", (e) => {
    Users = JSON.parse(localStorage.getItem("Users"));
    let Username = document.getElementById("Username").value;
    let Password = document.getElementById("Password").value;
    if (Username == "" || Password == "") {
      alert("Incomplete parameters!");
    } else {
      if (Users == undefined || Users == null || Users == "") {
        Users = JSON.parse(localStorage.getItem("Users"));
        alert("Incorrect parameters!");
      } else {
        for (let i = 0; i < Users.length; i++) {
          if (
            Username == Users[i].UsernameRG &&
            Password == Users[i].PasswordRG
          ) {
            console.log("successful Login!");
            let x = document.getElementById("Username");
            let y = document.getElementById("Password");
            let z = document.getElementById("Enviar");
            x.style.display = "none";
            y.style.display = "none";
            z.style.display = "none";
            let Result = document.getElementById("Result");
            Result.style.display = "flex";
            alert("successful Login!");
            e.preventDefault();
          } else {
            e.preventDefault();
            alert("Wrong Username or Passowrd!");
            console.log("Wrong Username or Passowrd!");
          }
        }
      }
    }

    e.preventDefault();
  });
}
user();

let ReloadPage = document.getElementById("btnRLP");
ReloadPage.onclick = () => {
  window.scrollTo(0,0);
};

