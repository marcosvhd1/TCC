let BtnInicio = document.getElementsByClassName(".BtnInicio");

let BtnCadCliente = document.getElementsByClassName(".BtnCadClientes");
let BtnListaCliente = document.getElementsByClassName(".BtnListaClientes");

let BtnCadProduto = document.getElementsByClassName(".BtnCadProdutos");
let BtnListaProduto = document.getElementsByClassName(".BtnListaProdutos");

const TelaInicio = document.getElementById("inicio");

const TelaCadClientes = document.getElementById("cadcliente");
const TelaListaClientes = document.getElementById("listacliente");

const TelaCadProduto = document.getElementById("cadproduto");
const TelaListaProduto = document.getElementById("listaprodutos");

function openInicio(){
  TelaInicio.style.display="block";

  TelaCadClientes.style.display="none";
  TelaListaClientes.style.display="none";

  TelaCadProduto.style.display="none";
  TelaListaProduto.style.display="none";
}

function openCadCliente(){
  TelaCadClientes.style.display="block";
  TelaListaClientes.style.display="none";

  TelaInicio.style.display="none";

  TelaCadProduto.style.display="none";
  TelaListaProduto.style.display="none";
}

function openListaCliente(){
  TelaListaClientes.style.display="block";
  TelaCadClientes.style.display="none";

  TelaInicio.style.display="none";

  TelaCadProduto.style.display="none";
  TelaListaProduto.style.display="none";
}

function openCadProduto(){
  TelaCadClientes.style.display="none";
  TelaListaClientes.style.display="none";

  TelaInicio.style.display="none";

  TelaCadProduto.style.display="block";
  TelaListaProduto.style.display="none";
}

function openListaProduto(){
  TelaListaClientes.style.display="none";
  TelaCadClientes.style.display="none";

  TelaInicio.style.display="none";

  TelaCadProduto.style.display="none";
  TelaListaProduto.style.display="block";
}