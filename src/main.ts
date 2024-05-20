import { changeImage,changeImage2 } from "./show card and rotate/main";

// Añade un evento de clic al botón
const showCard = document.querySelector(".image-container1");
if (showCard) {
    showCard.addEventListener('click', changeImage);
}
const showCard2 = document.querySelector(".image-container2");
if (showCard2) {
    showCard2.addEventListener('click', changeImage2);
}