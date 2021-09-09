window.onload = async function () {
    let lembretes = await $.ajax({
        url: "/api/lembretes",
        method: "get",
        dataType: "json"
    })
    showLembretes(lembretes)
}

function showLembretes(lembretes) {
    let html = ""

    for (let lemb of lembretes) {

        html += "<tr bgcolor=" + lemb.botao + " onclick='showLembrete(" + lemb.id + ")'><td>" +
            lemb.titulo + "</td><td>" + lemb.dataHora + "</td><td>" + lemb.descricao + "</td><td></td></tr>";

        console.log(lemb.botao)
    }
    document.getElementById("lembretes").innerHTML = html;
    if (lembretes.length == 0){
        document.getElementById("lembretes").innerHTML = "<h1>Crie os seus lembretes para poder visualizá-los!</h1>"
    };
}

async function showLembrete(id) {
    sessionStorage.setItem("lembId", id);
    window.location = "editarLem.html";
}





