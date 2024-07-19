// Seleciona o elemento com a classe 'burger' para o menu hambúrguer
const burger = document.querySelector('.burger');

// Seleciona o elemento com a classe 'nav-links' para os links de navegação
const nav = document.querySelector('.nav-links');

// Seleciona todos os elementos 'li' dentro do elemento com a classe 'nav-links'
const navLinks = document.querySelectorAll('.nav-links li');

// Adiciona um evento de clique ao elemento 'burger'
burger.addEventListener('click', () => {
    // Alterna a classe 'nav-active' no elemento 'nav'
    nav.classList.toggle('nav-active');

    // Anima cada link de navegação
    navLinks.forEach((link, index) => {
        // Se o link já tem uma animação, remove-a
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            // Define uma nova animação para o link
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Alterna a classe 'toggle' no elemento 'burger'
    burger.classList.toggle('toggle');
});

// Variável para manter o índice do slide atual
let slideIndex = 0;

// Função para mostrar os slides
function showSlides(n) {
    // Seleciona todos os elementos com a classe 'slide'
    const slides = document.querySelectorAll('.slide');
    // Se o índice for maior ou igual ao número de slides, redefine para 0
    if (n >= slides.length) { slideIndex = 0; }
    // Se o índice for menor que 0, redefine para o último slide
    if (n < 0) { slideIndex = slides.length - 1; }
    // Exibe o slide atual e esconde os demais
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
}

// Função para alterar o slide
function changeSlide(n) {
    // Incrementa o índice do slide
    slideIndex += n;
    // Mostra o slide atualizado
    showSlides(slideIndex);
}

// Adiciona um evento para carregar os slides quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
});

// Função para solicitar orçamento de um produto
function requestQuote(product) {
    const baseUrl = "https://wa.me/message/6GORYHNEROUJL1"; // Substitua pelo URL externo desejado
    const url = `${baseUrl}?text=${encodeURIComponent(`Orçamento solicitado para: ${product}`)}`;
    // Redireciona para a URL com o produto codificado
    window.location.href = url;
}

// Função para enviar o formulário e redefini-lo
function submitForm(event) {
    // Previne o envio padrão do formulário
    event.preventDefault();
    // Exibe um alerta de sucesso
    alert("Formulário enviado com sucesso!");
    // Redefine o formulário
    document.getElementById("contact-form").reset();
}
