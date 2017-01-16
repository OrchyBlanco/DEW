function mostrarResolucion() {
    alert("La resolución de tu pantalla es :" + screen.width + "x" + screen.height);
}

function propiedadesNavigator() {
    var txt = "";
    txt += "<p>Navegador CodeName: " + navigator.appCodeName + "</p>";
    txt += "<p>Navegador Name: " + navigator.appName + "</p>";
    txt += "<p>Navegador Version: " + navigator.appVersion + "</p>";
    txt += "<p>Cookies Activadas: " + navigator.cookieEnabled + "</p>";
    txt += "<p>Navegador Idioma: " + navigator.language + "</p>";
    txt += "<p>Navegador Online: " + navigator.onLine + "</p>";
    txt += "<p>Platform: " + navigator.platform + "</p>";
    txt += "<p>User-agent header: " + navigator.userAgent + "</p>";
    document.write(txt);

}

function propiedadesLocation() {
    var txt = "";
    txt += "<p> Protocolo: " + location.protocol + "</p>";
    txt += "<p> Puerto: " + location.port + "</p>";
    txt += "<p> URL de pagina: " + location.href + "</p>";
    txt += "<p>  Número Plugins: " + navigator.plugins.length + "</p>";
    for (var i = 0; i < navigator.plugins.length; i++) {
        txt += "<p>" + navigator.plugins[i].name + "</p>";
    }
    document.write(txt);
}

function calculo() {
    var numeroA, numeroB, txt = "";
    numeroA = obtenerNumero(document.getElementById('numeroA').value);
    numeroB = obtenerNumero(document.getElementById('numeroB').value);
    if (isNaN(numeroA) || isNaN(numeroB)) {
        txt="<p> Por Favor introduce datos correctos </p>"
        document.getElementById('Resultados1').innerHTML = txt;
        txt="";
    } else {
        txt += "<p>Logaritmo neperiano  de A: " + Math.log(numeroA) + "</p>";
        txt += "<p>raíz cuadrada de A: " + Math.sqrt(numeroA) + "</p>";
        txt += "<p>A elevado a B" + Math.pow(numeroA, numeroB) + "</p>";
        txt += "<p>Numero entero más cercano y menor a A " + Math.floor(numeroA) + "</p>";
        txt += "<p>Numero entero más cercano y mayor a B  " + Math.ceil(numeroB) + "</p>";
        txt += "<p>redondea al entero más próximo de A " + Math.fround(numeroA) + "</p>";
        txt += "<p>crear un número aleatorio entre 0 y 1  " + Math.random() + "</p>";
        txt += "<p>número aleatorio entre A y B " + (Math.random() * (Math.min(numeroA, numeroB) - Math.max(numeroA, numeroB)) - Math.min(numeroA, numeroB)) + "</p>";
        txt += "<p>Seno de B (radianes) " + (Math.PI * Math.sin(numeroB) / 180) + "</p>";
        txt += "<p>Coseno de B (radianes)" + (Math.PI * Math.cos(numeroB) / 180) + "</p>";
        txt += "<p>Tangente de B (radianes)" + (Math.PI * Math.tan(numeroB) / 180) + "</p>";
        txt += "<p>Valor absoluto de A " + Math.abs(numeroA) + "</p>";
        txt += "<p>Valor maximo entre A y B " + Math.max(numeroA, numeroB) + "</p>";
        txt += "<p>Valor minimo entra A y B " + Math.min(numeroA, numeroB) + "</p>";
        document.getElementById('Resultados1').innerHTML = txt;
        txt = "";
    }
}

function hipotenusa() {
    var numeroA, numeroB, txt = "";
    numeroA = obtenerNumero(document.getElementById('catetoA').value);
    numeroB = obtenerNumero(document.getElementById('catetoB').value);
    txt = "<p> Hipotenusa: " + (Math.pow(numeroA, 2) + Math.pow(numeroB, 2)) + "</p>";
    document.getElementById('Resultados2').innerHTML = txt;
}

function obtenerNumero(valorIntroducido) {
    var numero;
    numero = valorIntroducido;
    numero.replace(/^\s+|\s+$/g, "");
    if (isNaN(numero)||numero==="") {
        return NaN;
    } else {
        return numero;
    }

}

function darleLaVueltaCaracteres(arg_str) {
    var indice = this.length;
    var cadena = "";
    while (x >= 0) {
        cadena += this.charAt(x);
        x--;
    }
    document.getElementById('resultadopalabra1').innerHTML = "<p>" + cadena + "</p>";
    return cadena;
}

function darleLaVueltaPalabras(arg_str) {
    var cadena = arg_str.split(' ').reverse().join();
    document.getElementById('resultadopalabra2').innerHTML = "<p>" + cadena + "</p>";
    return cadena;
}

function laFrase(arg_str) {
    arg_str.trim();
    var indice = arg_str.length;
    var cadena = "";
    for (var i = 0; i < indice; i++) {
        if (i = 0) {
            cadena += arg_str.toUpperCase(i);
        } else {
            cadena += arg_str.toLowerCase(i);
        }
    }
    document.getElementById('resultadopalabra3').innerHTML = "<p>" + cadena + "</p>";
    return cadena;
}
function esNumero(valor) {
    if (/[0-9]+/g.test(valor)) {
        return true;
    } else {
        return false;
    }
}
