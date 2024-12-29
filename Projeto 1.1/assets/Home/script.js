// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link"); // Seleciona todos os links de navegação do menu
    const sections = document.querySelectorAll(".content-section"); // Seleciona todas as seções de conteúdo

    // Adiciona um evento de clique a cada link de navegação
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Evita o comportamento padrão do link (navegar para outra página)

            // Remove a classe 'active' de todos os links e seções
            navLinks.forEach(item => item.classList.remove("active"));
            sections.forEach(section => section.classList.remove("active"));

            // Adiciona a classe 'active' no link clicado e na seção correspondente
            link.classList.add("active");
            const targetSection = document.getElementById(link.getAttribute("data-target")); // Obtém a seção alvo pelo atributo data-target do link
            targetSection.classList.add("active");
        });
    });
});

// Função para exibir uma seção específica com base no ID
function showSection(id) {
    const sections = document.querySelectorAll('section'); // Seleciona todas as seções da página
    sections.forEach(section => section.classList.add('hidden')); // Adiciona a classe 'hidden' a todas as seções, escondendo-as
    document.getElementById(id).classList.remove('hidden'); // Remove a classe 'hidden' da seção correspondente ao ID passado, exibindo-a

    const links = document.querySelectorAll('nav a'); // Seleciona todos os links de navegação
    links.forEach(link => link.classList.remove('active')); // Remove a classe 'active' de todos os links
    document.querySelector(`nav a[href='#${id}']`).classList.add('active'); // Adiciona a classe 'active' ao link correspondente à seção exibida
}
