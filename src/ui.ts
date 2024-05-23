
import { tablero } from "./model";
import { esVolteableLaCarta, iniciaPartida, voltearLaCarta,} from "./motor";

//serie de acciones dependiendo de si la carta es volteable
const handlerDivCar = (indexCard: number) => {
    const dataIndiceId = `[data-indice-id="${indexCard}"]`
    const imgElement = document.querySelector(`img${dataIndiceId}`);
    if (imgElement && imgElement instanceof HTMLImageElement) {
        if (esVolteableLaCarta(tablero, indexCard)) {
            voltearLaCarta(tablero, indexCard);
            darleLaVueltaALaCarta(indexCard);
        } else {
            console.log("no se  puede voltear la carta")
        }
    }
};
//funcion para cuando haces click en los divs empieze a voltear cartas
const changeImage = (index: number) => {
    const dataIndiceId = `[data-indice-id="${index}"]`
    const imgContainer = document.querySelector(`div${dataIndiceId}`);
    if (imgContainer && imgContainer instanceof HTMLDivElement) {
        imgContainer.addEventListener("click", () => {
            handlerDivCar(index)
        })
    }
}

//función para cambiar el valor del div y pasarle un src
const darleLaVueltaALaCarta = (index: number) => {
    const dataIndiceId = `[data-indice-id="${index}"]`
    const imgElement = document.querySelector(`img${dataIndiceId}`);
    if (imgElement && imgElement instanceof HTMLImageElement) {
        const urlImagen = tablero.cartas[index].imagen;
        imgElement.width = 150;
        imgElement.height = 150;
        imgElement.src = urlImagen;
    }
}
// da funcionalidad en los divs al iniciar partida
export const crearTablero = () => {
    tablero.cartas.forEach((carta, index) => {
        changeImage(index)
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


