export function changeImage(): void {
    const imgContainer=document.querySelector(".image-container")
    if (imgContainer) {
       // Crea un elemento de imagen
    const img = document.createElement('img');
    
    // Establece la URL de la imagen
    img.src ="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png" 
    
    // Establece atributos opcionales como el ancho, el alto y el texto alternativo
    img.width = 150;
    img.height = 150;
    img.alt = '';

    // Limpia cualquier contenido previo en el contenedor
    imgContainer.innerHTML = '';
    
    // Añade la imagen al contenedor
    imgContainer.appendChild(img);
    }
   
}
export function changeImage2(): void {
    const imgContainer=document.querySelector(".image-container2")
    if (imgContainer) {
       // Crea un elemento de imagen
    const img = document.createElement('img');
    
    // Establece la URL de la imagen
    img.src ="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png" 
    
    // Establece atributos opcionales como el ancho, el alto y el texto alternativo
    img.width = 150;
    img.height = 150;
    img.alt = '';

    // Limpia cualquier contenido previo en el contenedor
    imgContainer.innerHTML = '';
    
    // Añade la imagen al contenedor
    imgContainer.appendChild(img);
    }
   
}



