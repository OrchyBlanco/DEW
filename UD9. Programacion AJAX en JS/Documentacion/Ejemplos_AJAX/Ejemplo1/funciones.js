addEventListener('load',inicializarEventos,false);

/* En esta función se registra el evento click para todos los enlaces*/
function inicializarEventos()
{
  for(var f=1;f<=12;f++)
  {
    var ob=document.getElementById('enlace'+f);
    ob.addEventListener('click',presionEnlace,false);
  }
}

function presionEnlace(e)
{
    e.preventDefault(); // se desactiva la accción por defecto para el enlace
    var url=e.target.getAttribute('href');
    cargarHoroscopo(url); 
}

var conexion1; // variable de la conexión
function cargarHoroscopo(url) 
{
    // creación del objeto que nos permite comunicarnos con el servidor de manera asíncrona
  conexion1=new XMLHttpRequest();  
    // establecemos la función que será la encargada de procesar los datos enviados por el servidor
  conexion1.onreadystatechange = procesarEventos;
    // se establece el método para obtener los datos, url de la página que procesará los datos que mandemos y si se procesarán los datos de forma asíncron (true) o síncrona (false)
  conexion1.open("GET", url, true);
    // comienza el proceso
  conexion1.send();
}
/* Función llamada cada vez que el objeto conexion1 de la clase XMLHttpRequest cambia de estado*/
function procesarEventos()
{
  var detalles = document.getElementById("detalles");
  if(conexion1.readyState == 4)
  { // todos los datos han llegado del servidor y recuperamos la información enviada por el servidor
    detalles.innerHTML = conexion1.responseText;
  } 
  else 
  {
    detalles.innerHTML = 'Cargando...';
  }
}
