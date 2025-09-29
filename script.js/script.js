function enviarFormulario() {
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    alert(`Obrigado, ${nome}! Sua mensagem foi enviada:\n"${mensagem}"`);
}