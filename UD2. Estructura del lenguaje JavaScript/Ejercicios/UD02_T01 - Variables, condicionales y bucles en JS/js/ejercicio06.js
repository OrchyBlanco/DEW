function actividad6() {
    var palabreRecibida = document.getElementById('textoActividad6').value;
    palabreRecibida= palabreRecibida.trim(); //Eliminamos espacios begin/end
    switch (palabreRecibida) {
        case "profesor":
        case "Profesor":
            document.getElementById('resultadoActividad6').innerHTML="Teacher";
            break;
        case "mar":
        case "Mar":
            document.getElementById('resultadoActividad6').innerHTML="Sea";
            break;
        case "manzana":
        case "Manzana":
            document.getElementById('resultadoActividad6').innerHTML="Apple";

            break;
        case "servidor":
        case "Servidor":
            document.getElementById('resultadoActividad6').innerHTML="Server";
            break;
        default:
            window.alert("Datos solicitados Incorrectos");
    }
    limpiarCampos('textosActividad6');
}
