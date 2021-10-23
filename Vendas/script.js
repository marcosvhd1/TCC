var tabela3 = document.getElementById("tabelaVendas");
var linhas3 = tabela3.getElementsByTagName("tr");

var tabela4 = document.getElementById("produtosincluidos");
var linhas4 = tabela4.getElementsByTagName("tr");

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

for (var i = 0; i < linhas4.length; i++) {
    var linha4 = linhas4[i];
    linha4.addEventListener("click", function () {
        //Adicionar ao atual
        selLinha(this, false); //Selecione apenas um
        //selLinha(this, true); //Selecione quantos quiser
    });
}

function selLinha(linha4, multiplos) {
    if (!multiplos) {
        var linhas4 = linha4.parentElement.getElementsByTagName("tr");
        for (var i = 0; i < linhas4.length; i++) {
            var linha4_ = linhas4[i];
            linha4_.classList.remove("selecionado");
        }
    }
    linha4.classList.toggle("selecionado");
}

