//NO FUNCIONA
function pintarCasilla(elm) {

    var colorPintar;
    /*  var listaPintar=document.getElementsByClassName('coloresLista')[0];
    for (var i = 0; i < 3; i++) {
      if (listaPintar.children[i].checked===true) {
         colorPintar =listaPintar.children[i].background;
      }
    }*/

if (elm.children.length<1) {
  var t = document.createTextNode('X');
  elm.appendChild(t);
}


    elm.background = colorPintar;

}


//Revisar
function cargarListaColores() {

    var ul = document.createElement("UL");
    for (var i = 0; i < 3; i++) {
        var coloresLocal = localStorage.getItem("claveColor" + (i + 1));
        var li = document.createElement("LI");
        var radioBtn = document.createElement("INPUT");
        var t = document.createTextNode(coloresLocal);
        radioBtn.type = "radio";
        radioBtn.name = "color";

        li.style.color = coloresLocal;
        li.className = "coloresLista";
        li.appendChild(t);
        radioBtn.checked = true;
        li.appendChild(radioBtn);

        ul.appendChild(li);
        ul.className = "listaColores";
    }
    document.getElementById('bloque2').appendChild(ul);
}

function cargarListaEstilos() {
    var ul = document.createElement("UL");
    for (var i = 0; i < 2; i++) {
        var li = document.createElement("LI");
        var radioBtn = document.createElement("INPUT");
        var t;
        radioBtn.type = "radio";
        radioBtn.name = "estilo";

        switch (i) {
            case 0:
                t = document.createTextNode("Normal");
                li.appendChild(t);
                radioBtn.checked = true;
                break;
            case 1:
                t = document.createTextNode("Bold");
                li.appendChild(t);
                break;
            default:
                console.log(-1);
        }
        li.className = "estiloLista";
        li.appendChild(radioBtn);

        ul.appendChild(li);
        ul.className = "listaEstilos";
    }
    document.getElementById('bloque2').appendChild(ul);
}

function cargar() {
    crearTabla();
    cargarListaEstilos();
    if ( localStorage.getItem('claveColor1') !==null) {
  document.getElementById('bloque1').style.display = "none";
        cargarListaColores();

    }



}
//FUNCIONA





function añadirColores() {
    var padre = document.getElementById('bloque1');
    var color1 = padre.children[0].value;
    var color2 = padre.children[1].value;
    var color3 = padre.children[2].value;

    localStorage.setItem("claveColor1", color1);
    localStorage.setItem("claveColor2", color2);
    localStorage.setItem("claveColor3", color3);
    localStorage.setItem("hayColor", true);
    cargarListaColores();
    document.getElementById('bloque1').style.display = "none";
}


function crearTabla() {
    var tamañoTabla = 10;
    var tabla = document.createElement("TABLE");
    for (var i = 0; i < tamañoTabla; i++) {
        var tr = document.createElement("TR");
        for (var j = 0; j < tamañoTabla; j++) {
            var td = document.createElement("TD");
            td.addEventListener("click", function() {

                pintarCasilla(this);

            });
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
    document.getElementById('zonaTabla').appendChild(tabla);
}
function limpiarTabla(){
  var tabla= document.getElementById('zonaTabla');
  tabla.removeChild(tabla.childNodes[0]);
  crearTabla();
}
function limpiarWS() {
  if (localStorage.getItem('claveColor1')!==null) {
    var bloque=document.getElementById('bloque2');
    localStorage.clear();
    bloque.removeChild(bloque.childNodes[1]);
    document.getElementById('bloque1').style.display = "block";
  }

}
