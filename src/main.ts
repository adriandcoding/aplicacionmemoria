import {
  changeImage1, changeImage2,
  changeImage3,
  changeImage4,
  changeImage5,
  changeImage6,
  changeImage7,
  changeImage8,
  changeImage9,
  changeImage10,
  changeImage11,
  changeImage12,

} from "./show card and rotate/main";
import { assignImages, } from "./DIVmap/main";


// Añade un evento de clic al botón
const showCard = document.querySelector(".image-container1");
if (showCard && showCard instanceof HTMLDivElement) {
    showCard.addEventListener('click',changeImage1);
}
const showCard2 = document.querySelector(".image-container2");
if (showCard2 && showCard2 instanceof HTMLDivElement) {
    showCard2.addEventListener('click', changeImage2);
}
const showCard3 = document.querySelector(".image-container3");
if (showCard3 && showCard3 instanceof HTMLDivElement) {
    showCard3.addEventListener('click', changeImage3);
}
const showCard4 = document.querySelector(".image-container4");
if (showCard4 && showCard4 instanceof HTMLDivElement) {
    showCard4.addEventListener('click', changeImage4);
}
const showCard5 = document.querySelector(".image-container5");
if (showCard5 && showCard5 instanceof HTMLDivElement) {
    showCard5.addEventListener('click', changeImage5);
}
const showCard6 = document.querySelector(".image-container6");
if (showCard6 && showCard6 instanceof HTMLDivElement) {
    showCard6.addEventListener('click', changeImage6);
}
const showCard7 = document.querySelector(".image-container7");
if (showCard7 && showCard7 instanceof HTMLDivElement) {
    showCard7.addEventListener('click', changeImage7);
}
const showCard8 = document.querySelector(".image-container8");
if (showCard8 && showCard8 instanceof HTMLDivElement) {
    showCard8.addEventListener('click', changeImage8);
}
const showCard9 = document.querySelector(".image-container9");
if (showCard9 && showCard9 instanceof HTMLDivElement) {
    showCard9.addEventListener('click', changeImage9);
}
const showCard10 = document.querySelector(".image-container10");
if (showCard10 && showCard10 instanceof HTMLDivElement) {
    showCard10.addEventListener('click', changeImage10);
}
const showCard11 = document.querySelector(".image-container11");
if (showCard11 && showCard instanceof HTMLDivElement) {
    showCard11.addEventListener('click', changeImage11);
}
const showCard12 = document.querySelector(".image-container12");
if (showCard12 && showCard12 instanceof HTMLDivElement) {
    showCard12.addEventListener('click', changeImage12);
}
// Añadir un evento de clic al botón para asignar las imágenes
const assignImagesButton = document.getElementById('button');
if (assignImagesButton && assignImagesButton instanceof HTMLButtonElement) {
  assignImagesButton.addEventListener('click', assignImages);
}


