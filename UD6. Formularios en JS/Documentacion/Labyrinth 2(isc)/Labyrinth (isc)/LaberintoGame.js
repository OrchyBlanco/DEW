
var Game = null;


window.addEventListener("DOMContentLoaded", function ()
{
    var gameStartElement = document.querySelector("#inicio");
    var gameEndElement = document.querySelector("#fin");
    var gameLabyrinthElement = document.querySelector("#laberinto");
    var gameInformationElement = document.querySelector("#status");

    Game = new Labyrinth(gameLabyrinthElement, gameEndElement, gameInformationElement);

    gameStartElement.addEventListener("click", function ()
    {
        Game.start();
    });
});
