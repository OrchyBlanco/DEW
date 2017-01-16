
function limpiarCampos(nombreClase){
  for (var i = 0; i < document.getElementsByClassName(nombreClase).length; i++) {
    document.getElementsByClassName(nombreClase)[i].value="";
  }
}
function rellenarListaNumeros(nombreLista,nombreClase){
  for (var i = 0; i < document.getElementsByClassName(nombreClase).length; i++) {
      nombreLista.push(document.getElementsByClassName(nombreClase)[i].value);
  }

}
function rellenarListaObjetos(nombreLista,nombreClase){
  for (var i = 0; i < document.getElementsByClassName(nombreClase).length; i++) {
      nombreLista.push(document.getElementsByClassName(nombreClase)[i]);
  }
}
