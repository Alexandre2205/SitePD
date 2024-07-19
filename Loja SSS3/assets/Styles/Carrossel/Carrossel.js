// Seleciona o contêiner do carrossel de texto e seus itens
const textCarouselContent = document.querySelector('.text-carousel-content');
const textItems = document.querySelectorAll('.text-carousel-item');

// Seleciona os botões de controle do carrossel e os indicadores
const textNextButton = document.querySelector('.text-carousel-control.next');
const textPrevButton = document.querySelector('.text-carousel-control.prev');
const textIndicators = document.querySelectorAll('.text-carousel-indicator');

// Variável para controlar o índice do item atual no carrossel
let textCurrentIndex = 0;

// Função para atualizar a visualização do carrossel
function updateTextCarousel() {
    // Remove a classe 'active' de todos os itens e adiciona ao item correto
    textItems.forEach((item, index) => {
        item.classList.remove('active');
        if (index === textCurrentIndex) {
            item.classList.add('active');
        }
    });

    // Atualiza os indicadores para refletir o item atual
    textIndicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === textCurrentIndex);
    });
}

// Event listener para o botão 'Próximo'
textNextButton.addEventListener('click', () => {
    textCurrentIndex = (textCurrentIndex + 1) % textItems.length; // Calcula o próximo índice
    updateTextCarousel(); // Atualiza o carrossel com o novo índice
});

// Event listener para o botão 'Anterior'
textPrevButton.addEventListener('click', () => {
    textCurrentIndex = (textCurrentIndex - 1 + textItems.length) % textItems.length; // Calcula o índice anterior
    updateTextCarousel(); // Atualiza o carrossel com o novo índice
});

// Event listener para os indicadores
textIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        textCurrentIndex = index; // Define o índice com base no indicador clicado
        updateTextCarousel(); // Atualiza o carrossel com o novo índice
    });
});

// Slide automático do carrossel a cada 5 segundos
setInterval(() => {
    textCurrentIndex = (textCurrentIndex + 1) % textItems.length; // Calcula o próximo índice
    updateTextCarousel(); // Atualiza o carrossel com o novo índice
}, 5000);
