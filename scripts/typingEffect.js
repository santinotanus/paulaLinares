const text = "Psicóloga General Sanitaria";
let index = 0;
const titleElement = document.getElementById("dynamic-title");

function type() {
    if (index < text.length) {
        titleElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100); // Ajusta la velocidad aquí
    }
}

window.onload = type; // Inicia el efecto al cargar la página