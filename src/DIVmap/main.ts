
export function vaciarTablero(): void {
  //barajarCartas
  const items = document.querySelectorAll('#imageContainer') as NodeListOf<HTMLDivElement>;
  (items.forEach)(item => {
    item.innerHTML = "";
     });
}

