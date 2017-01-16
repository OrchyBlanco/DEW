
function mostrarTicket() {
  $(this).closest('.confirmation').find('.ticket').slideToggle();

}


$(document).ready(function () {

  $('.confirmation').on('click','button',function () {
    mostrarTicket();
  });

});
