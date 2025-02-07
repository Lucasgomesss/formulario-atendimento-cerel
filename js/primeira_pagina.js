function enviarNome() {
    const nome = document.getElementById("nameInput").value;
    if (nome) {
        // Salva o nome no localStorage
        localStorage.setItem("nomeUsuario", nome);

        // Exibe uma confirmação de envio
        document.getElementById("confirmation").style.display = "block";

        // Limpa o campo de input
        document.getElementById("nameInput").value = "";

        // Recarrega a página após 2 segundos para permitir o envio de outro nome
        setTimeout(function () {
            document.getElementById("confirmation").style.display = "none";
        }, 2000); // Esconde a confirmação após 2 segundos
    } else {
        alert("Por favor, insira um nome!");
    }

}