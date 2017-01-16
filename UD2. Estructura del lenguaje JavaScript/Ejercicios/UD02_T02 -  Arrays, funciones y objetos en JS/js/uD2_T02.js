//EJERCICIO 1
var listaClase = [{
    nombre: "Pepe",
    nota: 1
}, {
    nombre: "Marta",
    nota: 2
}, {
    nombre: "Juan",
    nota: 3
}, {
    nombre: "Pepe",
    nota: 4
}, {
    nombre: "Jesus",
    nota: 5
}];

function esNumero(valor) {
    if (typeof valor == 'number') {
        return true;
    } else {
        return false;
    }
}

function buscarAlumno(nombreBuscar) {

    var resultadoBusqueda = [];
    for (var i in listaClase) {
        if (listaClase[i].nombre == nombreBuscar) {
            resultadoBusqueda.push(listaClase[i]);
        }
    }

    return resultadoBusqueda;
}

function mostrarLista(nombreLista) {
    var resultadoMostrar = "";
    for (var i in nombreLista) {
        resultadoMostrar += "<p>" + nombreLista[i].nombre + ":" + nombreLista[i].nota + "</p>";
    }
    if (resultadoMostrar === "") {
        resultadoMostrar = "NADA ENCONTRADO";
    }
    return resultadoMostrar;
}

function cambiarNota(nombreAlumno, nuevaNota) {

    var listaAlumnosEncontrados = buscarAlumno(nombreAlumno);
    for (var i in listaAlumnosEncontrados) {
        var comprobar = confirm(" ¿Quieres cambiar la nota de: " +
            listaAlumnosEncontrados[i].nombre +
            " cuya nota actual es: " +
            listaAlumnosEncontrados[i].nota + "?");
        if (comprobar === true) {
            listaAlumnosEncontrados[i].nota = nuevaNota;
        }
    }
}

function maxNota() {
    var tablaNotasMax = [];
    var nombreNotasMax = []; //Array de Objetos
    var valorMax;
    var notasMaxima = []; //Array de notas
    var alumnosMaxNota = [];
    for (var i in listaClase) {
        nombreNotasMax.push(listaClase[i]);
        notasMaxima.push(nombreNotasMax[i].nota);
    }
    valorMax = Math.max(...notasMaxima);
    for (var k in nombreNotasMax) {
        if (nombreNotasMax[k].nota === valorMax) {
            alumnosMaxNota.push(nombreNotasMax[k].nombre);
        }
    }
    return alumnosMaxNota;
}

function minNota() {
    var tablaNotasMin = [];
    var nombreNotasMin = [];
    var valorMin;
    var notasMinima = [];
    var alumnosMinNota = [];
    for (var i in listaClase) {
        nombreNotasMin.push(listaClase[i]);
        notasMinima.push(nombreNotasMin[i].nota);
    }
    valorMin = Math.min(...notasMinima);
    for (var k in nombreNotasMin) {
        if (nombreNotasMin[k].nota === valorMin) {
            alumnosMinNota.push(nombreNotasMin[k].nombre);
        }
    }
    return alumnosMinNota;
}

function media(nombreLista) {
    var suma = 0;
    for (var i = 0; i < nombreLista.length; i++) {
        suma += nombreLista[i].nota;
    }
    var vmedia = suma / nombreLista.length;
    return "Media: " + vmedia;
}

//EJERCICIO 2

var CargoDia=10;
var CargoASumar=0.5;
var numeroHoras = document.getElementById('horasEstacionadas').value;

function calcularCargos() {

    var txt = "Error al introducir los datos";
    if (esNumero(numeroHoras) && numeroHoras >= 0) {
        return numeroHoras;
    } else {
        return txt;
    }
}
function cargoPorDia(horas) {
  var abono=2;
  if (horas>3) {
    abono+=abono+(CargoASumar*horas/2);
  }
  if (horas>6) {
    
  }
}

function cargoPorMasDeUnDia(horas) {
  var numeroDias=Math.floor(horas/24);
  var horasUltimoDia=horas%24;

}

function esNumero(valor) {
    if (/[0-9]+/g.test(valor)) {
        return true;
    } else {
        return false;
    }
}

//EJERCICIO 3

function Libro(titulo, propietario, paginas, autor) {
    this.titulo = titulo;
    this.propietario = propietario;
    this.paginas = paginas;
    this.autor = autor;
}
Libro.prototype.mostrarConsola = function() {
    console.log("Has leído las " + this.paginas + " páginas de " + this.titulo);
};
Libro.prototype.leiste = function() {
    console.log("Has leído '" + this.titulo + "'");
};

var numeroLibros = 5;
var Libros = [];
for (var i = 0; i < numeroLibros; i++) {

    titulo = "titulo" + i;
    propietario = "propietario" + i;
    paginas = "paginas" + i;
    autor = "autor" + i;
    objLibro = new Libro(titulo, propietario, paginas, autor);
    Libros.push(objLibro);
}

function mostrarListaLibros(nombreLista) {
    var resultadoMostrar = "";
    for (var i in nombreLista) {
        resultadoMostrar += "<p>" + nombreLista[i].titulo + ", " + nombreLista[i].propietario + ", " +
            nombreLista[i].paginas + ", " + nombreLista[i].autor + "</p>";
    }
    if (resultadoMostrar === "") {
        resultadoMostrar = "NADA ENCONTRADO";
    }
    return resultadoMostrar;
}
function mostrarDatos() {

    document.getElementById('datos').innerHTML = mostrarLista(listaClase);
    document.getElementById('datosLibros').innerHTML = mostrarListaLibros(Libros);
}
