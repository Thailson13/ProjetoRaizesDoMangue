// Module Import
import { toggleTheme } from "./components/theme.js";
import { loadTheme } from "./components/theme.js";
import { reloadPage } from "./components/reload.js";
import { onResize } from "./components/responsive.js";
import { responsive } from "./components/responsive.js";

// Query Selector and Get Element;
const btnToggleTheme = document.querySelector("#checkboxTheme");
const btnReload = document.querySelector("#btnReload");

// Function and method
document.addEventListener("DOMContentLoaded", () => {
  // Event click - button;
  btnReload.onclick = reloadPage;
  btnToggleTheme.onclick = toggleTheme;
  // Function load theme;
  loadTheme();
  //Function responsive;
  window.addEventListener('resize', onResize);
  responsive();
});
