var tabela = document.getElementById("tabelaCliente");
var linhas = tabela.getElementsByTagName("tr");

const cadastrarcliente = document.getElementById("cadCliente");
const editarcliente = document.getElementById("editCliente");

function iniciamodalCliente(modalID) {
    const modalcliente = document.getElementById(modalID);
    if (modalcliente) {
        modalcliente.classList.add('mostrar');
        modalcliente.addEventListener('click', (e) => {
            if (e.target.id == 'fechar-modal-cliente') {
                modalcliente.classList.remove('mostrar');
            }
        });
    }
}

cadastrarcliente.addEventListener('click', () => iniciamodalCliente('modal-cliente'));
editarcliente.addEventListener('click', () => iniciamodalCliente('modal-cliente'));

for (var i = 0; i < linhas.length; i++) {
    var linha = linhas[i];
    linha.addEventListener("click", function () {
        //Adicionar ao atual
        selLinha(this, false); //Selecione apenas um
        //selLinha(this, true); //Selecione quantos quiser
    });
}

/**
Caso passe true, você pode selecionar multiplas linhas.
Caso passe false, você só pode selecionar uma linha por vez.
**/
function selLinha(linha, multiplos) {
    if (!multiplos) {
        var linhas = linha.parentElement.getElementsByTagName("tr");
        for (var i = 0; i < linhas.length; i++) {
            var linha_ = linhas[i];
            linha_.classList.remove("selecionado");
        }
    }
    linha.classList.toggle("selecionado");
}

/**
Exemplo de como capturar os dados
**/
var btnCliente = document.getElementById("dadosCliente");

btnCliente.addEventListener("click", function () {
    var selecionados = tabela.getElementsByClassName("selecionado");
    //Verificar se eestá selecionado
    if (selecionados.length < 1) {
        alert("Selecione pelo menos uma linha");
        return false;
    }

    var dados = "";

    for (var i = 0; i < selecionados.length; i++) {
        var selecionado = selecionados[i];
        selecionado = selecionado.getElementsByTagName("td");
        dados += "Código: " + selecionado[0].innerHTML + " - Nome: " + selecionado[1].innerHTML + " - Telefone: " + selecionado[2].innerHTML + " - Cidade: " + selecionado[3].innerHTML + "\n";
    }

    alert(dados);
});


