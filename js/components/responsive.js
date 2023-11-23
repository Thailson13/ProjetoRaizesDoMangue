const element = document.querySelector(".my-element");

export function responsiveDropdown() {
  const dropdowns = document.querySelectorAll(".dropdown-menu");
  dropdowns.forEach((dropdown) => {
    if (element.getAttribute("aria-expanded") === "true") {
      dropdown.classList.remove("dropdown-menu-end");
      dropdown.classList.add("dropdown-menu-start");
    } else {
      dropdown.classList.remove("dropdown-menu-start");
      dropdown.classList.add("dropdown-menu-end");
    }
  });
}

export function responsive() {
  const screenWidth = window.innerWidth;
  const responsives = document.querySelector(".responsive");
      if (screenWidth < 719) {
        responsives.classList.add("w-75");
      } else {
        responsives.classList.remove("w-75"); 
      }
}

export function onResize() {
  document.addEventListener("resize", responsive());
}