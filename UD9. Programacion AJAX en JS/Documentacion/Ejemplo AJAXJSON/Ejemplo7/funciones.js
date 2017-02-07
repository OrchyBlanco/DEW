addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  var ob=document.getElementById('boton1');
  ob.addEventListener('click',presionBoton,false);
}

function presionBoton(e)
{
  var ob=document.getElementById('dni');
  recuperarDatos(ob.value);
}


var conexion1;
function recuperarDatos(dni) 
{
  conexion1=new XMLHttpRequest();
  conexion1.onreadystatechange = procesarEventos;
  conexion1.open('GET','pagina7.php?dni='+dni, true);
  conexion1.send();
}

function procesarEventos()
{
  var resultados = document.getElementById("resultados");
  if(conexion1.readyState == 4)
  {
    var datos=JSON.parse(conexion1.responseText);
    var salida = "Apellido:"+datos.apellido+"<br>";
    salida=salida+"Nombre:"+datos.nombre+"<br>";
    salida=salida+"Dirección donde debe votar:"+datos.direccion;
    resultados.innerHTML = salida;
  } 
  else 
  {
    resultados.innerHTML = "Cargando...";
  }
}
