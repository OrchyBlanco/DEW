function actividad4() {
    var numeroVentana = window.prompt("Por favor introduzca un número: ");
    if (isNaN(numeroVentana) || numeroVentana == " ") {
        alert("¡¡No has introducido un número!!");
    } else if (numeroVentana != parseInt(numeroVentana)) {
        alert("¡El numero introducido no es entero!");
    } else {
        window.alert(numeroVentana + " * 10 + 7 = " + (numeroVentana * 10 + 7));
    }
}
