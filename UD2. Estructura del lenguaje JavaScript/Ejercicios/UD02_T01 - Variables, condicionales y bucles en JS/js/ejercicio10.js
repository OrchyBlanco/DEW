function actividad10(letra1, letra2, nColumnas) {
    document.getElementById('resultadoActividad10').innerHTML = ""; // Limpiamos
    for (var i = 0; i < nColumnas; i++) {
        for (var j = nColumnas; j > i; j--) {
            if (j % 2 === 0) {
                document.getElementById('resultadoActividad10').innerHTML += "<span>"+letra1+"</span>";
            } else {
                document.getElementById('resultadoActividad10').innerHTML += letra2;
            }

        }
        document.getElementById('resultadoActividad10').innerHTML += "<br/>";
    }

}
