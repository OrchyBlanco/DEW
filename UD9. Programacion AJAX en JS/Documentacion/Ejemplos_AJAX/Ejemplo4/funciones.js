addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  var ob=document.getElementById('boton1');
  ob.addEventListener('click',presionBoton,false);
}

function presionBoton(e)
{
  var ob1=document.getElementById('pais');
  recuperarDatos(ob1.value);
}

var conexion1;
function recuperarDatos(pais) 
{
  conexion1=new XMLHttpRequest();
  conexion1.onreadystatechange = procesarEventos;
  conexion1.open('GET','pagina4.php?pa='+pais, true);
  conexion1.send();
}

function procesarEventos()
{
  var resultados = document.getElementById("resultados");

  if(conexion1.readyState == 4)
  {
    var xml = conexion1.responseXML;
    var capital=xml.getElementsByTagName('capital');
    var superficie=xml.getElementsByTagName('superficie');
    var idioma=xml.getElementsByTagName('idioma');
    var poblacion=xml.getElementsByTagName('poblacion');
    resultados.innerHTML='Capital='+capital[0].firstChild.nodeValue + '<br>' +
                         'Superficie='+superficie[0].firstChild.nodeValue + '<br>' +
                         'Idioma='+idioma[0].firstChild.nodeValue + '<br>' +
                         'Poblacion='+poblacion[0].firstChild.nodeValue ;                       
  } 
  else 
  {
    resultados.innerHTML = 'Cargando...';
  }
}
