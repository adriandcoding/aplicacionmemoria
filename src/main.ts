import { changeImage, changeImage2 } from "./show card and rotate/main";
import { assignImages, } from "./DIVmap/main";


// Añade un evento de clic al botón
const showCard = document.querySelector(".image-container1");
if (showCard && showCard instanceof HTMLDivElement) {
    showCard.addEventListener('click',changeImage);
}
const showCard2 = document.querySelector(".image-container2");
if (showCard2 && showCard instanceof HTMLDivElement) {
    showCard2.addEventListener('click', changeImage2);
}
// Añadir un evento de clic al botón para asignar las imágenes
const assignImagesButton = document.getElementById('button');
if (assignImagesButton && assignImagesButton instanceof HTMLButtonElement) {
  assignImagesButton.addEventListener('click', assignImages);
}


