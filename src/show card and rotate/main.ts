import { arrayShuffle } from "../shuffle array/main";
export function changeImage(): void {
    const imgContainer=document.querySelector(".image-container1")
    if (imgContainer) {
const indiceId=imgContainer.getAttribute("data-indice-id");
if (indiceId && arrayShuffle[Number(indiceId)]) {
    const img = document.createElement('img');
    img.src = arrayShuffle[Number(indiceId)].imagen;
    img.alt = `Image for item ${indiceId}`;
    imgContainer.innerHTML = "";
    imgContainer.appendChild(img);
    img.width = 150;
    img.height = 150;
    img.alt = 'imagenes de animales';
  }
    }
    
   
}
export function changeImage2(): void {
    const imgContainer=document.querySelector(".image-container2")
    if (imgContainer) {
const indiceId=imgContainer.getAttribute("data-indice-id");
if (indiceId && arrayShuffle[Number(indiceId)]) {
    const img = document.createElement('img');
    img.src = arrayShuffle[Number(indiceId)].imagen;
    img.alt = `Image for item ${indiceId}`;
    imgContainer.innerHTML = "";
    imgContainer.appendChild(img);
    img.width = 150;
    img.height = 150;
    img.alt = 'imagenes de animales';
  }
    }
    
   
}



