
// Função para exibir uma seção específica com base no ID
function showSection(id) {
    const sections = document.querySelectorAll('section'); // Seleciona todas as seções da página
    sections.forEach(section => section.classList.add('hidden')); // Adiciona a classe 'hidden' a todas as seções, escondendo-as
    document.getElementById(id).classList.remove('hidden'); // Remove a classe 'hidden' da seção correspondente ao ID passado, exibindo-a

    const links = document.querySelectorAll('nav a'); // Seleciona todos os links de navegação
    links.forEach(link => link.classList.remove('active')); // Remove a classe 'active' de todos os links
    document.querySelector(`nav a[href='#${id}']`).classList.add('active'); // Adiciona a classe 'active' ao link correspondente à seção exibida
}
