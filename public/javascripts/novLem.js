let cor = "#EAECEE";

async function getLembrete() {
    let titulo = document.getElementById("titulo").value;

    console.log(titulo);
    if (titulo == "") {
        alert("Adicione um titulo ao Lembrete antes de gravar!");
    }
    else {
        await $.ajax({
            url: "/api/lembretes/novLem",
            method: "post",
            dataType: "json",
            data: {
                titulo: document.getElementById("titulo").value,
                dataHora: document.getElementById("dataHora").value,
                descricao: document.getElementById("descricao").value,
                cor: cor
            },
            success: function (response) {
                document.getElementById("titulo").value = "";
                document.getElementById("dataHora").value = "";
                document.getElementById("descricao").value = "";
                cor = "#EAECEE";
            },
            error: function (xhr) {
                console.log(xhr);
            }
        })
    }
}

function verde() {
    cor = "#82E0AA";
}
function amarelo() {
    cor = "#F9E79F";
}
function vermelho() {
    cor = "#E6B0AA";
}




