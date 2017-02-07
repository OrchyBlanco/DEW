var dificultad ;
var nombre = "";
var puntuacion = 0;
var conjuntoBasura = [];
//------VENTANAS MODALES----//
$(function() {
    //NOMBRE
    $("#form").dialog({
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        },
        modal: true,
        closeOnEscape: false,
        open: function(event, ui) {
            $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
        }
    });
    $("#btnName").on("click", function() {
        nombre = $("#nombreApellidos").val();
        $("#form").dialog("close");
        $("#nivel").dialog("open");
    });
    //NIVEL
    $("#nivel").dialog({
        autoOpen: false,
        modal: true,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        },
        open: function(event, ui) {
            $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
        }
    });
    $(".btnNivel").on("click", function() {
        switch (this.id) {
            case "facil":
                dificultad = 4;
                break;
            case "medio":
                dificultad = 7;
                break;
            case "dificil":
                dificultad = 9;
                break;
            default:
                dificultad = 1;
        }
        pintarBasura();
        $("#nivel").dialog("close");
        $("#aReciclar").show("slide", 1000);

    });
    //--Puntuacion--//

    $("#resultado").dialog({
        autoOpen: false,
        modal: true,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        },
        open: function(event, ui) {
            $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
        }
    });
    
    $("#otraVez").on("click", function() {
        $("#resultado").dialog("close");
        $("#nivel").dialog("open");
        puntuacion = 0;
    });
});


//--------VALIDACIONES------//
$("#formulario").submit(function (event) {
    event.preventDefault();
  }).validate({
    debug:false,
    rules:{
      "nombreApellidos":{
        required:true,
        nombreApellidos:true
      }
    },
    messages:{
      "nombreApellidos":{
        required:"Introduce tu nombre y apellidos correctamente",
        nombreApellidos: "Introduce unicamente letras"
      }
    }
  });

//-------------BASURA-----------//
Basura = function(numeroBasura) {
    this.tipoBasura = ["organico", "papel", "plastico", "vidrio"];
    this.numeroBasura = numeroBasura;

};
Basura.prototype = {
    añadir: function() {
        var rnd = Math.floor((Math.random() * 3) + 1);
        var rndBasura = Math.floor((Math.random() * 4));
        var div = "<div class='basura col-md-1 " + this.tipoBasura[rndBasura] + "'id=" + this.numeroBasura + " style='background: url(img/" + this.tipoBasura[rndBasura] + rnd + ".png)' /></div>";
        $("#basuras").append(div);
    }
};
//----Pintar basura--//
function pintarBasura() {
    for (var i = 0; i < dificultad; i++) {
        var ElementoBasura = new Basura(i);
        ElementoBasura.añadir();
        conjuntoBasura.push(ElementoBasura);
    }
}
//----------Resultados--------//
function ganarPuntos() {
    puntuacion++;
    toastr.success('Tienes ' + puntuacion + ' puntos', '<i>Has gando 1 punto</i>');
}
//--EJECUCION--//

toastr.options.closeButton = true;
toastr.options.positionClass = "toast-bottom-right";

setInterval(function() {
    $(function() {
        $(".basura ").draggable({
            containment: "#aReciclar",
            cursor: "move",
            revert: true
        });

        $(".contenedor").droppable({
            drop: function(event, ui) {
                ganarPuntos();
                ui.draggable.remove();
                dificultad--;
            }

        });
        $("#organica").droppable({
          accept:".organico"
        });
        $("#plastico").droppable({
          accept:".plastico"
        });
        $("#vidrio").droppable({
          accept:".vidrio"
        });
        $("#papel").droppable({
          accept:".papel"
        });

    });

    if (dificultad === 0) {
        $("#resultado").dialog("open");
        $("#aReciclar").hide("slide", 10);
        dificultad =null;

        pintarBasura();
    }
}, 500);
