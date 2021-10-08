let BtnInicio = document.querySelector(".BtnInicio");
let BtnCliente = document.querySelector(".BtnClientes");

const TelaClientes = document.getElementById("Clientes");
const TelaInicio = document.getElementById("Inicio");

BtnCliente.onclick = function(){
    TelaClientes.style.display = "block";
    TelaInicio.style.display = "none";
}

BtnInicio.onclick = function(){
  TelaClientes.style.display = "none";
  TelaInicio.style.display = "flex";
}