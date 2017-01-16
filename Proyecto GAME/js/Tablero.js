Tablero = function() {
    this.mapaJuego = null;
    this.tamano = 14; //USAR PARES!!//
    this.contadorSalas = 0;
    this.boss =false;
};

Tablero.prototype = {

    crearTablero: function() {

        var tabla = document.createElement("TABLE");
        tabla.id = "mapa";
        var jugador = document.createElement("DIV");
        jugador.id = "jugador";

        for (var i = 0; i < this.tamano; i++) {
            var tr = document.createElement("TR");

            for (var j = 0; j < this.tamano; j++) {
                var td = document.createElement("TD");
                td.className = "suelo";
                td.id =  i +"|"+ j;

                tr.appendChild(td);
            }
            tabla.appendChild(tr);
        }
        document.getElementById('tablero').appendChild(tabla);
        this.mapaJuego = document.getElementById('mapa');
    },
    limpiarTablero: function() {
        for (var i = 0; i < this.tamano; i++) {
            for (var j = 0; j < this.tamano; j++) {
                var casilla = this.mapaJuego.childNodes[i].childNodes[j];
                if (casilla.classList.contains("esquinaArribaIzquierda") || casilla.classList.contains("esquinaArribaDerecha") ||
                    casilla.classList.contains("esquinaAbajoIzquierda") || casilla.classList.contains("esquinaAbajoDerecha") ||
                    casilla.classList.contains("paredArribaAbajo") || casilla.classList.contains("paredDerechaIzquierda") ||
                    casilla.classList.contains("muroSalidaArriba") || casilla.classList.contains("muroSalidaAbajo") ||
                    casilla.classList.contains("muroSalidaDerecha") || casilla.classList.contains("muroSalidaIzquierda")) {
                    casilla.className = "";
                }
            }
        }
    },
    pintarEsquinas: function() {
        for (var i = 0; i < this.tamano; i++) {
            for (var j = 0; j < this.tamano; j++) {
                var casilla = this.mapaJuego.childNodes[i].childNodes[j];

                if (i === 0 && j === 0) {
                    casilla.className = "muro esquinaArribaIzquierda";
                }
                if (i === 0 && j === this.tamano - 1) {
                    casilla.className = "muro esquinaArribaDerecha";
                }
                if (i === this.tamano - 1 && j === 0) {
                    casilla.className = "muro esquinaAbajoIzquierda";
                }
                if (i === this.tamano - 1 && j === this.tamano - 1) {
                    casilla.className = "muro esquinaAbajoDerecha";
                }
            }
        }
    },
    pintarParedArriba: function() {
        for (var i = 0; i < this.tamano; i++) {
            for (var j = 0; j < this.tamano; j++) {
                var casilla = this.mapaJuego.childNodes[i].childNodes[j];
                if (j > 0 && j < this.tamano - 1 && i === 0) {
                    casilla.className = "muro paredArribaAbajo";
                }

            }
        }
    },
    pintarParedAbajo: function() {
        for (var i = 0; i < this.tamano; i++) {
            for (var j = 0; j < this.tamano; j++) {
                var casilla = this.mapaJuego.childNodes[i].childNodes[j];
                if (j > 0 && j < this.tamano - 1 && i == this.tamano - 1) {
                    casilla.className = "muro paredArribaAbajo";
                }

            }
        }
    },
    pintarParedDerecha: function() {
        for (var i = 0; i < this.tamano; i++) {
            for (var j = 0; j < this.tamano; j++) {
                var casilla = this.mapaJuego.childNodes[i].childNodes[j];
                if (i > 0 && i < this.tamano - 1 && j === 0) {
                    casilla.className = "muro paredDerechaIzquierda";
                }

            }
        }
    },
    pintarParedIzquierda: function() {
        for (var i = 0; i < this.tamano; i++) {
            for (var j = 0; j < this.tamano; j++) {
                var casilla = this.mapaJuego.childNodes[i].childNodes[j];
                if (i > 0 && i < this.tamano - 1 && j == this.tamano - 1) {
                    casilla.className = "muro paredDerechaIzquierda";
                }

            }
        }
    },
    pintarSalidaArriba: function() {
        for (var i = 0; i < this.tamano; i++) {
            for (var j = 0; j < this.tamano; j++) {
                var casilla = this.mapaJuego.childNodes[i].childNodes[j];
                if ((j == this.tamano / 2 || j == (this.tamano / 2) - 1) && i === 0) {
                    casilla.className = "salida";
                }
                if (j == this.tamano / 2 && i === 0) {
                    casilla.nextSibling.className = "muro muroSalidaDerecha";
                }
                if (j == (this.tamano / 2) - 1 && i === 0) {
                    casilla.previousSibling.className = "muro muroSalidaIzquierda";
                }
            }
        }
    },
    pintarSalidaAbajo: function() {
        for (var i = 0; i < this.tamano; i++) {
            for (var j = 0; j < this.tamano; j++) {
                var casilla = this.mapaJuego.childNodes[i].childNodes[j];
                if ((j == this.tamano / 2 || j == (this.tamano / 2) - 1) && i == this.tamano - 1) {
                    casilla.className = "salida";
                }
                if (j == this.tamano / 2 && i == this.tamano - 1) {
                    casilla.nextSibling.className = "muro muroSalidaDerecha";
                }
                if (j == (this.tamano / 2) - 1 && i == this.tamano - 1) {
                    casilla.previousSibling.className = "muro muroSalidaIzquierda";
                }
            }
        }
    },
    pintarSalidaDerecha: function() {
        for (var i = 0; i < this.tamano; i++) {
            for (var j = 0; j < this.tamano; j++) {
                var casilla = this.mapaJuego.childNodes[i].childNodes[j];
                var posicionCasilla;
                var casillaArriba;
                var casillaAbajo;
                if ((i == this.tamano / 2 || i == (this.tamano / 2) - 1) && j == this.tamano - 1) {
                    casilla.className = "salida";
                    posicionCasilla = casilla.cellIndex;
                    casillaArriba = casilla.parentNode.previousSibling.children[posicionCasilla];
                    casillaAbajo = casilla.parentNode.nextSibling.children[posicionCasilla];
                }
                if (i == this.tamano / 2 && j == this.tamano - 1) {
                    casillaAbajo.className = "muro muroSalidaArriba";
                }
                if (i == (this.tamano / 2) - 1 && j == this.tamano - 1) {
                    casillaArriba.className = "muro muroSalidaAbajo";
                }
            }
        }
    },
    pintarSalidaIzquierda: function() {
        for (var i = 0; i < this.tamano; i++) {
            for (var j = 0; j < this.tamano; j++) {
                var casilla = this.mapaJuego.childNodes[i].childNodes[j];
                var posicionCasilla;
                var casillaArriba;
                var casillaAbajo;
                if ((i == this.tamano / 2 || i == (this.tamano / 2) - 1) && j === 0) {
                    casilla.className = "salida";
                    posicionCasilla = casilla.cellIndex;
                    casillaArriba = casilla.parentNode.previousSibling.children[posicionCasilla];
                    casillaAbajo = casilla.parentNode.nextSibling.children[posicionCasilla];
                }
                if (i == this.tamano / 2 && j === 0) {
                    casillaAbajo.className = "muro muroSalidaArriba";
                }
                if (i == (this.tamano / 2) - 1 && j === 0) {
                    casillaArriba.className = "muro muroSalidaAbajo";
                }
            }
        }


    },
    //CREAMOS LAS DISTINTAS SALAS//
    mazmorraBase: function() {
        this.pintarEsquinas();
        this.pintarParedArriba();
        this.pintarParedAbajo();
        this.pintarParedDerecha();
        this.pintarParedIzquierda();
    },

    // 2 SALIDAS//
    mazmorraArribaAbajo: function() {
        this.limpiarTablero();
        this.mazmorraBase();

        this.pintarSalidaArriba();
        this.pintarSalidaAbajo();

    },
    mazmorraArribaDerecha: function() {
        this.limpiarTablero();
        this.mazmorraBase();
        this.pintarSalidaArriba();
        this.pintarSalidaDerecha();

    },
    mazmorraArribaIzquierda: function() {
        this.limpiarTablero();
        this.mazmorraBase();
        this.pintarSalidaArriba();
        this.pintarSalidaIzquierda();

    },
    mazmorraAbajoDerecha: function() {
        this.limpiarTablero();
        this.mazmorraBase();
        this.pintarSalidaAbajo();
        this.pintarSalidaDerecha();

    },
    mazmorraAbajoIzquierda: function() {
        this.limpiarTablero();
        this.mazmorraBase();
        this.pintarSalidaAbajo();
        this.pintarSalidaIzquierda();

    },
    mazmorraDerechaIzquierda: function() {
        this.limpiarTablero();
        this.mazmorraBase();
        this.pintarSalidaDerecha();
        this.pintarSalidaIzquierda();

    },
    //3 SALIDAS//
    mazmorraArribaAbajoDerecha: function() {
        this.limpiarTablero();
        this.mazmorraBase();
        this.pintarSalidaArriba();
        this.pintarSalidaAbajo();
        this.pintarSalidaDerecha();

    },
    mazmorraArribaAbajoIzquierda: function() {
        this.limpiarTablero();
        this.mazmorraBase();
        this.pintarSalidaArriba();
        this.pintarSalidaAbajo();
        this.pintarSalidaIzquierda();

    },
    mazmorraArribaDerechaIzquierda: function() {
        this.limpiarTablero();
        this.mazmorraBase();
        this.pintarSalidaArriba();
        this.pintarSalidaDerecha();
        this.pintarSalidaIzquierda();

    },
    mazmorraAbajoDerechaIzquierda: function() {
        this.limpiarTablero();
        this.mazmorraBase();
        this.pintarSalidaAbajo();
        this.pintarSalidaDerecha();
        this.pintarSalidaIzquierda();

    },
    // 4 salidas //
    todasSalidas: function() {
        this.limpiarTablero();
        this.mazmorraBase();
        this.pintarSalidaArriba();
        this.pintarSalidaAbajo();
        this.pintarSalidaDerecha();
        this.pintarSalidaIzquierda();

    },
    salaBoss: function() {
        this.limpiarTablero();
        this.mazmorraBase();
        this.pintarSalidaAbajo();
        this.boss=true;
    },
    actualizar: function(entrada) {
        var valorAleatorio;
        switch (entrada) {
            case "Ar":
                valorAleatorio = Math.floor((Math.random() * 7));
                switch (valorAleatorio) {
                    case 0:
                        this.mazmorraArribaAbajo();
                        break;
                    case 1:
                        this.mazmorraAbajoDerecha();
                        break;
                    case 2:
                        this.mazmorraAbajoIzquierda();
                        break;
                    case 3:
                        this.mazmorraAbajoDerechaIzquierda();
                        break;
                    case 4:
                        this.mazmorraArribaAbajoDerecha();
                        break;
                    case 5:
                        this.mazmorraArribaAbajoIzquierda();
                        break;
                    case 6:
                        this.salaBoss();
                        this.boss=true;
                        break;
                    default:
                        this.todasSalidas();
                }
                break;
            case "Ab":
                valorAleatorio = Math.floor((Math.random() * 7));
                switch (valorAleatorio) {
                    case 0:
                        this.mazmorraArribaAbajo();
                        break;
                    case 1:
                        this.mazmorraArribaDerecha();
                        break;
                    case 2:
                        this.mazmorraArribaIzquierda();
                        break;
                    case 3:
                        this.mazmorraArribaDerechaIzquierda();
                        break;
                    case 4:
                        this.mazmorraArribaAbajoDerecha();
                        break;
                    case 5:
                        this.mazmorraArribaAbajoIzquierda();
                        break;
                    case 6:
                        this.todasSalidas();
                        break;
                    default:
                        this.todasSalidas();
                }
                break;
            case "D":
                valorAleatorio = Math.floor((Math.random() * 7));
                switch (valorAleatorio) {
                    case 0:
                        this.mazmorraDerechaIzquierda();
                        break;
                    case 1:
                        this.mazmorraArribaIzquierda();
                        break;
                    case 2:
                        this.mazmorraAbajoIzquierda();
                        break;
                    case 3:
                        this.mazmorraArribaDerechaIzquierda();
                        break;
                    case 4:
                        this.mazmorraAbajoDerechaIzquierda();
                        break;
                    case 5:
                        this.mazmorraArribaAbajoIzquierda();
                        break;
                    case 6:
                        this.todasSalidas();
                        break;
                    default:
                        this.todasSalidas();
                }
                break;
            case "I":
            valorAleatorio = Math.floor((Math.random() * 7));
            switch (valorAleatorio) {
                case 0:
                    this.mazmorraDerechaIzquierda();
                    break;
                case 1:
                    this.mazmorraArribaDerecha();
                    break;
                case 2:
                    this.mazmorraAbajoDerecha();
                    break;
                case 3:
                    this.mazmorraArribaDerechaIzquierda();
                    break;
                case 4:
                    this.mazmorraAbajoDerechaIzquierda();
                    break;
                case 5:
                    this.mazmorraArribaAbajoDerecha();
                    break;
                case 6:
                    this.todasSalidas();
                    break;
                default:
                    this.todasSalidas();
            }
                break;
            default:
        }
    },
    generarMapa: function() {
        this.crearTablero();
        this.todasSalidas();
    }
};
var tableroJuego = new Tablero();
tableroJuego.generarMapa();
