var rnd1= Math.floor((Math.random() * 12)+1);
var rnd2= Math.floor((Math.random() * 12)+1);
var pj = new Jugador();
var pjPrueba2 = new Enemigo("rat");
var pjPrueba3 = new Enemigo("goblin");
var listaPersonajes=[pj,pjPrueba2,pjPrueba3];
for (var i = 0; i < listaPersonajes.length; i++) {
  listaPersonajes[i].colocarPersonaje();
}


window.addEventListener("keypress", function(e) {
    jugar(e);
});

function jugar(e) {
    var x = e.which || e.keyCode;

    switch (x) {
        case 39:
            pj.moverDerecha();
            break;
        case 40:
            pj.moverAbajo();
            break;
        case 38:
            pj.moverArriba();
            break;
        case 37:
          pj.moverIzquierda();
            break;
        case 32:
            pj.atacar(listaPersonajes);
            break;

        default:

    }


}
update=setInterval(function () {
  pj.mostrarVida();
  pj.mostrarScore();

  for (var i = 0; i <listaPersonajes.length ; i++) {
    listaPersonajes[i].muerte(listaPersonajes[i]);
  }
},10);
