//EJERCICIO1
function ejercicio1() {
    var textoFormato = "generado desde JS un texto con distinto formatos";
    var txt = "";
    txt += "<p>Enlace <a href='/'>" + textoFormato + "</a></p>";
    txt += "<p>Con un tamaño de fuente de 5px <span style='font-size:5px;'>" +
        textoFormato + "</span></p>";
    txt += "<p>Escribien superíndices <sup>" + textoFormato + "</sup></p>";
    txt += "<p>Escribien subíndices <sub>" + textoFormato + "</sub></p>";
    txt += "<p>Le damos formato cursiva <em>" + textoFormato + "</em></p>";
    txt += "<p>y por último, algo de color <span style='color:red;'>" + textoFormato + "</span></p>";
    txt += "<p>y por último, algo de color y en cursiva <em style='color:red;'>" + textoFormato + "</em></p>";
    document.getElementById("ejercicio1").innerHTML = txt;
}
//EJERCICIO2
function ejercicio2() {
    var fecha=new Date();
    var padreVentana = window.open();
    padreVentana.document.write('<html lang="es">' +
        '<head>' +
        '<script src="js/ud3t2.js"></script>'+
        '<title>JesúsManuelTorresBlanco</title>' +
        '</head>'+
        '<body>' +
          '<h1>Jesús Manuel</h1>'+
          '<h2>Torres</h2>'+
          '<h3>'+ fecha.getDate() + '/' + fecha.getMonth() + '/' + fecha.getFullYear()+'</h3>'+
          '<select>'+
            '<option>Tenerife</option>'+
            '<option>Gran Canaria</option>'+
            '<option>Lanzarote</option>'+
            '<option>Fuerteventura</option>'+
            '<option>Gomera</option>'+
            '<option>La Palma</option>'+
            '<option>Hierro</option>'+
        '</select>'+
        '<button type="button" onclick="abrirVentanaHija()">Abrir ventana Hija</button>' +
        '</body>' +
        '</html>');
}
function abrirVentanaHija() {
    var hijaVentana = window.open("", "Hija", "width=250,height=150");
    hijaVentana.document.write('<html lang="es">' +
        '<head>' +
        '<title>VentanaTEST</title>' +
        '</head>' +
        '<body onunload= "opener.location.href=\'http://www.elpais.com\'"">' +
        '<p>Nueva</p>' +
        '</body>' +
        '</html>');
}

//EJERICIO3
function ejercicio3() {
  var color=document.getElementById("ej3Color").value;
  if (esHex(color)) {
 document.bgColor=color;
 document.getElementById('noControlado').innerHTML="";
  } else {
  window.alert("Introduzca un color con formato Hexadecimal: (#000000 - #FFFFFF)");
  document.getElementById('noControlado').innerHTML="El color elegido no está controlado";
  }
}
function esHex(h) {
  var re = /^#[0-9A-Fa-f]{6}$/g; //Empieza por # y le siguen 6 digitos entre [0-9] y[a-f]
  if(re.test(h)) {
      return true;
  } else {
    return false;
  }
  re.lastIndex = 0;
}

//EJERICIO 4
function ejercicio4() {
  var ej4Ventana= window.open();
  ej4Ventana.document.write('<html lang="es">' +
      '<head>' +
      '<script src="js/ud3t2.js"></script>'+
      '<script>setInterval(cambiarColor, 5000);</script>'+
      '<title>JesúsManuelTorresBlanco</title>' +
      '</head>'+
      '<body >' +
      //'<button type="button"onclick="setInterval(cambiarColor, 5000);">color</button>' +
        '<h1 id="nombre" onload="setInterval(cambiarColor, 5000);" >Jesús Manuel</h1>'+
      '</body>' +
      '</html>');

}
function cambiarColor() {
  var lineaCambiar=document.getElementById('nombre');
  var color=crearColorHexa();
  lineaCambiar.style.color=color;
}
function crearColorHexa() {
    var hexadecimal = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
    var color_aleatorio = "#";
    for (i = 0; i < 6; i++) {
        posarray = aleatorio(0, hexadecimal.length);
        color_aleatorio += hexadecimal[posarray];
    }
    return color_aleatorio;
}
function aleatorio(inferior,superior){
   numPosibilidades = superior - inferior;
   aleat = Math.random() * numPosibilidades;
   aleat = Math.floor(aleat);
   return parseInt(inferior) + aleat;
}

//Ejercicio 5
var ej5Ventana;
function ejercicio5() {
   ej5Ventana= window.open();
   ej5Ventana.document.write('<html lang="es">' +
      '<head>' +
      '<script src="js/ud3t2.js"></script>'+
      '<script>setTimeout(ventanaCincoSeg, 2000);</script>'+
      '<title>JesúsManuelTorresBlanco</title>' +
      '</head>'+
      '<body >' +
      '<p>Abrir página que se autodestruirá a los 2 segundos</p>'+
      '</body>' +
      '</html>');
    setTimeout(cerrarVentana, 7000);
}
function cerrarVentana() {
  ej5Ventana.close();
}
function ventanaCincoSeg() {
  var ej5VentanaHija= window.open();
  ej5VentanaHija.document.write('<html lang="es">' +
      '<head>' +
      '<script src="js/ud3t2.js"></script>'+
      '<script>ej5Ventana.close();</script>'+
      '<title>JesúsManuelTorresBlanco</title>' +
      '</head>'+
      '<body >' +
      '<p>Realmente se destruirá en 5 segundos</p>'+
      '</body>' +
      '</html>');

}

//Ejercicio 6
 var variableIntervalo=setInterval(myTimer, 1000);


 function myTimer() {
    var d = new Date();
    document.getElementById("reloj").innerHTML = d.toLocaleTimeString();
    horasComidas(d);
}
function horasComidas(hora) {
    var horaComparar=hora.getHours();
    if (horaComparar>=5 && horaComparar<=12) {
      document.getElementById("mensajeComida").innerHTML ="buenos días";
      document.getElementById("imgComida").src="img/desayuno.jpg";
    }
    if (horaComparar>=13 && horaComparar<=15) {
      document.getElementById("mensajeComida").innerHTML = "Mediodía";
      document.getElementById("imgComida").src="img/merienda.jpg";
    }
    if (horaComparar>=16 && horaComparar<=22) {
      document.getElementById("mensajeComida").innerHTML ="Hora de Cenar";
      document.getElementById("imgComida").src="img/cena.jpg";
    }
    else {
      document.getElementById("mensajeComida").innerHTML ="A Currar";
      document.getElementById("imgComida").src="";
    }
}
