function actividad5() {


    var numeroRecibido = document.getElementById('variableActividad5').value;
    var numeroCaracteres = numeroRecibido.length;
    var sumaCaracteres = 0;

    try {
        if (isNaN(numeroRecibido) || numeroRecibido==" ") throw "Valor introducido no es un número";

        for (var i = 0; i < numeroCaracteres; i++) {
            sumaCaracteres += Number.parseInt(numeroRecibido.substr(i, 1),10);
        }
        window.alert("El número " + numeroRecibido +
            " tiene " + numeroCaracteres + " digitos y la suma de estos es: " + sumaCaracteres);

    } catch (e) {
        alert("Error: " + e + ".");
    } finally {
        limpiarCampos('variablesActividad5');
    }

}
