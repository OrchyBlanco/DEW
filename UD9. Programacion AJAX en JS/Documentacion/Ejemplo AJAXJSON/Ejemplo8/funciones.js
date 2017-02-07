addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  var ref=document.getElementById('boton1');
  ref.addEventListener('click',botonPresionado,false);
}

function botonPresionado(e)
{
  var obj={
    nombre:'juan',
    edad:25,
    sueldos:[1200,1700,1990]
  };
  var cadena=JSON.stringify(obj);
  enviarDatos(cadena);
}

var conexion1;
function enviarDatos(cadena) 
{
  conexion1=new XMLHttpRequest();
  conexion1.onreadystatechange = procesarEventos;
  conexion1.open('GET','pagina8.php?cadena='+cadena, true);
  conexion1.send(null);
}

function procesarEventos()
{
  var resultados = document.getElementById("resultados");
  if(conexion1.readyState == 4)
  {
    resultados.innerHTML = conexion1.responseText;
  } 
  else 
  {
    resultados.innerHTML = "Cargando...";
  }
}
