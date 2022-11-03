var texto = document.getElementById('texto');
var hoje = new Date();
const copa = new Date(2022, 10, 20);
const umDia = 1000*60*60*24;
var falta = Math.abs((hoje - copa))/umDia;
var dia = Math.trunc(falta);

function escrever(){
    var texto = document.getElementById('texto');

    texto.innerHTML = `Faltam ${dia} dias para a Copa do Mundo do Catar!`
}

function progresso(){
    var progresso = document.getElementById('progresso');
    var porc = dia/0.32;

    progresso.style.setProperty('width', `${porc}%`);
}

function opacidade(){
    var imagem = document.getElementById('imagem');

    imagem.style.setProperty('opacity', `${dia}%`);
}