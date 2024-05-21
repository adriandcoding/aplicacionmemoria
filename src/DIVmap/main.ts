interface InfoCarta {
  idFoto: number;
  imagen: string;
}

const imageMap: InfoCarta[] = [
  { idFoto: 1, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png" },
  { idFoto: 2, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png" },
  { idFoto: 3, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png" },
  { idFoto: 4, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png" },
  { idFoto: 5, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png" },
  { idFoto: 6, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png" },
  { idFoto: 1, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png" },
  { idFoto: 3, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png" },
  { idFoto: 4, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png" },
  { idFoto: 5, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png" },
  { idFoto: 6, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png" },
  { idFoto: 2, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png" },
  { idFoto: 2, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png" },
]

// Función para asignar imágenes a elementos con data-indice-id
export function assignImages(): void {
  const items = document.querySelectorAll('#imageContainer') as NodeListOf<HTMLDivElement>;
  (items.forEach)(item => {
    const indiceId = item.getAttribute('data-indice-id');
    if (indiceId && imageMap[Number(indiceId)]) {
      const img = document.createElement('img');
      img.src = imageMap[Number(indiceId)].imagen;
      img.alt = `Image for item ${indiceId}`;
      item.innerHTML = "";
      item.appendChild(img);
      img.width = 150;
      img.height = 150;
      img.alt = 'imagenes de animales';
    }

  });
}

