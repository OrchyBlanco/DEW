(function() {
    'use strict';

    var inbox = document.querySelectorAll('.inbox');
    inbox[0].id = "lista";
    inbox[1].id = "cliente";

    inbox[2].id = "servidor";

    var checkBoxList = document.querySelector('#lista');

    var init;
    var fin;

    for (var i = checkBoxList.children.length - 1; i >= 0; i--) {
        checkBoxList.children[i].id = i;
        checkBoxList.children[i].children[0].checked = false;
        checkBoxList.children[i].setAttribute('draggable', true);
    }

    checkBoxList.addEventListener('drag', function(e) {
        if (e.target) {

            console.log("Elemento " + e.target + " agarrado");
        }
    });

    function shiftPulsado(e) {
        if (e.shiftKey) {
            return true;
        } else {
            return false;
        }
    }

    function posicionLista(e) {
        return parseInt(e.target.parentNode.id);
    }

    function marcarCasillas() {
        if (init < fin) {
            for (var i = init; i < fin; i++) {
                checkBoxList.children[i].children[0].checked = true;
            }
            fin = undefined;
            console.log("FIN DESASIGNADO ");
        }
        if (fin < init) {
            for (var j = fin; j < init; j++) {
                checkBoxList.children[j].children[0].checked = true;
            }
            fin = undefined;
            console.log("FIN DESASIGNADO");
        }
    }

    function desmarcarCasillas() {
        if (init < fin) {

            for (var i = init; i < fin; i++) {

                checkBoxList.children[i].children[0].checked = false;
            }
            init = undefined;
            console.log("INIT DESASIGNADO");
            fin = undefined;
            console.log("FIN DESASIGNADO");
        }

        if (fin < init) {
            for (var j = fin; j < init; j++) {
                checkBoxList.children[j].children[0].checked = false;
            }
            init = undefined;
            console.log("INIT DESASIGNADO");
            fin = undefined;
            console.log("FIN DESASIGNADO");
        }
    }

    checkBoxList.addEventListener('click', function(e) {

        if (e.target) {

            if (shiftPulsado(e)) {
                console.log("FUNCIONA: Shift pulsado");
                if (init === undefined) {
                    init = posicionLista(e);
                    console.log("INIT ASIGNADO " + init);
                } else if (fin === undefined) {
                    fin = posicionLista(e);
                    console.log("FIN ASIGNADO " + fin);
                }
                if (fin !== undefined && checkBoxList.children[fin].children[0].checked === true) {
                    marcarCasillas();
                }
                if (fin !== undefined && checkBoxList.children[fin].children[0].checked === false) {
                    desmarcarCasillas();
                }

            } else {
                console.log(" No shift pulsado");
                init = posicionLista(e);
                console.log("INIT ASIGNADO " + init);

            }

        }

    });

})();
