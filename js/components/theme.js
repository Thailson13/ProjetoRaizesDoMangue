export function toggleTheme() {
  const currentTheme = document.body.dataset.tema;
  const checkboxTheme = document.querySelector("#checkboxTheme");
  const newTheme = currentTheme === "light-mode" ? "dark-mode" : "light-mode";
  document.body.dataset.tema = newTheme;
  const newButton =
    newTheme === "light-mode"
      ? (checkboxTheme.checked = false)
      : (checkboxTheme.checked = true);
  localStorage["button"] = newButton;
  localStorage["theme"] = newTheme;
}

export function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  const savedButton = localStorage.getItem("button");
  let checkboxThemeLoad = document.querySelector("#checkboxTheme");

  if (savedTheme) {
    document.body.dataset.tema = savedTheme;
  } else {
    document.body.dataset.tema = "light-mode";
    checkboxThemeLoad.checked = false;
  }

  if (savedButton == "true") {
    checkboxThemeLoad.checked = true;
  } else {
    checkboxThemeLoad.checked = false;
  }
}
