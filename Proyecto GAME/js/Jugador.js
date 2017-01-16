Jugador = function() {
    Personaje.call(this, 6, 6, tableroJuego);
    this.score = localStorage.getItem("1º")[1];
    this.vida=100;
    this.damage=1;
    this.character.className = localStorage.getItem("ImgJugador");

};
Jugador.prototype = new Personaje(6, 6, tableroJuego);
Jugador.prototype.mostrarVida = function() {
    document.getElementById('vida').innerHTML = this.vida;
};
Jugador.prototype.mostrarScore = function() {
    document.getElementById('score').innerHTML = this.score;
};

Enemigo = function(tipoEnemigo) {
    Personaje.call(this, Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), tableroJuego);
    this.vida = 10;
    this.character.className = tipoEnemigo;
    switch (tipoEnemigo) {
        case "rat":
          this.vida = 1;
          this.damage=1;
          this.ptos=2;
            break;
        case "goblin":
        this.vida = 3;
        this.damage=2;
        this.ptos=5;
            break;
        case "esqueleto":
        this.vida = 3;
        this.damage=4;
        this.ptos=10;
            break;
        case "boss":
        this.vida = 10;
        this.damage=3;
        this.ptos=30;
            break;
        default:
            this.vida = 10;
            this.character.className = "goblin";
    }
};
Enemigo.prototype = new Personaje(Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), tableroJuego);
Enemigo.prototype.iA = function() {
    var that=this;


    inteligenciaArtificial=setInterval(function() {
      if (that.vida>0) {

        var rnd = Math.floor((Math.random() * 16));
        switch (rnd) {
            case 0:
            case 1:
            case 2:
              that.moverArriba();
              that.moverArriba();
                console.log(this);
                break;
            case 3:
            case 4:
            case 5:
                that.moverAbajo();
                that.moverAbajo();
                console.log(this);
                break;
            case 6:
            case 7:
            case 8:
                that.moverIzquierda();
                that.moverIzquierda();
                console.log(this);
                break;
            case 9:
            case 10:
            case 11:
                that.moverDerecha();
                that.moverDerecha();
                console.log(this);
                break;
            case 12:
            case 13:
            case 14:
            case 15:
                that.atacar();
                console.log(this);
                break;
            default:

        }
      }else {
        clearInterval(inteligenciaArtificial);
      }
    }, 1000);
};
