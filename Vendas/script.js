var tabela3 = document.getElementById("tabelaVendas");
var linhas3 = tabela3.getElementsByTagName("tr");

const cadastrarvenda = document.getElementById("cadvenda");
const editarvenda = document.getElementById("editvenda");

function iniciamodalvenda(modalID) {
    const modalvenda = document.getElementById(modalID);
    if (modalvenda) {
        modalvenda.classList.add('mostrar');
        modalvenda.addEventListener('click', (e) => {
            if (e.target.id == 'fechar-modal-venda') {
                modalvenda.classList.remove('mostrar');
            }
        });
    }
}

cadastrarvenda.addEventListener('click', () => iniciamodalvenda('modal-venda'));

for (var i = 0; i < linhas3.length; i++) {
    var linha3 = linhas3[i];
    linha3.addEventListener("click", function () {
        //Adicionar ao atual
        selLinha(this, false); //Selecione apenas um
        //selLinha(this, true); //Selecione quantos quiser
    });
}

function selLinha(linha3, multiplos) {
    if (!multiplos) {
        var linhas3 = linha3.parentElement.getElementsByTagName("tr");
        for (var i = 0; i < linhas3.length; i++) {
            var linha3_ = linhas3[i];
            linha3_.classList.remove("selecionado");
        }
    }
    linha3.classList.toggle("selecionado");
}

var btnvenda = document.getElementById("dadosvenda");

btnvenda.addEventListener("click", function () {
    var selecionados3 = tabela3.getElementsByClassName("selecionado");
    //Verificar se eestá selecionado
    if (selecionados3.length < 1) {
        alert("Selecione pelo menos uma linha");
        return false;
    }

    var dados3 = "";

    for (var i = 0; i < selecionados3.length; i++) {
        var selecionado3 = selecionados3[i];
        selecionado3 = selecionado3.getElementsByTagName("td");
        dados3 += "Código: " + selecionado3[0].innerHTML + " - Descrição: " + selecionado3[1].innerHTML + " - Estoque: " + selecionado3[3].innerHTML + " - Marca: " + selecionado3[3].innerHTML + " - Valor: " + selecionado3[4].innerHTML + "\n";
    }

    alert(dados3);
});

