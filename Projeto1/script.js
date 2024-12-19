document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link"); // Seleciona todos os botões do menu
    const sections = document.querySelectorAll(".content-section"); // Seleciona todas as seções

    // Adiciona evento de clique nos links de navegação
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Remove a classe 'active' de todos os links e seções
            navLinks.forEach(item => item.classList.remove("active"));
            sections.forEach(section => section.classList.remove("active"));

            // Adiciona 'active' apenas no link e na seção correspondente
            link.classList.add("active");
            const targetSection = document.getElementById(link.getAttribute("data-target"));
            targetSection.classList.add("active");
        });
    });
});
