function deleteBottles() {
    const container = document.getElementById('bottleContainer');
    container.innerHTML = ''; // Limpa a área
    // Atualiza a exibição do número de garrafas na tela
    showBottles();
}


function renderBottles() {
    const input = document.getElementById('bottleInput');
    const count = parseInt(input.value);
    const container = document.getElementById('bottleContainer');
    

    if (isNaN(count) || count <= 0) {
        showBottles();
        return;
    }

    for (let i = 0; i < count; i++) {
        // Cria um novo elemento (o ícone da garrafa)
        const icon = document.createElement('span');
        icon.classList.add('bottle-icon'); // Aplique estilos via CSS
        container.appendChild(icon);
    }

    // Atualiza a exibição com base no que está realmente na tela
    showBottles();
}

function showBottles() {
    // Conta quantos elementos de garrafa estão atualmente renderizados
    const container = document.getElementById('bottleContainer');
    const display = document.getElementById('bottleCount');
    if (!display || !container) return;

    const rendered = container.querySelectorAll('.bottle-icon').length;

    if (rendered === 0) {
        display.textContent = '0 garrafas';
        return;
    }

    display.textContent = rendered + (rendered === 1 ? ' garrafa' : ' garrafas');
}

// Inicializa listener para atualização em tempo real quando a página carregar
document.addEventListener('DOMContentLoaded', function () {
    // Mostra estado inicial com base nos elementos já presentes
    showBottles();
});