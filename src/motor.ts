import { Carta, Tablero, cartas, } from "./model"

/*
En el motor nos va a hacer falta un método para barajar cartas
*/
const barajarCartas = (cartas: Carta[]): Carta[] => {

  const barajado: Carta[] = cartas.sort(() => {
    return Math.random() - 0.5;
  })
  return barajado;
}


/*
  Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
*/
const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number): boolean => {

  if (!cartas[indice].estaVuelta) {

    let numVolteadas = cartas.filter((carta) => carta.estaVuelta).length;
    if (numVolteadas < 2) {
      return true;
    }
  }

  return false;
}

const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  const voltearLaCarta = (tablero: Tablero, indice: number): void => {

    if (!cartas[indice].estaVuelta) {

      cartas[indice].estaVuelta = true;
    }
  }
}

/*
  Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
*/
export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {

  const idA = cartas[indiceA].idFoto;
  const idB = cartas[indiceB].idFoto;

  return idA === idB;
}

/*
  Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
*/
const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number): void => {

  cartas[indiceA].encontrada = true;
  cartas[indiceB].encontrada = true;

  const juegoCompleto = cartas.every((carta) => carta.encontrada);

  if (juegoCompleto) {
    alert("YOU WIN!!!")
  }
}

/*
  Aquí asumimos que no son pareja y las volvemos a poner boca abajo
*/
const parejaNoEncontrada = (tablero: Tablero, indiceA: number, indiceB: number): void => {

  cartas[indiceA].estaVuelta = false;
  cartas[indiceB].estaVuelta = false;
}

/*
  Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
*/
export const esPartidaCompleta = (tablero: Tablero): boolean => {

  return cartas.every((carta) => carta.encontrada);
}

/*
Iniciar partida
*/

export const iniciaPartida = (tablero: Tablero): void => {
  cartas.forEach((carta) => {
    carta.estaVuelta = false;
    carta.encontrada = false;
  });
  barajarCartas(cartas)



};