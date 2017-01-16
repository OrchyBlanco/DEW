"use strict";

var IscSoftware = IscSoftware || {};

IscSoftware.Globals =
{
    game: null
};

window.addEventListener("DOMContentLoaded", function ()
{
    var gameStartElement = document.querySelector("#inicio");
    var gameEndElement = document.querySelector("#fin");
    var gameLabyrinthElement = document.querySelector("#laberinto");
    var gameInformationElement = document.querySelector("#status");

    IscSoftware.Globals.game = new IscSoftware.Labyrinth(gameLabyrinthElement, gameEndElement, gameInformationElement);

    gameStartElement.addEventListener("click", function ()
    {
        IscSoftware.Globals.game.start();
    })
});
