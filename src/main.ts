import { changeImage,changeImage2 } from "./show card and rotate/main";

// Añade un evento de clic al botón
const toggle = document.querySelector(".image-container");
if (toggle) {
    toggle.addEventListener('click', changeImage);
}
const toggle2 = document.querySelector(".image-container2");
if (toggle2) {
    toggle2.addEventListener('click', changeImage2);
}