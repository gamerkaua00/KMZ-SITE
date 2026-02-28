document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    // Abrir/Fechar Menu Mobile
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active"); // Adiciona classe para animação do ícone
    });

    // Fechar menu ao clicar em um link (para não ficar aberto na tela)
    document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
    }));

    // Scroll Suave (Fallout para navegadores antigos)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
