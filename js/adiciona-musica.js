var musica1 = { música: "Jogging", nível: "S18", nota: "A", score: "432765"};
var musica2 = { música: "Snapping", nível: "D18", nota: "SS", score: "997733"};
var musica3 = { música: "Destrucimate", nível: "S16", nota: "A sem pass", score: "212121"};

var musicas = [musica1, musica2, musica3];

function exibeMusicaNaTabela(musicas){
    var novoElemento = "";
    for(var i = 0; i < musicas.length; i++){
        novoElemento = novoElemento + "<tr><td>" + musicas[i].música + "</td>";
        novoElemento += "<td>" + musicas[i].nível + "</td>";
        novoElemento += "<td>" + musicas[i].nota + "</td>";
        novoElemento += "<td>" + musicas[i].score + "</td>";
        novoElemento += "</tr>"
    }

    var tabelaMusicas = document.getElementById("tabelaMusicas");
    tabelaMusicas.innerHTML = novoElemento;
}

exibeMusicaNaTabela(musicas);