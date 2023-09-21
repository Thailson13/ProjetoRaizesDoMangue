// Module Import
import { toggleTheme } from "./components/theme.js";
import { loadTheme } from "./components/theme.js";
import { reloadPage } from "./components/reload.js";

// Query Selector and Get Element
const btnToggleTheme = document.querySelector("#checkboxTheme");
const btnReload = document.querySelector("#btnReload");

// Function and method
document.addEventListener("DOMContentLoaded", () => {
  // Event click - button
  btnReload.onclick = reloadPage;
  btnToggleTheme.onclick = toggleTheme;
  loadTheme();
  //Funcion resize
});
