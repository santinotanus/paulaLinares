document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");

    hamburgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", (event) => {
        if (!hamburgerMenu.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove("active");
        }
    });
});