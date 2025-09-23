function deleteBottles() {
    const container = document.getElementById('bottleContainer');
    container.innerHTML = ''; // Limpa a área
}


function renderBottles() {
    const count = parseInt(document.getElementById('bottleInput').value);
    const container = document.getElementById('bottleContainer');

    if (isNaN(count) || count <= 0) return;

    for (let i = 0; i < count; i++) {
        // Cria um novo elemento (o ícone da garrafa)
        const icon = document.createElement('span'); 
        icon.classList.add('bottle-icon'); // Aplique estilos via CSS
        container.appendChild(icon);
    }
}