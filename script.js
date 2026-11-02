
// MENU PARA CELULARES

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", function () {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});


// FECHAR MENU AO CLICAR EM UM LINK

const links = document.querySelectorAll(".nav a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        nav.classList.remove("active");
        menuToggle.textContent = "☰";

    });

});


// ATUALIZAR ANO AUTOMATICAMENTE

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
