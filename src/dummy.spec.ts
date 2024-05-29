import { describe, it, expect,  } from 'vitest';

interface Carta {
  idFoto: number;
  estaVuelta: boolean;
  encontrada: boolean;
}

interface Tablero {
  cartas: Carta[];
  estadoPartida: string;
  indiceCartaVolteadaA?: number;
  indiceCartaVolteadaB?: number;
}

const generarNumeroAleatorio = (indiceDelArray: number) =>
  Math.floor(Math.random() * (indiceDelArray + 1));

const barajarCartas = (cartas: Carta[]): Carta[] => {
  const copiaCartas = [...cartas];
  for (let indice = copiaCartas.length - 1; indice > 0; indice--) {
    let indiceAleatorio = generarNumeroAleatorio(indice);
    [copiaCartas[indice], copiaCartas[indiceAleatorio]] = [
      copiaCartas[indiceAleatorio],
      copiaCartas[indice],
    ];
  }
  return copiaCartas;
};

const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number): boolean => {
  return !tablero.cartas[indice].estaVuelta && !tablero.cartas[indice].encontrada;
};

export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  tablero.cartas[indice].estaVuelta = true;
  if (tablero.estadoPartida === "CeroCartasLevantadas") {
    tablero.indiceCartaVolteadaA = indice;
    tablero.estadoPartida = "UnaCartaLevantada";
  } else if (tablero.estadoPartida === "UnaCartaLevantada") {
    tablero.indiceCartaVolteadaB = indice;
    tablero.estadoPartida = "DosCartasLevantadas";
  }
};

export const esVolteableLaCarta = (tablero: Tablero, indice: number): boolean => {
  return sePuedeVoltearLaCarta(tablero, indice);
};

export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
  return tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto;
};

export const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number): void => {
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;
  tablero.cartas[indiceA].estaVuelta = true;
  tablero.cartas[indiceB].estaVuelta = true;
  tablero.estadoPartida = "CeroCartasLevantadas";
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
};

export const parejaNoEncontrada = (tablero: Tablero, indiceA: number, indiceB: number): void => {
  tablero.cartas[indiceA].estaVuelta = false;
  tablero.cartas[indiceB].estaVuelta = false;
  tablero.estadoPartida = "CeroCartasLevantadas";
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
};

export const esPartidaCompleta = (tablero: Tablero): boolean => {
  const partidaCompleta = tablero.cartas.every(carta => carta.encontrada);
  if (partidaCompleta) {
    tablero.estadoPartida = "PartidaCompleta";
  }
  return partidaCompleta;
};

export const resetearTablero = (tablero: Tablero) => {
  tablero.cartas = tablero.cartas.map(carta => ({
    ...carta,
    estaVuelta: false,
    encontrada: false,
  }));
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
  tablero.estadoPartida = "CeroCartasLevantadas";
};

export const iniciaPartida = (tablero: Tablero): void => {
  const cartaBarajada = barajarCartas(tablero.cartas);
  tablero.cartas = [...cartaBarajada];
  tablero.estadoPartida = "CeroCartasLevantadas";
};

describe('Funciones del juego de cartas', () => {
  it('generarNumeroAleatorio genera un número entre 0 e indiceDelArray', () => {
    const maxIndex = 5;
    for (let i = 0; i < 100; i++) {
      const numero = generarNumeroAleatorio(maxIndex);
      expect(numero).toBeGreaterThanOrEqual(0);
      expect(numero).toBeLessThanOrEqual(maxIndex);
    }
  });

  it('barajarCartas mezcla las cartas', () => {
    const cartas: Carta[] = [
      { idFoto: 1, estaVuelta: false, encontrada: false },
      { idFoto: 2, estaVuelta: false, encontrada: false },
      { idFoto: 3, estaVuelta: false, encontrada: false },
    ];
    const cartasBarajadas = barajarCartas(cartas);
    expect(cartasBarajadas).toHaveLength(cartas.length);
    expect(cartasBarajadas).not.toEqual(cartas); // Muy improbable que sea igual
  });

  it('sePuedeVoltearLaCarta verifica correctamente si una carta se puede voltear', () => {
    const tablero: Tablero = {
      cartas: [
        { idFoto: 1, estaVuelta: false, encontrada: false },
        { idFoto: 2, estaVuelta: true, encontrada: false },
        { idFoto: 3, estaVuelta: false, encontrada: true },
      ],
      estadoPartida: "CeroCartasLevantadas",
    };
    expect(sePuedeVoltearLaCarta(tablero, 0)).toBe(true);
    expect(sePuedeVoltearLaCarta(tablero, 1)).toBe(false);
    expect(sePuedeVoltearLaCarta(tablero, 2)).toBe(false);
  });

  it('voltearLaCarta voltea la carta y actualiza el estado del tablero', () => {
    const tablero: Tablero = {
      cartas: [
        { idFoto: 1, estaVuelta: false, encontrada: false },
        { idFoto: 2, estaVuelta: false, encontrada: false },
      ],
      estadoPartida: "CeroCartasLevantadas",
    };
    voltearLaCarta(tablero, 0);
    expect(tablero.cartas[0].estaVuelta).toBe(true);
    expect(tablero.estadoPartida).toBe("UnaCartaLevantada");
    expect(tablero.indiceCartaVolteadaA).toBe(0);

    voltearLaCarta(tablero, 1);
    expect(tablero.cartas[1].estaVuelta).toBe(true);
    expect(tablero.estadoPartida).toBe("DosCartasLevantadas");
    expect(tablero.indiceCartaVolteadaB).toBe(1);
  });

  it('esVolteableLaCarta devuelve true si la carta puede voltear', () => {
    const tablero: Tablero = {
      cartas: [
        { idFoto: 1, estaVuelta: false, encontrada: false },
        { idFoto: 2, estaVuelta: true, encontrada: false },
      ],
      estadoPartida: "CeroCartasLevantadas",
    };
    expect(esVolteableLaCarta(tablero, 0)).toBe(true);
    expect(esVolteableLaCarta(tablero, 1)).toBe(false);
  });

  it('sonPareja verifica si dos cartas son pareja', () => {
    const tablero: Tablero = {
      cartas: [
        { idFoto: 1, estaVuelta: false, encontrada: false },
        { idFoto: 1, estaVuelta: false, encontrada: false },
        { idFoto: 2, estaVuelta: false, encontrada: false },
      ],
      estadoPartida: "CeroCartasLevantadas",
    };
    expect(sonPareja(0, 1, tablero)).toBe(true);
    expect(sonPareja(0, 2, tablero)).toBe(false);
  });

  it('parejaEncontrada marca las cartas como encontradas', () => {
    const tablero: Tablero = {
      cartas: [
        { idFoto: 1, estaVuelta: true, encontrada: false },
        { idFoto: 1, estaVuelta: true, encontrada: false },
      ],
      estadoPartida: "DosCartasLevantadas",
    };
    parejaEncontrada(tablero, 0, 1);
    expect(tablero.cartas[0].encontrada).toBe(true);
    expect(tablero.cartas[1].encontrada).toBe(true);
    expect(tablero.estadoPartida).toBe("CeroCartasLevantadas");
  });

  it('parejaNoEncontrada marca las cartas como no encontradas y las voltea de nuevo', () => {
    const tablero: Tablero = {
      cartas: [
        { idFoto: 1, estaVuelta: true, encontrada: false },
        { idFoto: 2, estaVuelta: true, encontrada: false },
      ],
      estadoPartida: "DosCartasLevantadas",
    };
    parejaNoEncontrada(tablero, 0, 1);
    expect(tablero.cartas[0].estaVuelta).toBe(false);
    expect(tablero.cartas[1].estaVuelta).toBe(false);
    expect(tablero.estadoPartida).toBe("CeroCartasLevantadas");
  });

  it('esPartidaCompleta devuelve true si todas las cartas han sido encontradas', () => {
    const tablero: Tablero = {
      cartas: [
        { idFoto: 1, estaVuelta: true, encontrada: true },
        { idFoto: 2, estaVuelta: true, encontrada: true },
      ],
      estadoPartida: "DosCartasLevantadas",
    };
    expect(esPartidaCompleta(tablero)).toBe(true);
    expect(tablero.estadoPartida).toBe("PartidaCompleta");

    const tableroIncompleto: Tablero = {
      cartas: [
        { idFoto: 1, estaVuelta: true, encontrada: true },
        { idFoto: 2, estaVuelta: false, encontrada: false },
      ],
      estadoPartida: "DosCartasLevantadas",
    };
    expect(esPartidaCompleta(tableroIncompleto)).toBe(false);
  });

  it('resetearTablero resetea el estado del tablero', () => {
    const tablero: Tablero = {
      cartas: [
        { idFoto: 1, estaVuelta: true, encontrada: true },
        { idFoto: 2, estaVuelta: true, encontrada: true },
      ],
      estadoPartida: "PartidaCompleta",
    };
    resetearTablero(tablero);
    tablero.cartas.forEach(carta => {
      expect(carta.estaVuelta).toBe(false);
      expect(carta.encontrada).toBe(false);
    });
    expect(tablero.estadoPartida).toBe("CeroCartasLevantadas");
  });

  it('iniciaPartida baraja las cartas y resetea el estado del tablero', () => {
    const cartas: Carta[] = [
      { idFoto: 1, estaVuelta: false, encontrada: false },
      { idFoto: 2, estaVuelta: false, encontrada: false },
      { idFoto: 3, estaVuelta: false, encontrada: false },
    ];
    const tablero: Tablero = {
      cartas: [...cartas],
      estadoPartida: "PartidaCompleta",
    };
    iniciaPartida(tablero);
    expect(tablero.cartas).not.toEqual(cartas); // Muy improbable que sea igual
    expect(tablero.estadoPartida).toBe("CeroCartasLevantadas");
  });
});