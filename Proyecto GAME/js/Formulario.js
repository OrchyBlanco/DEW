var Formulario = Formulario || {};

Formulario = function( ) {
    this.nombre = document.getElementById('nombreJugador');
    this.chbxCharacter = document.getElementsByName('personaje');
    this.submit = document.getElementById('btnJugar');
    this.imgPersonaje=null;
};

Formulario.prototype = {

    validarNombre: function() {
        this.nombre.value.trim();
        if (this.nombre.value === "") {
            localStorage.setItem("1º",[this.nombre.placeholder,0]) ;
        }
        return this.nombre.value;
    },
    validarpersonaje: function() {
        var seleccionado = false;
        for (var i = 0; i < this.chbxCharacter.length; i++) {
            if (this.chbxCharacter[i].checked) {
                seleccionado = true;
                this.imgPersonaje=this.chbxCharacter[i].value;
            }
        }
        return seleccionado;

    },
    validarForm:function () {
      if (this.validarpersonaje()) {
        localStorage.setItem("ImgJugador",this.imgPersonaje);
        localStorage.setItem("1º",[this.validarNombre(),0]);
        this.submit.removeAttribute("disabled");
      }else {
        this.submit.setAttribute("disabled",true);
      }
    }
};

//__________________________________OOO______________________________//

document.getElementById('formulario').reset();
var formJuego = new Formulario();
setInterval(init,10);
function init() {
  formJuego.validarNombre();
  formJuego.validarpersonaje();
  formJuego.validarForm();
}
