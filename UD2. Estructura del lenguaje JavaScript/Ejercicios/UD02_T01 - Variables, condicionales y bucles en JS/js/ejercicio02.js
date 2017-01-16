function actividad2() {

    var variablesDeCalculo = [];

    rellenarListaNumeros(variablesDeCalculo, 'variablesActividad2');

    try {
        for (var i = 0; i < variablesDeCalculo.length; i++) {
          //!¡ Pendiente de realizar la funcion comprobarEntrada 
            if (variablesDeCalculo[i] == " ") throw "Hay casillas vacías";
            if (variablesDeCalculo[i] != parseInt(variablesDeCalculo[i])) throw "La variable "+(i+1)+" no es entera."
            if (isNaN(variablesDeCalculo[i])) throw "Hay casillas que no son números";

            variablesDeCalculo[i] = Number(variablesDeCalculo[i]);
            if (variablesDeCalculo[i] < 0) throw "No se pueden usar valores negativos";

        }
        document.getElementById('actividad2MayorNum').innerHTML = Math.max(...variablesDeCalculo);
        document.getElementById('actividad2MenorNum').innerHTML = Math.min(...variablesDeCalculo);
        document.getElementById('actividad2Suma').innerHTML = calcularSum(variablesDeCalculo);
        document.getElementById('actividad2Media').innerHTML = calcularAvg(variablesDeCalculo);
        document.getElementById('actividad2Calificación').innerHTML = calcularCalificacion(calcularAvg(variablesDeCalculo));
        claseResultado[1].style.display = 'block';
        limpiarCampos('variablesActividad2');

    } catch (e) {
        alert("Error: " + e + ".");
    } finally {
        limpiarCampos('variablesActividad2');
    }
}

function calcularSum(listaElementos) {
    var total = 0;
    for (var i = 0; i < listaElementos.length; i++) {
        total += listaElementos[i];
    }
    return total;
}

function calcularAvg(listaElementos) {
    return calcularSum(listaElementos) / listaElementos.length;
}

function calcularCalificacion(mediaAritmetica) {
    if (mediaAritmetica > 5) {

        return "Aprobado";
    } else {
        return "Suspendido";
    }
}
