// global variables for game space
var canvas, canvasContext;


window.onload = function()
{
    // references the canvas
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    drawRect(0, 0, canvas.width, canvas.height, "black");
    writeText("Loading...", canvas.width / 2, canvas.height / 2, "white");

    loadImages();
}

function imageLoadDoneSoStartGame() {
    // sets framerate of refresh
    var framesPerSecond = 40;
    setInterval(updateAll, 1000 / framesPerSecond);

    setupInput();
<<<<<<< HEAD
=======

    trackLoadImages();
    carImageLoad();
>>>>>>> e4aa31505320fcfdbd6d28da6e812f4e797db703
    carReset();
}

function updateAll()
{
    moveAll();
    drawAll();
}

function moveAll()
{
    carMove();
    carTrackHandling();
}

function drawAll()
{
<<<<<<< HEAD
=======
    clearScreen();
>>>>>>> e4aa31505320fcfdbd6d28da6e812f4e797db703
    drawTracks();
    carDraw();

}
