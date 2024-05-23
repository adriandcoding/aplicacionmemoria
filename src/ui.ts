
import { tablero } from "./model";
import { esVolteableLaCarta, iniciaPartida, voltearLaCarta } from "./motor";
export const crearTablero = () => {

    tablero.cartas.forEach((carta, index) => {
        changeImage(index)
    });
}
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
    
}

function changeImage(index: number) {
    const dataIndiceId = `[data-indice-id="${index}"]`
    const imgContainer = document.querySelector(`div${dataIndiceId}`);
    if (imgContainer && imgContainer instanceof HTMLDivElement) {
        imgContainer.addEventListener("click", () => {
            handlerDivCar(index)
        })
    }
}
export const handlerClickButton = () => {
    const startButton = document.getElementById("button");
    if (startButton && startButton instanceof HTMLButtonElement) {
        startButton.addEventListener("click", () => {
            clickStartButton();
        })
    }
};
const clickStartButton = () => {
    iniciaPartida(tablero);
};

