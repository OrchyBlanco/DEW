//EJERCICIO 1
var productos=[{nombre:"Libro", precio:20.5},
               {nombre:"Revista", precio:1.25},
               {nombre:"Cd", precio:13.75}];
//Declaramos un array de productos(Objeto) ya que al ser únicamente tres
//productos será mas facil accedes a sus propiedades
//En caso de que tengamos una lista de productos mas compleja es recomendable
//estructuras de clases.
function mostrarProductos() {
  var txt="";
  for (var i = 0; i < productos.length; i++) {
    txt+="<p>Nombre:<strong>"+productos[i]["nombre"]+
    "</strong> Precio: <strong>"+productos[i]["precio"]+
    "€</strong></p>";
  }
  document.getElementById('Productos').innerHTML=txt;
};
//FIN EJERCICIO 1

//EJERCICIO 2
function Cliente(nombre) {
  var _nombre=nombre;
  var _cantidadProductos=[0,0,0];
  var _IGIC=0.07;
  var _listaProductos=productos;

function calcularFacturaSinIGIC(){
    var total=0.0;
    for (var i = 0; i < _listaProductos.length; i++) {
        total+= cantidadProductos[i]*_listaProductos[i]["precio"];
    }
    return total;
  }
function  calcularFacturaTotal() {
    var total=calcularFacturaSinIGIC();
    total+=(calcularFacturaSinIGIC*_IGIC);
    return total;
  }
function  getNombre() {
    return _nombre;
  }
function  setCantidad(nLibros,nRevistas,nCds) {

    _cantidadProductos=[nLibros,nRevistas,nCds];
  }
function  getCantidad() {
    return _cantidadProductos;
  }

}


//FIN EJERCICIO 2

//EJERCICIO 3
  function ValidarNumero(valor) {
    if (isNaN(valor)) {
      return false
    }
    else {
      return true;
    }
  }
//FIN EJERCICIO 3
//EJERCICIO 4
function mostrarFactura(){
  var persona= Cliente(document.getElementById("PersonaCliente").value);
  var factura="";
  factura+="<p>"+persona.getNombre()+"</p>";
  for (var i = 0; i < productos.length; i++) {
    factura+="<p>"+Cliente+"</p>"
  }

}
//FIN EJERCICIO 4
