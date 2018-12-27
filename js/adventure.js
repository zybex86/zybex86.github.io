// global variables for game space
var canvas, canvasContext;

// create heros and set first track
var greenHero = new heroClass();
var track = 0;

// score variables
var showingWinScreen = false;
const WIN_CONDITION = 3;

function handleMouseClick()
{
    if (showingWinScreen) {

        greenHero.score = 0;
        showingWinScreen = false;
        track = 0;
         

        loadLevel(levels[track]);
    }
}


window.onload = function()
{
    // references the canvas
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

     

    

    drawRect(0, 0, canvas.width, canvas.height, "black");
    writeText("Loading...", canvas.width / 2, canvas.height / 2, "white");

    // reset the game
    canvas.addEventListener('mousedown', handleMouseClick); 

    loadImages();

    loadLevel(levels[track]);
}

function loadLevel(whichLevel) {
    trackGrid = whichLevel.slice(); // slice makes the two tables seperate data, without slice we have the same data
    greenHero.reset(heroPic, "Green Lightning");
    
}

function imageLoadDoneSoStartGame() {
    // sets framerate of refresh
    var framesPerSecond = 40;
    setInterval(updateAll, 1000 / framesPerSecond);

    // sets the inputs for the heros and creates them
    setupInput();
    greenHero.reset(heroPic, "Green Lightning");

}

function updateAll()
{
    moveAll();
    drawAll();
}

function moveAll()
{
    greenHero.move();

}

function drawAll()
{

        drawWorlds();
        greenHero.draw();
       
        
   
    

}
