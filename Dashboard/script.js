const TelaInicio = document.getElementById("Inicio");
const TelaCliente = document.getElementById("Cliente");
const TelaProduto = document.getElementById("Produtos");
const TelaVenda = document.getElementById("Venda");

function openInicio() {
    TelaInicio.style.display = "block";
    TelaCliente.style.display = "none";
    TelaProduto.style.display = "none";
    TelaVenda.style.display = "none";
}

function openCliente() {
    TelaCliente.style.display = "block";
    TelaInicio.style.display = "none";
    TelaProduto.style.display = "none";
    TelaVenda.style.display = "none";
}

function openProduto() {
    TelaProduto.style.display = "block";
    TelaCliente.style.display = "none";
    TelaInicio.style.display = "none";
    TelaVenda.style.display = "none";
}

function openVenda() {
    TelaVenda.style.display = "block";
    TelaProduto.style.display = "none";
    TelaCliente.style.display = "none";
    TelaInicio.style.display = "none";
}