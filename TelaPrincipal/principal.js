let BtnInicio = document.getElementsByClassName(".BtnInicio");
let BtnCadCliente = document.getElementsByClassName(".BtnCadClientes");
let BtnListaCliente = document.getElementsByClassName(".BtnListaClientes");

const TelaInicio = document.getElementById("inicio");
const TelaCadClientes = document.getElementById("cadcliente");
const TelaListaClientes = document.getElementById("listacliente");

function openCadCliente(){
  TelaCadClientes.style.display="block";
  TelaListaClientes.style.display="none";
  TelaInicio.style.display="none";
}

function openInicio(){
  TelaInicio.style.display="block";
  TelaCadClientes.style.display="none";
  TelaListaClientes.style.display="none";
}

function openListaCliente(){
  TelaListaClientes.style.display="block";
  TelaCadClientes.style.display="none";
  TelaInicio.style.display="none";
}