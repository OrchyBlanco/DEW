var Data=Data||{};

Data=function() {

};

Data.prototype = {

  obtenerDatosIsla:function(arrayObject,nombreIsla) {
    var datosPorIsla=[];
    for (var i = 0; i < arrayObject.length; i++) {
      if (arrayObject[i].isla==nombreIsla) {
        datosPorIsla.push(arrayObject[i]);
      }
    }
    return datosPorIsla;
  },
  obtenerDatosPorModalidad:function (arrayObject,modalidad) {
    var datosPorModalidad=[];
    for (var i = 0; i < arrayObject.length; i++) {
      if (arrayObject[i].modalidad==modalidad) {
        datosPorModalidad.push(arrayObject[i]);
      }
    }
    return datosPorModalidad;
  },
  obtenerDatosPorNivel:function (arrayObject,nivel) {
    var datosPorNivel=[];
    for (var i = 0; i < arrayObject.length; i++) {
      if (arrayObject[i].nivel==nivel) {
        datosPorNivel.push(arrayObject[i]);
      }
    }
    return datosPorNivel;
  },
  obtenerDatosPorCiclo:function (arrayObject,nombreCiclo) {
    var datosPorCiclo=[];
    for (var i = 0; i < arrayObject.length; i++) {
      if (arrayObject[i].ciclo.includes(nombreCiclo)) {
        datosPorCiclo.push(arrayObject[i]);
      }
    }
    return datosPorCiclo;
  },
  obtenerDatosUbicacion:function (arrayObject) {
    var datosUbicacion=[];
    for (var i = 0; i < arrayObject.length; i++) {

        datosUbicacion.push({longitud:arrayObject[i].longitud,latitud:arrayObject[i].latitud});

    }
    return datosUbicacion;
  }

//document.getElementsByName("selModalidad")[0].value
};
