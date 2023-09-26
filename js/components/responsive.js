export function responsive() {
  const screenWidth = window.innerWidth;
  const texts = document.querySelectorAll(".removeW75");
  const imgs = document.querySelectorAll(".addW100");

  texts.forEach((text) => {
    if (screenWidth < 576) {
      text.classList.remove("w-75");
    } else {
      text.classList.add("w-75");
    }

    if (screenWidth < 768) {
      text.classList.remove("w-75");
    } else {
      text.classList.add("w-75");
    }
  });

  imgs.forEach((img) => {
    if (screenWidth < 576) {
      img.classList.add("w-100");
    } else {
      img.classList.remove("w-100");
    }

    if (screenWidth < 768) {
      img.classList.add("w-100");
    } else {
      img.classList.remove("w-100");
    }
  });
}

export function onResize() {
  document.addEventListener("resize", responsive());
}
