

import { arrayShuffle } from "./shuffle array/main";
export const pintarImagen = () => {
  const imageContainers = document.querySelectorAll("[data-indice-id]");
  imageContainers.forEach((container, index) => {
    container.addEventListener('click', () => changeImage(index));
  });
}

function changeImage(index: number) {
  const imgContainer = document.querySelector(`[data-indice-id="${index}"]`);
  if (imgContainer) {
    const indiceId = imgContainer.getAttribute("data-indice-id");
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
