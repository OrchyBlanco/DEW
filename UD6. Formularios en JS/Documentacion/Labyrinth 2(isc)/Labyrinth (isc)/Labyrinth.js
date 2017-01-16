

Labyrinth = function(labyrinthElement, endElement, informationElement)
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

Labyrinth.prototype.generateEventHandlers = function ()
{
    this.gameOverHandler = this.gameOver.bind(this);
    this.winHandler = this.win.bind(this);
    console.log("generateEventHandlers Ejecutado");
};

Labyrinth.prototype.attachListeners = function ()
{
    var that = this; //Se mantiene la referencia a este objeto.

    this.endElement.addEventListener("mousemove", this.winHandler, false);
    this.labyrinth.addEventListener("mouseleave", this.gameOverHandler, false);

    this.walls.forEach(function (wall)
    {
        wall.addEventListener("mousemove", that.gameOverHandler);
    });
    console.log("attachListeners ejecutado");
};

Labyrinth.prototype.detachListeners = function()
{
    var that = this; //Se mantiene la referencia a este objeto.

    this.endElement.removeEventListener("mousemove", this.winHandler);
    this.labyrinth.removeEventListener("mouseleave", this.gameOverHandler);

    this.walls.forEach(function(wall)
    {
        wall.removeEventListener("mousemove", that.gameOverHandler);
    });
    console.log("detachListeners ejecutado");
};

Labyrinth.prototype.start = function()
{
    if (!this.playing)
    {
        this.resetElements();
        this.attachListeners();

        this.playing = true;
        this.informationElement.innerHTML = "Playing...";
    }
    console.log("funcion Start Ejecutado");
};

Labyrinth.prototype.end = function()
{
    this.playing = false;
    this.detachListeners();
    console.log("Funcion End Ejecutado");
};

Labyrinth.prototype.resetElements = function()
{
    this.removeGameOverWallColor();
    console.log(" funcion resetElements ejecutado");
};

Labyrinth.prototype.removeGameOverWallColor = function()
{
    this.walls.forEach(function(wall)
    {
        if (wall.classList.contains("youlose"))
        {
            wall.classList.remove("youlose");
        }
    });

    console.log("Funcion removeGameOverWallColor ejecutado");
};

Labyrinth.prototype.addGameOverWallColor = function()
{
    this.walls.forEach(function(wall)
    {
        wall.classList.add("youlose");
    });
    console.log("addGameOverWallColor ejecutado");
};

Labyrinth.prototype.gameOver = function()
{
    this.addGameOverWallColor();
    this.informationElement.innerHTML = "Game Over!";
    this.end();

    console.log("gameOver ejecutado");
};

Labyrinth.prototype.win = function()
{
    this.informationElement.innerHTML = "You won!";
    this.end();
    console.log(" win Ejecutado");
};
