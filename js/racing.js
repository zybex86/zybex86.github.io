// global variables for game space
var canvas, canvasContext;

var blueCar = new carClass();
var greenCar = new carClass();

window.onload = function()
{
    // references the canvas
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    drawRect(0, 0, canvas.width, canvas.height, "black");
    writeText("Loading...", canvas.width / 2, canvas.height / 2, "white");

    loadImages();

    loadLevel(levelOne);
}

function loadLevel(whichLevel) {
    trackGrid = whichLevel.slice(); // slice makes the two tables seperate data, without slice we have the same data
    greenCar.reset(carPic, "Green Lightning");
    blueCar.reset(otherCarPic, "Blue Tornado");
}

function imageLoadDoneSoStartGame() {
    // sets framerate of refresh
    var framesPerSecond = 40;
    setInterval(updateAll, 1000 / framesPerSecond);

    // sets the inputs for the cars and creates them
    setupInput();
    greenCar.reset(carPic, "Green Lightning");
    blueCar.reset(otherCarPic, "Blue Tornado");
}

function updateAll()
{
    moveAll();
    drawAll();
}

function moveAll()
{
    greenCar.move();
    blueCar.move();
}

function drawAll()
{

    drawTracks();
    greenCar.draw();
    blueCar.draw();

}
