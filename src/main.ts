import { toggleImage } from "./show card and rotate/main";

// Añade un evento de clic al botón
const toggle = document.querySelector(".image-show");
if (toggle) {
    toggle.addEventListener('click', toggleImage);
}