import { arrayShuffle } from "../shuffle array/main";

// Función para asignar imágenes a elementos con data-indice-id
export function assignImages():void {
  const items = document.querySelectorAll('#imageContainer') as NodeListOf<HTMLDivElement>;
  (items.forEach)(item => {
    item.innerHTML = "";
     });
}

