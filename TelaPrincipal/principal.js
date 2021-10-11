let BtnInicio = document.querySelector(".BtnInicio");
let BtnCliente = document.querySelector(".BtnClientes");
let BtnProdutos = document.querySelector(".BtnProdutos");

const TelaClientes = document.getElementById("Clientes");
const TelaInicio = document.getElementById("Inicio");
const TelaProdutos = document.getElementById("Produtos");

BtnCliente.onclick = function(){
    TelaClientes.style.display = "block";
    TelaInicio.style.display = "none";
    TelaProdutos.style.display = "none";
}

BtnInicio.onclick = function(){
  TelaClientes.style.display = "none";
  TelaInicio.style.display = "flex";
  TelaProdutos.style.display = "none";
}

BtnProdutos.onclick = function(){
  TelaClientes.style.display = "none";
  TelaInicio.style.display = "none";
  TelaProdutos.style.display = "block";
}