/*Prueba de concepto 5 - Mapear el DIV que contiene la carta con la posición del array de las cartas
Lo que queremos hacer en esta prueba de concepto es mapear el div que contiene la carta con la posición del array de las cartas, es decir, si el usuario pincha en la primera carta, queremos saber que es la primera carta del array de cartas.

¿Cómo lo hacemos?

Vamos a crear un array de cartas.
El array va a tener 2 cartas de cada foto.
Vamos a crear un div por cada carta.
A cada div le vamos a poner un atributo
con el indice del array de cartas que le corresponde.
Vamos a escuchar al evento click de los divs.
Dentro de cada div vamos a tener una imagen, y vamos a cambiar el src de la imagen.
Para hacer esto dentro de cada imagen vamos a tener un atributo  que va a tener el mismo índice que el div que la contiene.
Cuando el usuario pinche en el primer div, vamos a leer el atributo data-indice-id y vamos a saber que es la primera carta del array de cartas y mostraremos la imagen correspondiente.
Para hacer esto podemos crear una interfaz que nos ayude a tipar el array de cartas:

interface InfoCarta {
  idFoto: number;
  imagen: string;
}
Y luego crear un array de cartas que contenga la información de varias cartas, tampoco hace falta que sean muchas, con 2 o 3 cartas nos vale, ten en cuenta que luego van a ir repetidas.*/

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

/* Definir un mapa de imágenes asociadas a cada índice
const imageMap: { [key: string]: string } = {
  '1': 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Image1',
  '2': 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Image2',
  '3': 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Image3'
};*/

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

