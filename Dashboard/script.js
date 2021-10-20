const TelaInicio = document.getElementById("Inicio");
const TelaCliente = document.getElementById("Cliente");
const TelaProduto = document.getElementById("Produtos");

function openInicio() {
    TelaInicio.style.display = "block";
    TelaCliente.style.display = "none";
    TelaProduto.style.display = "none";
}

function openCliente() {
    TelaCliente.style.display = "block";
    TelaInicio.style.display = "none";
    TelaProduto.style.display = "none";
}

function openProduto() {
    TelaProduto.style.display = "block";
    TelaCliente.style.display = "none";
    TelaInicio.style.display = "none";
}