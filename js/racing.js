// global variables for game space
var canvas, canvasContext;


window.onload = function()
{
    // references the canvas
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    // sets framerate of refresh
    var framesPerSecond = 40;
    setInterval(updateAll, 1000 / framesPerSecond);

    setupInput();

    trackLoadImages();
    carImageLoad();
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
    clearScreen();
    drawTracks();
    carDraw();

}
