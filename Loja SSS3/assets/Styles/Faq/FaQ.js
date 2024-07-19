// Espera até que todo o conteúdo HTML seja carregado antes de executar o script
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todas as perguntas dentro da classe .faq-question
    const questions = document.querySelectorAll(".faq-question");

    // Para cada pergunta selecionada, adiciona um evento de clique
    questions.forEach(function(question) {
        question.addEventListener("click", function() {
            // Seleciona a resposta próxima à pergunta clicada
            const answer = this.nextElementSibling;

            // Alterna a classe 'active' na pergunta para estilização visual
            this.classList.toggle("active");

            // Expande ou retrai a altura máxima da resposta
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null; // Fecha a resposta
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px"; // Abre a resposta para a altura total do conteúdo
            }
        });
    });
});
