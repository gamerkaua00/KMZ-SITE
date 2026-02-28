// Menu Mobile
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Fechar menu ao clicar em um link
document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
    navLinks.classList.remove("active");
}));

// Efeito de scroll suave para links internos (caso o navegador não suporte nativamente)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
