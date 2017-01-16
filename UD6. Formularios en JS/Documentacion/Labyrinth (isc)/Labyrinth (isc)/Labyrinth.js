"use strict";

var IscSoftware = IscSoftware || {};

IscSoftware.Labyrinth = function(labyrinthElement, endElement, informationElement)
{
    this.playing = false;
    this.endElement = endElement;
    this.labyrinth = labyrinthElement;
    this.informationElement = informationElement;
    this.walls = Array.from(labyrinthElement.querySelectorAll(".bloque"));

    this.gameOverHandler = null;
    this.winHandler = null;

    this.generateEventHandlers();
};

IscSoftware.Labyrinth.prototype.generateEventHandlers = function ()
{
    this.gameOverHandler = this.gameOver.bind(this);
    this.winHandler = this.win.bind(this);
};

IscSoftware.Labyrinth.prototype.attachListeners = function ()
{
    var that = this; //Se mantiene la referencia a este objeto.

    this.endElement.addEventListener("mousemove", this.winHandler, false);
    this.labyrinth.addEventListener("mouseleave", this.gameOverHandler, false);

    this.walls.forEach(function (wall)
    {
        wall.addEventListener("mousemove", that.gameOverHandler);
    });
};

IscSoftware.Labyrinth.prototype.detachListeners = function()
{
    var that = this; //Se mantiene la referencia a este objeto.

    this.endElement.removeEventListener("mousemove", this.winHandler);
    this.labyrinth.removeEventListener("mouseleave", this.gameOverHandler);

    this.walls.forEach(function(wall)
    {
        wall.removeEventListener("mousemove", that.gameOverHandler);
    });
};

IscSoftware.Labyrinth.prototype.start = function()
{
    if (!this.playing)
    {
        this.resetElements();
        this.attachListeners();

        this.playing = true;
        this.informationElement.innerHTML = "Playing...";
    }
};

IscSoftware.Labyrinth.prototype.end = function()
{
    this.playing = false;
    this.detachListeners();
};

IscSoftware.Labyrinth.prototype.resetElements = function()
{
    this.removeGameOverWallColor();
};

IscSoftware.Labyrinth.prototype.removeGameOverWallColor = function()
{
    this.walls.forEach(function(wall)
    {
        if (wall.classList.contains("youlose"))
        {
            wall.classList.remove("youlose");
        }
    });
};

IscSoftware.Labyrinth.prototype.addGameOverWallColor = function()
{
    this.walls.forEach(function(wall)
    {
        wall.classList.add("youlose");
    });
};

IscSoftware.Labyrinth.prototype.gameOver = function()
{
    this.addGameOverWallColor();
    this.informationElement.innerHTML = "Game Over!";
    this.end();
};

IscSoftware.Labyrinth.prototype.win = function()
{
    this.informationElement.innerHTML = "You won!";
    this.end();
};
