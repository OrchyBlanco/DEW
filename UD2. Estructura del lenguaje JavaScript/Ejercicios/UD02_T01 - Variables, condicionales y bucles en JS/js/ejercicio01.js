//Realizado por: Jesús Manuel Torres Blanco
var claseResultado = document.getElementsByClassName('resultados');
// NOTIFICAR AL USUARIO QUE VALOR ES INCORRECTO. EL USUARIO ES MUY TONTO.
function actividad1() {

    var valor1 = document.getElementById('numero1').value;
    var valor2 = document.getElementById('numero2').value;
    var valor3 = document.getElementById('numero3').value;
    var valor4 = document.getElementById('numero4').value;
    var valor5 = document.getElementById('numero5').value;

    try {
      //!¡ Pendiente de realizar la funcion comprobarEntrada 
        if (valor1 == " " || valor2 == " " || valor3 == " " || valor4 == " " || valor5 == "") throw "Hay casillas vacías";
        if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4) || isNaN(valor5)) throw "Hay casillas que no son números";
        if (valor1 != parseInt(valor1) || valor2 != parseInt(valor2) ||
            valor3 != parseInt(valor3) || valor4 != parseInt(valor4) || valor5 != parseInt(valor5)) throw "Hay números que no son enteros";

        valor1 = Number(valor1);
        valor2 = Number(valor2);
        valor3 = Number(valor3);
        valor4 = Number(valor4);
        valor5 = Number(valor5);

        document.getElementById('actividad1MayorNum').innerHTML = Math.max(valor1, valor2, valor3, valor4, valor5);
        document.getElementById('actividad1MenorNum').innerHTML = Math.min(valor1, valor2, valor3, valor4, valor5);
        document.getElementById('actividad1Suma').innerHTML = calcularSumActividad1(valor1, valor2, valor3, valor4, valor5);
        document.getElementById('actividad1Media').innerHTML = calcularAvgActividad1(valor1, valor2, valor3, valor4, valor5);
        claseResultado[0].style.display = 'block';
    } catch (e) {
        alert("Error: " + e + ".");
    } finally {
        limpiarCampos('variablesActividad1');
    }
}

function calcularSumActividad1(valor1, valor2, valor3, valor4, valor5) {
    return valor1 + valor2 + valor3 + valor4 + valor5;
}

function calcularAvgActividad1(valor1, valor2, valor3, valor4, valor5) {
    return calcularSumActividad1(valor1, valor2, valor3, valor4, valor5) / 5;
}
