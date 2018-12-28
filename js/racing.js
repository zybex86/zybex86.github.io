// global variables for game space
var canvas, canvasContext;

// create cars and set first track
var blueCar = new carClass();
var greenCar = new carClass();
var track = 0;

// score variables
var showingWinScreen = false;
const WIN_CONDITION = 3;

function handleMouseClick()
{
    if (showingWinScreen) {
        blueCar.score = 0;
        greenCar.score = 0;
        showingWinScreen = false;
        track = 0;
        document.getElementById('greenScore').innerHTML = greenCar.score;
        document.getElementById('blueScore').innerHTML = blueCar.score;
        loadLevel(levels[track]);
    }
}


window.onload = function()
{
    // references the canvas
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    document.getElementById('greenScore').innerHTML = greenCar.score;
    document.getElementById('blueScore').innerHTML = blueCar.score;
    

    drawRect(0, 0, canvas.width, canvas.height, "black");
    writeText("Loading...", canvas.width / 2, canvas.height / 2, "white");

    // reset the game
    canvas.addEventListener('mousedown', handleMouseClick); 

    loadImages();
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
   
    loadLevel(levels[track]);
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

    if(track >= 5 || greenCar.score == WIN_CONDITION || blueCar.score == WIN_CONDITION) {
        drawRect(0, 0, canvas.width, canvas.height, "black");
        if(greenCar.score == WIN_CONDITION){
            writeText(greenCar.name + " wins!", canvas.width / 2, canvas.height / 2, "white");    
        } else if(blueCar.score == WIN_CONDITION) {
            writeText(blueCar.name + " wins!", canvas.width / 2, canvas.height / 2, "white");    
        }
        writeText("Click to restart!", canvas.width / 2, canvas.height / 2 + 200, "white");    
        return;
    } else { // if 
        drawTracks();
        greenCar.draw();
        blueCar.draw();
        
    }
    

}
