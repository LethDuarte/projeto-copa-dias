function contar(){
    var texto = document.getElementsByClassName('texto');
    var hoje = new Date();
    var copa = new Date(2022, 10, 20);
    var umDia = 1000*60*60*24;
    var falta = Math.abs((hoje - copa))/umDia;
    
    console.log(Math.trunc(falta));
}