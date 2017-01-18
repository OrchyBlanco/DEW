
// 1  Seleccionar todos los elementos div que poseen la clase “media”.
  $elementosDiv=$("div").find(".media");
// 2  Contar el número de opciones del menú de navegación superior de la página y mostrar su nombre por consola.
  $navegacion=$("nav").find("a");
  tamañonav=$navegacion.length;

$.each($navegacion,function (index,value) {
  console.log(index+"::"+value.text);
});
// 3  Seleccionar el primer elemento p de la clase lead y mostrar su contenido html.
      $elementoPLead=$(".lead").html();

// 4  Cambiar las imágenes de la parte final del documento que tienen justo a continuación un <h4> con el texto "Start Bootstrap..." por otras imágenes diferentes. En este punto se debe usar $.fn.each.
    $("h4:contains('Start Bootstrap')").parent().prev().closest("a").find("img").attr("src","https://jquery.com/jquery-wp-content/themes/jquery.com/i/favicon.ico");
// 5  Posicionarte en el botón del formulario y a partir de ahí añadir una imagen justo antes del formulario que use la clase "img-responsive".
    img="<img src='https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-128.png' >";
    $("button.btn.btn-primary").parent().prev().append(img);
// 6  Eliminar el elemento div que está contenido en el último div con clase .media.
      $elementosDiv
                   .last()
                   .find("div")
                   .remove();
// 7  Seleccionar la primera lista de categorías y luego añadir un nuevo elemento.
divBlogCategories=$(".well").last().prev();
  li="<li><a href='#'>AÑADIDO</a> </li>";
  divBlogCategories.find("ul").first().append(li);
// 8  Copiar la imagen que está al principio del documento en un div que estará ubicado justo antes del footer.
      copiaImagen=$("img")
                          .first()
                          .clone(true);
      $Div="<div></div>";
      $("footer").before($Div);
      $("footer").prev().append(copiaImagen);
// 9  Eliminar los elementos pares de la segunda lista de categorías y al resto de elementos establecerle una clase css que hayas creado o bien una de las existentes.

      segundalista=divBlogCategories.find("ul").first().parent().next();
      segundalista.remove();
// 10  Hay que añadir interactividad al párrafo que está justo a continuación del h2 del contenido. Es decir, al hacer click sobre el texto de la cabecera h2 se debe ocultar el párrafo con un efecto de deslizamiento y si volvemos a hacer click sobre el encabezado volveremos a mostrar el texto nuevamente.

$(document).ready(function () {

  $('h2').click(function () {
    $(this).next().slideToggle();
  });

});

// 11  Añadir una validación al botón del formulario que existe en al página para dejar sugerencias de manera que al hacer click sobre el botón, se compruebe si el usuario ha escrito un comentario. Si lo ha hecho, no haremos nada, y si no ha introducido ningún comentario le mostraremos un alert al usuario indicando que debe introducir un mensaje.
