function requestQuote(product) {
    const baseUrl = "https://www.youtube.com/?app=desktop&hl=pt"; // Substitua pelo URL externo desejado
    const url = baseUrl + encodeURIComponent(product);
    window.location.href = url;
}

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    burger.classList.toggle('toggle');
});


let slideIndex = 0;

function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
}


function changeSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
});

function requestQuote(product) {
    alert(`Orçamento solicitado para: ${product}`);
}

function submitForm(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
}



function submitForm(event) {
    event.preventDefault();
    alert("Formulário enviado com sucesso!");
    document.getElementById("contact-form").reset();
}


function submitForm(event) {
    event.preventDefault();
    alert("Formulário enviado com sucesso!");
    document.getElementById("contact-form").reset();
}



function requestQuote(product) {
    const baseUrl = "https://www.youtube.com/?app=desktop&hl=pt"; // Substitua pelo URL externo desejado
    const url = baseUrl + encodeURIComponent(product);
    window.location.href = url;
}


