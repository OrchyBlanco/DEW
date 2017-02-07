<?php
header('Content-Type: text/txt; charset=utf-8');
$nombre='';
$apellido='';
$direccion='';
if ($_REQUEST['dni']=='1')
{
  $nombre='Juan';
  $apellido='Rodriguez';
  $direccion='Colon 123';
}
if ($_REQUEST['dni']=='2')
{
  $nombre='Ana';
  $apellido='Maldonado';
  $direccion='Lima 245';
}
if ($_REQUEST['dni']=='3')
{
  $nombre='laura';
  $apellido='Pueyrredon';
  $direccion='Laprida 785';
}

echo "{
        \"nombre\":\"$nombre\",
        \"apellido\":\"$apellido\",
        \"direccion\":\"$direccion\"
      }";
?>