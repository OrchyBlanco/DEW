Personaje = function( posicionY, posicionX, mapaJuego) {
    this.tablero = document.getElementById('mapa');
    this.mapaJuego = mapaJuego;

    this.vida = 100;
    this.damage = 10;
    this.posicionX = posicionX;
    this.posicionY = posicionY;
    this.enemigoX=null;
    this.enemigoY=null;

    if (this.tablero !== null) {
        this.casillaActual = this.tablero.childNodes[this.posicionY].childNodes[this.posicionX];

    }
    this.mirando = "ABAJO";
    this.character = document.createElement("DIV");

};

Personaje.prototype = {

    getPosicion: function() {
        var position = [this.posicionX, this.posicionY];
        return position;
    },
    colocarPersonaje: function() {



        this.casillaActual.appendChild(this.character);
    },

    asignarAbajo: function() {
        if (this.casillaActual.parentNode.nextSibling !== null) {
            return this.casillaActual.parentNode.nextSibling.children[this.casillaActual.cellIndex];
        } else {
            return this.casillaActual.parentNode.parentNode.firstChild.children[this.casillaActual.cellIndex];
        }
    },
    asignarArriba: function() {
        if (this.casillaActual.parentNode.previousSibling !== null) {
            return this.casillaActual.parentNode.previousSibling.children[this.casillaActual.cellIndex];
        } else {
            return this.casillaActual.parentNode.parentNode.lastChild.children[this.casillaActual.cellIndex];
        }
    },
    existeAlgoSiguienteCasilla: function(siguienteCasilla) {
        if (siguienteCasilla.classList[0] == "muro" || siguienteCasilla.childNodes[0] !== undefined) {
            return true;
        } else {
            return false;
        }
    },
    moverArriba: function() {



        var x = this.posicionX;
        var y = this.posicionY;

        var casillaArriba = this.asignarArriba();
        //GIRARPERSONAJE
        if (this.mirando != "ARRIBA") {
            this.mirando = "ARRIBA";

            this.character.style.backgroundPosition = "-96px -98px";
        } //GIRARPERSONAJE
        else {


            if (this.casillaActual.parentNode.previousSibling === null) {
                this.casillaActual.children[0].remove();

                casillaArriba.appendChild(this.character);
                this.posicionY = 13;
                this.casillaActual = casillaArriba;
                this.mapaJuego.actualizar("Ar");

            } else if (!this.existeAlgoSiguienteCasilla(casillaArriba)) {
                this.casillaActual.children[0].remove();
                casillaArriba.appendChild(this.character);

                this.posicionY = this.posicionY - 1;
                this.casillaActual = casillaArriba;
            }

        }

    },
    moverAbajo: function() {





        var casillaAbajo = this.asignarAbajo();
        //GIRARPERSONAJE
        if (this.mirando != "ABAJO") {
            this.mirando = "ABAJO";

            this.character.style.backgroundPosition = "-96px 0px";
        } //GIRARPERSONAJE
        else {

            if (this.casillaActual.parentNode.nextSibling === null) {
                this.casillaActual.children[0].remove();

                casillaAbajo.appendChild(this.character);
                this.posicionY = 0;
                this.casillaActual = casillaAbajo;
                this.mapaJuego.actualizar("Ab");

            } else if (!this.existeAlgoSiguienteCasilla(casillaAbajo)) {
                this.casillaActual.children[0].remove();
                casillaAbajo.appendChild(this.character);
                this.posicionY = this.posicionY + 1;
                this.casillaActual = casillaAbajo;

            }
            if (this.casillaActual.parentNode.nextSibling === null && this.mapaJuego.boss === true) {
                this.posicionY = 13;
            }

        }

    },
    moverDerecha: function() {



        var casillaDerecha = this.casillaActual.nextSibling;
        //GIRARPERSONAJE
        if (this.mirando != "DERECHA") {
            this.mirando = "DERECHA";

            this.character.style.backgroundPosition = "-96px -66px";
        } //GIRARPERSONAJE
        else {
            if (casillaDerecha === null) {
                this.casillaActual.children[0].remove();
                casillaDerecha = this.casillaActual.parentNode.firstChild;
                casillaDerecha.appendChild(this.character);
                this.posicionX = 0;
                this.casillaActual = casillaDerecha;
                this.mapaJuego.actualizar("D");
            } else
            if (!this.existeAlgoSiguienteCasilla(casillaDerecha)) {
                this.casillaActual.children[0].remove();
                casillaDerecha.appendChild(this.character);
                this.posicionX = this.posicionX + 1;
                this.casillaActual = casillaDerecha;
            }

        }
    },
    moverIzquierda: function() {



        var casillaIzquierda = this.casillaActual.previousSibling;
        //GIRARPERSONAJE
        if (this.mirando != "IZQUIERDA") {
            this.mirando = "IZQUIERDA";

            this.character.style.backgroundPosition = "-96px -35px";
        } //GIRARPERSONAJE
        else {
            if (casillaIzquierda === null) {
                this.casillaActual.children[0].remove();
                casillaIzquierda = this.casillaActual.parentNode.lastChild;
                casillaIzquierda.appendChild(this.character);
                this.posicionX = 13;
                this.casillaActual = casillaIzquierda;
                this.mapaJuego.actualizar("I");
            } else if (!this.existeAlgoSiguienteCasilla(casillaIzquierda)) {
                this.casillaActual.children[0].remove();
                casillaIzquierda.appendChild(this.character);
                this.posicionX = this.posicionX - 1;
                this.casillaActual = casillaIzquierda;
            }

        }
    },

    atacar: function(arrayPersonajes) {
        var casillaIzquierda = this.casillaActual.previousSibling;
        var casillaDerecha = this.casillaActual.nextSibling;
        var casillaAbajo = this.asignarAbajo();
        var casillaArriba = this.asignarArriba();

        var attack = document.createElement("div");
        attack.classList.add("ataque");
        switch (this.mirando) {
            case "ARRIBA":
                if (!this.existeAlgoSiguienteCasilla(casillaArriba)) {
                    casillaArriba.appendChild(attack);
                    setTimeout(function() {
                        casillaArriba.children[0].remove();
                    }, 100);
                } else {
                    casillaArriba.children[0].appendChild(attack);
                    setTimeout(function() {
                        if (casillaArriba.children[0]!==undefined) {
                        casillaArriba.children[0].children[0].remove();
                      }
                    }, 100);
                    this.bajarVida(casillaArriba,arrayPersonajes);

                }
                break;
            case "ABAJO":
                if (!this.existeAlgoSiguienteCasilla(casillaAbajo)) {
                    casillaAbajo.appendChild(attack);
                    setTimeout(function() {
                        casillaAbajo.children[0].remove();
                    }, 100);

                } else {
                    casillaAbajo.children[0].appendChild(attack);
                    setTimeout(function() {
                        if (casillaAbajo.children[0]!==undefined) {
                        casillaAbajo.children[0].children[0].remove();
                      }
                    }, 100);
                    this.bajarVida(casillaAbajo,arrayPersonajes);

                }
                break;
            case "DERECHA":
                if (!this.existeAlgoSiguienteCasilla(casillaDerecha)) {
                    casillaDerecha.appendChild(attack);
                    setTimeout(function() {
                        casillaDerecha.children[0].remove();
                    }, 100);
                } else {
                    casillaDerecha.children[0].appendChild(attack);
                    setTimeout(function() {
                        if (casillaDerecha.children[0]!==undefined) {
                        casillaDerecha.children[0].children[0].remove();}
                    }, 100);
                    this.bajarVida(casillaDerecha,arrayPersonajes);

                }
                break;
            case "IZQUIERDA":
                if (!this.existeAlgoSiguienteCasilla(casillaIzquierda)) {
                    casillaIzquierda.appendChild(attack);
                    setTimeout(function() {
                        casillaIzquierda.children[0].remove();

                    }, 100);
                } else {
                    casillaIzquierda.children[0].appendChild(attack);
                    setTimeout(function() {
                      if (casillaIzquierda.children[0]!==undefined) {
                        casillaIzquierda.children[0].children[0].remove();
                      }
                    }, 100);
                    this.bajarVida(casillaIzquierda,arrayPersonajes);
                }
                break;
            default:
        }
    },
    bajarVida:function (casillaAtaque,arrayPersonajes) {
      this.enemigoY = casillaAtaque.id.split("|")[0];
      this.enemigoX = casillaAtaque.id.split("|")[1];
      for (var i = 0; i < arrayPersonajes.length; i++) {
          if (arrayPersonajes[i].posicionX == this.enemigoX && arrayPersonajes[i].posicionY == this.enemigoY) {
              arrayPersonajes[i].vida=arrayPersonajes[i].vida-this.damage;
          }
      }
    },
    muerte: function(objeto) {
        if (objeto.vida <= 0) {
          if (  objeto.casillaActual.children[0]!==undefined) {
            objeto.casillaActual.children[0].remove();
            objeto = null;
          }

           clearInterval(update);

        }
    }

};
