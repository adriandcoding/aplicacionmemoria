
import { Tablero, tablero,Carta } from "./model";
import { esVolteableLaCarta, iniciaPartida, voltearLaCarta, sonPareja, parejaEncontrada,parejaNoEncontrada, } from "./motor";
//función para cambiar el valor del div y pasarle un src
const mostrarImagenAnimal = (indexCard: number) => {
    const dataIndiceId = `[data-indice-id="${indexCard}"]`
    const imgElement = document.querySelector(`img${dataIndiceId}`);
    if (imgElement && imgElement instanceof HTMLImageElement) {
        const urlImagen = tablero.cartas[indexCard].imagen;
        imgElement.width = 150;
        imgElement.height = 150;
        imgElement.src = urlImagen;
    }
}
//serie de acciones dependiendo de si la carta es volteable
const handlerDivCar = (indexCard: number) => {
    const dataIndiceId = `[data-indice-id="${indexCard}"]`
    const imgElement = document.querySelector(`img${dataIndiceId}`);
    if (imgElement && imgElement instanceof HTMLImageElement) {
        if (esVolteableLaCarta(tablero, indexCard)) {
            voltearLaCarta(tablero, indexCard);
            mostrarImagenAnimal(indexCard);
            mirarSiEsLaSegundaCarta(tablero);
        } else {
           console.log("no es volteable")
        }
    }
};

const mirarSiEsLaSegundaCarta = (tablero: Tablero) => {
    const indiceCartaA = tablero.indiceCartaVolteadaA;
    const indiceCartaB = tablero.indiceCartaVolteadaB;
    if (indiceCartaA !== undefined && indiceCartaB !== undefined) {
        if (sonPareja(indiceCartaA, indiceCartaB, tablero)) {
            parejaEncontrada(tablero, indiceCartaA, indiceCartaB);
        } else {
            parejaNoEncontrada(tablero, indiceCartaA, indiceCartaB);
            voltearLasCartasQueNoSonPareja(tablero.cartas);
        }
    } 
    console.log(tablero)
}
const voltearLasCartasQueNoSonPareja = (cartas: Carta[]) => {
    setTimeout(() => {
        ponerImagenBocaAbajo(cartas);
        },1000)
}
const ponerImagenBocaAbajo = (cartas: Carta[]) => {
    cartas.forEach((carta, indice) => {
        console.log(carta.imagen);
        if(!cartas[indice].encontrada && !cartas[indice].encontrada)
        darleLaVueltaALaCarta(indice);
        })
    }
const darleLaVueltaALaCarta = (indexCard: number) => {
    const dataIndiceId = `[data-indice-id="${indexCard}"]`
    const imgElement = document.querySelector(`img${dataIndiceId}`);
    if (imgElement && imgElement instanceof HTMLImageElement) {
        imgElement.src = "";
        imgElement.style.backgroundColor = "rgb(101, 202, 245)"
        imgElement.style.borderRadius = "25px"
    }
}
//funcion para cuando haces click en los divs empieze a voltear cartas
const changeImage = (indexCard: number) => {
    const dataIndiceId = `[data-indice-id="${indexCard}"]`
    const imgContainer = document.querySelector(`div${dataIndiceId}`);
    if (imgContainer && imgContainer instanceof HTMLDivElement) {
        imgContainer.addEventListener("click", () => {
            handlerDivCar(indexCard)
        })
    }
}

// da funcionalidad en los divs al iniciar partida
export const crearTablero = () => {
    tablero.cartas.forEach((carta, indexCard) => {
        console.log(carta.imagen);
        changeImage(indexCard)
    });
}
//inicia partida con el array de cartas ya barajado
const clickStartButton = () => {
    iniciaPartida(tablero);

}
//función para el click del START
export const handlerClickButton = () => {
    const startButton = document.getElementById("button");
    if (startButton && startButton instanceof HTMLButtonElement) {
        startButton.addEventListener("click", () => {
            clickStartButton();
        })
    }
};


