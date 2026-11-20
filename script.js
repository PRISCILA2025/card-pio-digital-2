
function fazerPedido(produto) {

    const mensagem = document.getElementById("mensagem");

    mensagem.textContent =
        "Você escolheu: " + produto + ". Pedido iniciado!";

    console.log("Produto selecionado:", produto);
}
