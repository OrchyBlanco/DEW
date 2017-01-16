function actividad9(letra,nColumnas){
  
  document.getElementById('resultadoActividad9').innerHTML="";// Limpiamos
  for (var i = 0; i < nColumnas; i++) {
    for (var j = nColumnas; j > i; j--) {
        document.getElementById('resultadoActividad9').innerHTML+=letra;
    }
    document.getElementById('resultadoActividad9').innerHTML+="<br/>";
  }

}
