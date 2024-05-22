
export function vaciarTablero():void {
  const items = document.querySelectorAll('#imageContainer') as NodeListOf<HTMLDivElement>;
  (items.forEach)(item => {
    item.innerHTML = "";
     });
}

