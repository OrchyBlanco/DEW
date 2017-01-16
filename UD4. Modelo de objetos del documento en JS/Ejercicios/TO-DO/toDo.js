//NO FUNCIONA

//REVISAR
function cargarLista() {
    for (var j = 0; j < localStorage.length; j++) {
        var claveComparar = "Elemento" + j;
        for (var i = 0; i < localStorage.length; i++) {
            var clave = localStorage.key(i);
            if (clave == claveComparar) {
                var li = document.createElement("li");
                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.name = "elementos";
                checkbox.value = localStorage.getItem(claveComparar);
                checkbox.id = claveComparar;
                var t = document.createTextNode(localStorage.getItem(claveComparar));
                li.appendChild(t);
                li.appendChild(checkbox);
                document.getElementById("myUL").appendChild(li);
            }
        }
    }
}

function eliminarSeleccionado() {
    var rmvCheckBoxes = document.getElementsByName('elementos');
    for (var i = localStorage.getItem("contador"); i >=0 ; i--) {
        if (rmvCheckBoxes.NodeList[i].checked===true) {
            var clav = rmvCheckBoxes[i].id;
            localStorage.removeItem(clav);
            removeElm(rmvCheckBoxes[i].parentElement);

        }
    }
}

function removeElm(elm) {
    elm.parentElement.removeChild(elm);
}
//FUNCIONA

if (localStorage.getItem("contador") === null) {
    localStorage.setItem("contador", 0);
}

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.name = "elementos";
    checkbox.value = inputValue;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    li.appendChild(checkbox);
    if (inputValue === '') {
        alert("Campo Vacío!");
    } else {
        document.getElementById("myUL").appendChild(li);
        guardarLocalStorage(inputValue);
    }
    document.getElementById("myInput").value = "";
}


function guardarLocalStorage(element) {
    var contador = localStorage.getItem("contador");
    var claveElemento = "Elemento" + contador;
    contador++;
    localStorage.setItem("contador", contador);
    localStorage.setItem(claveElemento, element);
}

function seleccionarTodo() {
    for (var i = 0; i < document.lista.elements.length; i++) {
        if (document.lista.elements[i].type == "checkbox") {
            document.lista.elements[i].checked = 1;
        }
    }
}

function deseleccionarTodo() {
    for (var i = 0; i < document.lista.elements.length; i++) {
        if (document.lista.elements[i].type == "checkbox") {
            document.lista.elements[i].checked = 0;
        }
    }
}
