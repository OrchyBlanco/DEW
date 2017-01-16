

var Formulario = Formulario || {};

Formulario = function(elementoFormulario, submitEnvio) {
    this.elementoFormulario = elementoFormulario;
    this.submitEnvio = submitEnvio;
    this.btnLimpiarFormulario=document.getElementById("btnReset");

    this.teclado=Array.from(document.getElementsByClassName('btnEntrada'));
    this.btnLimpiar=document.getElementsByClassName('btnLimpiar');

    this.genero= Array.from(document.getElementsByName('genero'));
    this.clave= document.querySelector("#inputClave");

    this.generadorEventos();
};

Formulario.prototype = {

    generadorEventos: function() {
        this.enviarFormulario = this.enviar.bind(this);
    },

    addListeners: function() {
        var that = this;

        this.submitEnvio.addEventListener("click", this.enviar, false);
        this.btnLimpiarFormulario.addEventListener("click",this.limpiarCampos,false);
        this.genero.forEach(function(elementoGenero){
          elementoGenero.addEventListener("click",that.cambiarImagenGenero);
        });

        this.teclado.forEach(function (botonTeclado) {
          botonTeclado.addEventListener("click",that.addNumeroClave);
        });

    // this.btnLimpiar.addEventListener("click",this.limpiarClave);

    },

    cambiarImagenGenero: function() {
      var imagenGenero=document.getElementById('imgGenero');
      var genero= Array.from(document.getElementsByName('genero'));
      imagenGenero.src="";
        for (var i = 0; i < genero.length; i++) {
          if (genero[i].checked===true) {
              imagenGenero.src="img/img_"+genero[i].value+".png";
          }

        }



    },

    limpiarClave: function () {

      this.clave.reset();
    },

    addNumeroClave: function(ev) {
      var clave= document.querySelector("#inputClave");
      if (clave.value.length<5) {
        clave.value+=ev.target.value;
      }

    },

    cargarPanelclave:function () {

      var digitos=[1,2,3,4,5,6,7,8,9,0];
      for (var i = 0; i < 10; i++) {
        var index= Math.floor(Math.random()*digitos.length);
        this.teclado[i].value=digitos[index];
        this.teclado[i].innerHTML=digitos[index];
        digitos.splice(index,1);
      }

    },

    validarDNI: function() {
       var nif = document.querySelector("#identificacionNIF");
        var regexNIF = /[0-9]{7,8}[A-Z]$/g;
        if (regexNIF.test(nif.value)) {
            console.log("true");
            nif.parentNode.classList.add("has-success");
            return true;

        } else {
            nif.parentNode.classList.add("has-error");
            console.log("false");
            return false;
        }
    },

    validarFecha: function() {
      var regex= /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

      if (regex.test(this.fecha.value)) {
        console.log(" fecha: true");
        return true;
      }
      else {
        console.log(" fecha: false");
        return false;
      }
    },
    enviar: function() {
      //  this.validarDNI();
        this.validarFecha();

    },
    limpiarCampos:function() {
      this.cambiarImagenGenero();

    },
    cargarFormulario: function() {
      this.limpiarCampos();
        this.addListeners();
        this.cargarPanelclave();
    }

};
