export function toggleImage(): void {
    const image = document.querySelector(".image-show")
    if (image) {
        // Alterna la clase 'hidden' para mostrar/ocultar la imagen
        image.classList.toggle('hidden');
    }
   
}

