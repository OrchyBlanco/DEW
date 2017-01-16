function init() {
  setTimeout(ventanaHija(),2000);
  visitantes();
}

function ventanaHija() {

    var ventana = window.open("", "Hija", "width=450,height=450");
    escribirVentana(ventana);

}

function escribirVentana(ventana) {
    ventana.document.write('<html lang="es">' +
        '<head>' +

        '<title>JesúsManuelTorresBlanco</title>' +
        '</head>' +
        '<body >' +
        '<h3>Ejemplo de Ventana Nueva por Jesús Manuel Torres Blanco</h3>' +
        '<p id="uRLPagina" style="float:left">La URL de la pagina:' + window.location.href +
        ' </p>' +
        '<p id="protocoloPagina style="float:rigth""> Protocolo de la pagina:' + location.protocol + '</p>' +
        '<p id="nombreNavegador style="aling:center; clear:both;"> Nombre Navegador:' + navigator.appName + '</p>');
    if (navigator.javaEnabled() === true) {
        ventana.document.write('<p id="detectaJava"style="color:green">Java disponible</p>');
    } else {
        ventana.document.write('<p id="detectaJava" style="color:red">Java NO disponible</p>');
    }
    ventana.document.write('</body></html>');
}

/*MOSTRAR DATOS SEGUNDA VENTANA*/
function mostrarDatos() {

}









/*COOKIES y WebStorage*/

function setCookie(nombre, valor, dias) {
    var fechaExpCookie = new Date();
    fechaExpCookie.setTime(fechaExpCookie.getTime() + (dias * 24 * 60 * 60 * 1000));
    var expira = "expires=" + fechaExpCookie.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expira + ";path=/";
    //Escribe una cookie como :  nombre=valor;expires=fecha;path=/
}

function getCookie(nombreCookie) {
    var index = document.cookie.indexOf(nombreCookie + "=");
    if (index == -1) {
        return null;
    } else {
        index = document.cookie.indexOf("=", index) + 1;
        var endstr = document.cookie.indexOf(";", index);
        if (endstr == -1)
            endstr = document.cookie.length;
        return decodeURIComponent(document.cookie.substring(index, endstr));
    }

}

function visitantes() {
  var visitante = getCookie("Visitante");
  if (isNaN(visitante)) {
  setCookie("Visitante", "1", 7);
  visitante=0;
  } else {
    visitante++,
      setCookie("Visitante", visitante, 7);
  document.getElementById('nVisitante').innerHTML = "<p>Eres el visitante " + getCookie("Visitante") + "</p>";
  }
} 

function deleteAllCookies() {
   var cookies = document.cookie.split(";");

   for (var i = 0; i < cookies.length; i++) {
     var cookie = cookies[i];
     var eqPos = cookie.indexOf("=");
     var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
     document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
   }
}
