// Module Import
import { toggleTheme } from "./components/theme.js";
import { loadTheme } from "./components/theme.js";
import { reloadPage } from "./components/reload.js";
import { img } from "./components/img.js";
import { play } from "./components/aud.js";
import { pause } from "./components/aud.js";
import { aum } from "./components/aud.js";
import { aba } from "./components/aud.js";

// Query Selector and Get Element
const btnToggleTheme = document.querySelector("#checkboxTheme");
const btnReload = document.querySelector("#btnReload");
const btnPlay = document.querySelector("#Play");
const btnPause = document.querySelector("#Pause");
const btnAum = document.querySelector("#Up");
const btnAba = document.querySelector("#Down")

// Function and method
document.addEventListener("DOMContentLoaded", () => {
  // Event click - button
  btnReload.onclick = reloadPage;
  btnToggleTheme.onclick = toggleTheme;
  btnPlay.onclick = play;
  btnPause.onclick = pause;
  btnAba.onclick = aba;
  btnAum.onclick = aum;
  // Calling a function
  loadTheme();
  //Funcion resize
  window.addEventListener("resize", () => {
    img();
  });
});
