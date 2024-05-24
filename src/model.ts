export interface Carta {
  idFoto: number; // id del 1 al 6 para 12 cartas, así identificamos rápido si es un gatito ,un perrito...
  // el ID se repete 2 veces en el array de cartas (hay dos cartas de un perro, hay dos cartas de un gato)
  imagen: string; // por comodidad repetimos la url de la imagen
  estaVuelta: boolean;
  encontrada: boolean;
}

interface InfoCarta {
  idFoto: number;
  imagen: string;
}

const infoCartas: InfoCarta[] = [
  {
    idFoto: 0,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
  },
  {
    idFoto: 1,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
  },
  {
    idFoto: 2,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
  },
  {
    idFoto: 3,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png",
  },
  {
    idFoto: 4,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png",
  },
  {
    idFoto: 5,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png",
  },
];

const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
  idFoto,
  imagen,
  estaVuelta: false,
  encontrada: false,
});

const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): Carta[] => {
  const newArray = infoCartas.map((infoCarta) =>
    crearCartaInicial(infoCarta.idFoto, infoCarta.imagen)
  );
  return [...newArray, ...newArray];
};

export let cartas: Carta[] = crearColeccionDeCartasInicial(infoCartas);
console.log(cartas);
/*
  Aquí definimos el tipo de estado de la partida, la idea es que cuando empiece la partida todas las cartas estén boca abajo y si se hacen click sobre ellas no se volteen.
  EstadoPartida = "PartidaNoIniciada", una vez que se pulse Iniciar partida el estado de la partida cambiaría a "CeroCartasLevantadas" y así sucesivamente.
*/

type EstadoPartida =
  | "PartidaNoIniciada"
  | "CeroCartasLevantadas"
  | "UnaCartaLevantada"
  | "DosCartasLevantadas"
  | "PartidaCompleta";

export interface Tablero {
  cartas: Carta[];
  estadoPartida: EstadoPartida;
  indiceCartaVolteadaA?: number;
  indiceCartaVolteadaB?: number;
}

export const crearTableroInicial = (): Tablero => ({
  cartas: cartas,
  estadoPartida: "PartidaNoIniciada",
});

export let tablero: Tablero = crearTableroInicial();
