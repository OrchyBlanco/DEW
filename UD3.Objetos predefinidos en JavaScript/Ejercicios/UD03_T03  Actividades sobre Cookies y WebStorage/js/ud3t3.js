
function ejecutarMultiplesFunciones() {
  contarCookies();
  colorFondo();
}
//Crea una cookie recibiendo como parametros: nombre de la cookie, valor de la cookie, los minutos para que expire la cookie.
function setCookie(nombre, valor, minutos) {
    var fechaExpCookie = new Date();
    fechaExpCookie.setTime(fechaExpCookie.getTime() + (minutos * 60 * 1000));
    var expira = "expires=" + fechaExpCookie.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expira + ";path=/";
    //Escribe una cookie como :  nombre=valor;expires=fecha;path=/
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("colorFavorito");
    if (user !== "") {

    } else {
        user = prompt("Please enter your name:", "");
        if (user !== "" && user !== null) {
            setCookie("colorFavorito", color, 365);
        }
    }
}
//Actividad1 Ejercicio1
function contarCookies() {
    var txt = "";
    var contador = getCookie("contar");
    if (isNaN(contador)) {
        y = setCookie("contar", 0, 1);
        contador = 0;
    } else {
        contador++;
        y = setCookie("contar", contador, 1);
        txt += "<p>¡Visitastes esta pagina " + contador + " veces!</p>";
        txt += "<p> La hora de la ultima visita fué: " + When() + "</p>";
    }
    document.getElementById('contadorCookies').innerHTML = txt;
}
function When(info) {

    var rightNow = new Date();
    var WWHTime = getCookie('UltimaVisita');
    WWHTime = WWHTime * 1;
    var lastHereFormatting = new Date(WWHTime);
    var lastHereInDateFormat = "" + lastHereFormatting; // vamos a usar substring functions
    var lastVisit = lastHereInDateFormat.substring(15, 25);
    setCookie("UltimaVisita", rightNow.getTime(), 1);

    return lastVisit;
}

//Actividad1 Ejercicio2


colorFondo=function (){
  var colorCookie = getCookie("colorFavorito");

  if (colorCookie !== "") {

        document.getElementById('container').style.backgroundColor=getCookie("colorFavorito");
  } else {
      colorCookie = window.prompt("Color Favorito:", "");
      if (colorCookie !== "" && colorCookie !== null) {
        if (esHex(colorCookie)) {
          setCookie("colorFavorito", colorCookie, 1);
          document.getElementById('container').style.backgroundColor=getCookie("colorFavorito");
        }
        else {
          alert("ERROR AL INTRODUCIR EL COLOR: TIENE QUE SER HEXADECIMAL ");
            colorFondo();
        }
      }
  }
};

function esHex(h) {
  var re = /^#[0-9A-Fa-f]{6}$/g; //Empieza por # y le siguen 6 digitos entre [0-9] y[a-f]
  if(re.test(h)) {
      return true;
  } else {
    return false;
  }
  re.lastIndex = 0;
}

function eliminarCookie(cname) {
  setCookie(cname, "", -1);
}
//Para comprobar que se a eliminado correctamente podemos recargar la pagina o
//desde el inspector de elementos. 
