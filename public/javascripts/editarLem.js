window.onload = async function () {
    let lembrete = await $.ajax({
        url: "/api/lembretes/editarLem/" + sessionStorage.getItem("lembId"),
        method: "get",
        dataType: "json"

    })
    getLembrete(lembrete)
}

function getLembrete(lembrete) {
    console.log(lembrete);
    document.getElementById("titulo").value = lembrete[0].titulo;
    document.getElementById("dataHora").value = lembrete[0].dataHora;
    document.getElementById("descricao").value = lembrete[0].descricao;
}

async function deleteLembrete() {

    await $.ajax({
        url: "/api/lembretes/editarLem/deleteLemb/" + sessionStorage.getItem("lembId"),
        method: "get",
        dataType: "json"

    })
    sessionStorage.setItem("lembId", sessionStorage.getItem("lembId"));
    window.location = "lembretes.html";
}

let cor = "#EAECEE";
async function updateLembrete() {

    await $.ajax({
        url: "/api/lembretes/editarLem/updateLemb/" + sessionStorage.getItem("lembId"),
        method: "post",
        dataType: "json",
        data: {
            titulo: document.getElementById("titulo").value,
            dataHora: document.getElementById("dataHora").value,
            descricao: document.getElementById("descricao").value,
            cor: cor
        },
        success: function (response) {
            cor = "#EAECEE";
            window.location = "lembretes.html";
        },
        error: function (xhr) {
            console.log(xhr);
        }
    })
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