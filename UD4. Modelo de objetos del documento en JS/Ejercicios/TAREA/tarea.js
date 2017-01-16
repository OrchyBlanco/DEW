//NO FUNCIONA


//REVISAR



//FUNCIONA
function crearTabla() {
    var tabla = document.createElement("TABLE");
    for (var i = 0; i < 30; i++) {
        var tr = document.createElement("TR");
        for (var j = 0; j < 30; j++) {
            var td = document.createElement("TD");
            td.id = "casilla" + i + j;
            td.addEventListener("click", function() {
                if (document.getElementsByClassName('selected')[0].id == "pincel") {
                    pintarCasilla(this);
                }
                if (document.getElementsByClassName('selected')[0].id == "brocha") {
                    pintarBrocha(this);
                }
            });
            //Añadimos el parametro this para hacer referencia al nodo seleccionado.
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
    document.getElementById('zonadibujo').appendChild(tabla);
}

function seleccionarColor(event) {
    var nodo = event.target;
    nodo.parentElement.getElementsByClassName('seleccionado')[0].classList.remove("seleccionado");
    nodo.classList.add("seleccionado");
}

function seleccionarPintar(event) {
    var node = event.target;
    node.parentElement.getElementsByClassName('selected')[0].classList.remove("selected");
    node.classList.add("selected");
}

function pintarCasilla(elm) {
    //Seleccionamos la primera clase del elemento(color) que tenga la clase 'seleccionado'
    var colorPintar = document.getElementsByClassName('seleccionado')[0].classList[0];
    elm.className = colorPintar; //Al elemenot pulsado le asignamos la clase del color,
}

function pintarElementosFila(casilla) {
    var casillaAnterior = casilla.previousSibling;
    var casillaPosterior = casilla.nextSibling;
    pintarCasilla(casilla);
    if (casillaAnterior !== null) {
        pintarCasilla(casillaAnterior);
    }
    if (casillaPosterior !== null) {
        pintarCasilla(casillaPosterior);
    }

}

function pintarBrocha(casilla) {
    var posicionCasilla = casilla.cellIndex;

    var fila = casilla.parentNode;
    var filaAnterior = fila.previousSibling;
    var filaPosterior = fila.nextSibling;

    pintarElementosFila(casilla);
    if (filaAnterior !== null) {
        pintarElementosFila(filaAnterior.children[posicionCasilla]); //Pintamos las 3 casillas de la fila anterior que estan encima de la casilla selecionada
    }
    if (filaPosterior !== null) {
        pintarElementosFila(filaPosterior.children[posicionCasilla]); //Pintamos las 3 casillas de la fila posterior que estan encima de la casilla selecionada

    }
}
