import { Carta, Tablero, cartas, } from "./model"

/*
En el motor nos va a hacer falta un método para barajar cartas
*/
const barajarCartas = (cartas: Carta[]): Carta[] => {
  //ordenar array de forma aleatoria
  const barajado:Carta[]=cartas.sort(() => {
    return Math.random() - 0.5;
   })
   return barajado;
}

  
  /*
    Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
  */
const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number): boolean => {
  // Check if the card is not already flipped
  if (!cartas[indice].estaVuelta) {
    // Count the number of flipped cards on the board
    let numVolteadas = cartas.filter((carta) => carta.estaVuelta).length;

    // Check if there are not already two flipped cards
    if (numVolteadas < 2) {
      return true;
    }
  }

  return false;
  }
  
  const voltearLaCarta = (tablero: Tablero, indice: number) : void => {
    const voltearLaCarta = (tablero: Tablero, indice: number): void => {
      // Check if the card is not already flipped
      if (!cartas[indice].estaVuelta) {
        // Flip the card by setting the volteada property to true
        cartas[indice].estaVuelta = true;
      }
    }
  }
  
  /*
    Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
  */
  export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
  // Get the ids of the cards at the specified indices
  const idA = cartas[indiceA].idFoto;
  const idB = cartas[indiceB].idFoto;

  // Check if the ids are the same
  return idA === idB;
  }
  
  /*
    Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
  */
  const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number) : void => {
    //...
  }
  
  /*
    Aquí asumimos que no son pareja y las volvemos a poner boca abajo
  */
  const parejaNoEncontrada = (tablero: Tablero, indiceA :number, indiceB : number) : void => {
    // ...
  }
  
  /*
    Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
  */
  export const esPartidaCompleta=(tablero: Tablero) : boolean => {
    //...
  }
  
  /*
  Iniciar partida
  */
  
  export const iniciaPartida = (tablero: Tablero): void => {
    //...
  };