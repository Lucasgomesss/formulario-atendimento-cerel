function atualizarNome() {
    const nome = localStorage.getItem("nomeUsuario");
    if (nome) {
        document.getElementById("nomeUsuario").innerText = nome;
    }
}

// Atualiza o nome sempre que o localStorage for alterado
window.addEventListener('storage', function (event) {
    if (event.key === 'nomeUsuario') {
        atualizarNome();
    }
});

// // Atualiza o nome a cada 500ms
// setInterval(atualizarNome, 500);