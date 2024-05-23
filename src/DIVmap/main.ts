import { cartas } from './../model';
import { barajarCartas, } from "../motor";
export function vaciarTablero(): void {
  barajarCartas(cartas)
  const items = document.querySelectorAll('#imageContainer') as NodeListOf<HTMLDivElement>;
  (items.forEach)(item => {
    item.innerHTML = "";
     });
}

