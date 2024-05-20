import { changeImage } from "./show card and rotate/main";

// Añade un evento de clic al botón
const toggle = document.querySelector(".image-container");
if (toggle) {
    toggle.addEventListener('click', changeImage);
}