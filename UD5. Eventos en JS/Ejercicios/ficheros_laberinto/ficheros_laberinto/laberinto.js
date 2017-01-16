(function() {
    'use strict';

    var laberinto = document.getElementById('laberinto');
    var bloques = document.getElementsByClassName('bloque');
    var estado = document.getElementById('status');
    var inicio = document.getElementById('inicio');
    var fin = document.getElementById('fin');
    //Ajustes en el laberinto
    laberinto.style.width = "700px";
    fin.style.right = "0px";

    var txtResultado = [
        "¡¡Has ganado!!",
        "¡¡Trampos@!!",
        "¡¡GAME OVER!!"
    ];
    var txtInfo = [
        'SE ESTA JUGANDO',
        'NO SE ESTA JUGANDO',
        'UN BLOQUE HA SIDO TOCADO',
        'SE HA SALIDO DEL LABERINTO',
        'SE HA PULSADO UNA CASILLA',
        'SE HA LLEGADO A LA META'
    ];


    function pintarBloques() {
        if (laberinto.classList[0] === "jugando") {
            for (var j = 0; j < bloques.length - 1; j++) {
                bloques[j].classList.add("youlose");
                estado.style.visibility = "visible";
                estado.innerHTML = txtResultado[2];
                laberinto.classList.remove("jugando");
                console.log(txtInfo[1]);
            }
        }
    }

    inicio.addEventListener('click', function() {
        console.log(txtInfo[0]);
        console.log(txtInfo[4]);

        laberinto.classList.add("jugando");
        estado.style.visibility = "hidden";

        for (var i = 0; i < bloques.length; i++) {
            bloques[i].classList.remove("youlose");
            bloques[i].addEventListener('mouseover', function() {
                console.log(txtInfo[2]);

                pintarBloques();
                laberinto.classList.remove("jugando");
            });

        }


        laberinto.addEventListener('mouseleave', function() {
            console.log(txtInfo[3]);

            if (laberinto.classList[0] === "jugando") {
                pintarBloques();

                estado.style.visibility = "visible";
                estado.innerHTML = txtResultado[1];
            }
        });


    });

    fin.addEventListener('mouseover', function() {
        if (laberinto.classList[0] === "jugando") {
            console.log(txtInfo[5]);
            estado.style.visibility = "visible";
            estado.innerHTML = txtResultado[0];
            laberinto.classList.remove("jugando");
            console.log(txtInfo[1]);
        }
    });

})();
