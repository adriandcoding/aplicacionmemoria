import { arrayShuffle } from "../shuffle array/main";

// Función para asignar imágenes a elementos con data-indice-id
export function assignImages():void {
  const items = document.querySelectorAll('#imageContainer') as NodeListOf<HTMLDivElement>;
  (items.forEach)(item => {
    const indiceId = item.getAttribute('data-indice-id');
    if (indiceId && arrayShuffle[Number(indiceId)]) {
      const img = document.createElement('img');
      img.src = arrayShuffle[Number(indiceId)].imagen;
      img.alt = `Image for item ${indiceId}`;
      item.innerHTML = "";
      item.appendChild(img);
      img.width = 150;
      img.height = 150;
      img.alt = 'imagenes de animales';
    }

  });
}

