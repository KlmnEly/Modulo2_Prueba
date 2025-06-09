const elemento = document.getElementById('arrow');
window.onscroll = function () {
    elemento.style.display = window.scrollY > 100 ? "none" : "block";
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}