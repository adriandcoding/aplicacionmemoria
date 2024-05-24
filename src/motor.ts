

import { Carta, Tablero,} from "./model"

/*
En el motor nos va a hacer falta un método para barajar cartas
*/
const generarNumeroAleatorio = (indiceDelArray: number) =>
  Math.floor(Math.random() * (indiceDelArray + 1));
const barajarCartas = (cartas: Carta[]): Carta[] => {
  const copiaCartas = [...cartas];
  for (let indice = copiaCartas.length - 1; indice > 0; indice--) {
    let indiceAleatorio = generarNumeroAleatorio(indice);
    [{ ...copiaCartas[indice] }, { ...copiaCartas[indiceAleatorio] }] = [
      copiaCartas[indiceAleatorio],
      copiaCartas[indice],
    ];
  }
  return copiaCartas;
};

/*
  Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
*/
const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number): boolean => {
  if (!tablero.cartas[indice].estaVuelta && !tablero.cartas[indice].encontrada) {
    return true
  } else {
    return false;
  }
}

export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  tablero.cartas[indice].estaVuelta = true;
  if (tablero.estadoPartida === "CeroCartasLevantadas") {
    tablero.indiceCartaVolteadaA = indice;
    tablero.estadoPartida = "UnaCartaLevantada";
  } else if (tablero.estadoPartida === "UnaCartaLevantada") {
    tablero.indiceCartaVolteadaB = indice;
    tablero.estadoPartida = "DosCartasLevantadas";
  }
}
export const esVolteableLaCarta = (tablero: Tablero, indice: number): boolean => {
  return sePuedeVoltearLaCarta(tablero, indice);
}
/*
  Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id de imagen
*/
export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {

  const idA = tablero.cartas[indiceA].idFoto;
  const idB = tablero.cartas[indiceB].idFoto;

  return idA === idB;
}
/*
  Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
*/
export const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number): void => {
  //desde ui, comprobar que no son undefined, luego invocamos a son pareja y le pasamos los indices

  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;
  tablero.cartas[indiceA].estaVuelta = true;
  tablero.cartas[indiceB].estaVuelta = true;
  tablero.estadoPartida = "CeroCartasLevantadas";
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
}

/*
  Aquí asumimos que no son pareja y las volvemos a poner boca abajo
*/
export const parejaNoEncontrada = (tablero: Tablero, indiceA: number, indiceB: number): void => {

  tablero.cartas[indiceA].encontrada = false;
  tablero.cartas[indiceB].encontrada = false;
  tablero.cartas[indiceA].estaVuelta = false;
  tablero.cartas[indiceB].estaVuelta = false;
  tablero.estadoPartida = "CeroCartasLevantadas";
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
}


/*
  Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
*/
export const esPartidaCompleta = (tablero: Tablero): boolean => {
  return tablero.cartas.every((carta) => carta.encontrada);
  tablero.estadoPartida = "PartidaCompleta"
}

/*
Iniciar partida
*/

export const iniciaPartida = (tablero: Tablero,): void => {
  const cartaBarajada = barajarCartas(tablero.cartas);
  tablero.cartas = [...cartaBarajada];
  tablero.estadoPartida = "CeroCartasLevantadas";
};

/* una vez dada vueltas a dos cartas comprobar si son pareja,*/