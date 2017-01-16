
  var formulario=new Data();
  var islaSelecionada;
var datosIsla;
var datosDAW;
var datosUbicacion;
/*
function inicializar_mapa() {
  var myLatLng = {lat: 28.455929460706, lng: -16.2821384291814};

  var mapOptions = {
    center: new google.maps.LatLng(myLatLng),
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  //  markers: google.maps.Marker({position:myLatLng, title:"EL CESAR"})
  };

  var map = new google.maps.Map(document.getElementById("mapa_div"),
      mapOptions);
}*/

function initMap() {
  var myLatLng = {lat: 28.455929460706, lng: -16.2821384291814};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}
function CargarDATOS() {

   islaSelecionada=document.getElementById("selIsla").value;
   if (islaSelecionada!==null) {
     datosIsla=formulario.obtenerDatosIsla(datos,islaSelecionada);
   }

    datosDAW=formulario.obtenerDatosPorCiclo(datosIsla,"Desarrollo de aplicaciones web");
   //datosUbicacion=formulario.obtenerDatosUbicacion(datosDAW);

}
