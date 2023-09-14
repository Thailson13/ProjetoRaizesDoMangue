export function img() {
  let width = window.innerWidth;
  const imgF = document.querySelector("#firstIMG");
  if (width < 600) {
    imgF.classList.remove("w-75");
    imgF.classList.add("w-100");
  }
  if (width > 600) {
    imgF.classList.remove("w-100");
    imgF.classList.add("w-75");
  }
}
