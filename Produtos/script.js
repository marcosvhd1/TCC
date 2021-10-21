var tabela2 = document.getElementById("tabelaProdutos");
var linhas2 = tabela2.getElementsByTagName("tr");

const cadastrarproduto = document.getElementById("cadproduto");
const editarproduto = document.getElementById("editproduto");

function iniciamodalproduto(modalID) {
    const modalproduto = document.getElementById(modalID);
    if (modalproduto) {
        modalproduto.classList.add('mostrar');
        modalproduto.addEventListener('click', (e) => {
            if (e.target.id == 'fechar-modal-produto') {
                modalproduto.classList.remove('mostrar');
            }
        });
    }
}

cadastrarproduto.addEventListener('click', () => iniciamodalproduto('modal-produto'));

for (var i = 0; i < linhas2.length; i++) {
    var linha2 = linhas2[i];
    linha2.addEventListener("click", function () {
        //Adicionar ao atual
        selLinha(this, false); //Selecione apenas um
        //selLinha(this, true); //Selecione quantos quiser
    });
}

function selLinha(linha2, multiplos) {
    if (!multiplos) {
        var linhas2 = linha2.parentElement.getElementsByTagName("tr");
        for (var i = 0; i < linhas2.length; i++) {
            var linha2_ = linhas2[i];
            linha2_.classList.remove("selecionado");
        }
    }
    linha2.classList.toggle("selecionado");
}

var btnProduto = document.getElementById("dadosProduto");

btnProduto.addEventListener("click", function () {
    var selecionados2 = tabela2.getElementsByClassName("selecionado");
    //Verificar se eestá selecionado
    if (selecionados2.length < 1) {
        alert("Selecione pelo menos uma linha");
        return false;
    }

    var dados2 = "";

    for (var i = 0; i < selecionados2.length; i++) {
        var selecionado2 = selecionados2[i];
        selecionado2 = selecionado2.getElementsByTagName("td");
        dados2 += "Código: " + selecionado2[0].innerHTML + " - Descrição: " + selecionado2[1].innerHTML + " - Estoque: " + selecionado2[2].innerHTML + " - Marca: " + selecionado2[3].innerHTML + " - Valor: " + selecionado2[4].innerHTML + "\n";
    }

    alert(dados2);
});

