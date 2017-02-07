<?php

$cad=json_decode(stripslashes($_REQUEST['cadena']));

echo 'Nombre:'.$cad->nombre;
echo '<br>';
echo 'Edad:'.$cad->edad;
echo '<br>';
echo 'Primer sueldo:'.$cad->sueldos[0];
echo '<br>';
echo 'Segundo sueldo:'.$cad->sueldos[1];
echo '<br>';
echo 'Tercer sueldo:'.$cad->sueldos[2];
?>
