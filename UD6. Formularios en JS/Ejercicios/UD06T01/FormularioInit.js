
var initFormulario=null;

window.addEventListener("DOMContentLoaded",function(){

  var containerFormulario=document.querySelector("#formulario");
  var botonEnviar=document.querySelector("#btnEnviar");
  initFormulario=new Formulario(containerFormulario,botonEnviar);

  initFormulario.cargarFormulario();
});
