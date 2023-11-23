// Module Import
import { toggleTheme } from "./components/theme.js";
import { loadTheme } from "./components/theme.js";
import { responsiveDropdown } from "./components/responsive.js";
import { onResize } from "./components/responsive.js";
import { responsive } from "./components/responsive.js";
import { register } from "./components/login.js";
import { login } from "./components/login.js";


// Query Selector and Get Element;
const btnToggleTheme = document.querySelector("#checkboxTheme");
const btnResponiveDropdown = document.querySelector("#btnResponiveDropdown");
const logar = document.querySelector("#Logar");
const registrar = document.querySelector("#Registrar")
// Function and method
document.addEventListener("DOMContentLoaded", () => {
  // Event click - button;
  btnResponiveDropdown.onclick = responsiveDropdown;
  btnToggleTheme.onclick = toggleTheme;
  logar.onclick = login;
  Registrar.onclick = register;
  // Function load theme;
  loadTheme();

  window.addEventListener('resize', onResize);
  responsive();
  
  


});
