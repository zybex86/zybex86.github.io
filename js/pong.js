// creates global variables to refer to canvas
var canvas; 
var canvasContext; 

// variables and constants for the ball
var ballX = 50;
var ballY = 50;
var ballSpeedX = 5;
var ballSpeedY = 5;
const BALL_SIZE = 10;

// variables and constants for the paddles
var paddle1Y = 250;
var paddle2Y = 250;
const PADDLE_THICKNESS = 10;
const PADDLE_HEIGHT = 100;

// score variables 
var showingWinScreen = false;
var player1Score = 0;
var player2Score = 0;
const WIN_CONDITION = 3;

// tells the game where is my mouse
function calculateMousePos(evt)
{
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
            x:mouseX,
            y:mouseY
    };
}

function handleMouseClick()
{
    if (showingWinScreen) {
        player1Score = 0;
        player2Score = 0;
        showingWinScreen = false;
    }
}

// main program
window.onload = function()
{
    // creates my game space
    canvas = document.getElementById('gameCanvas'); 
    canvasContext = canvas.getContext('2d');
    
    // moves the game
    var framesPerSecond = 40;
    setInterval(function() {
        moveEverything();
        drawEverything();
    }, 1000 / framesPerSecond);

    // reset the game
    canvas.addEventListener('mousedown', handleMouseClick); 

    canvas.addEventListener('mousemove', 
        function(evt) {
            var mousePos = calculateMousePos(evt);
            paddle1Y = mousePos.y - (PADDLE_HEIGHT / 2);
        });
}

function drawNet() 
{
    for (var i = 0; i < canvas.height; i+=40) {
        drawRect(canvas.width / 2 - 1, i, 2, 20, 'white');
    }
}

function drawEverything() 
{
    // creates a rectangle that fills the canvas
    drawRect(0,0, canvas.width, canvas.height, 'black');  

    //show win screen
    if (showingWinScreen) {
        canvasContext.fillStyle = 'white';
        if (player1Score >= WIN_CONDITION) {
            canvasContext.fillText("You have won!", 350, 300);
        } else if (player2Score >= WIN_CONDITION) {
            canvasContext.fillText("The computer has won!", 350, 300);
        }
         
        canvasContext.fillText("Click to continue", 350, 500);
        return;
    } 

    // draws the net
    drawNet();

    // creates the paddle for the player
    drawRect(0, paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white'); 

    // creates the paddle for the player
    drawRect(canvas.width - PADDLE_THICKNESS, paddle2Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white'); 
    
    // this creates the ball
    drawCircle(ballX, ballY, BALL_SIZE, 'white');
    
    // draws the scores and win screen
    canvasContext.fillText(player1Score, 100, 100);
    canvasContext.fillText(player2Score, canvas.width - 100, 100);
}

function drawCircle(centerX, centerY, radius, drawColor)
{
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
}

function drawRect(lextX, topY, width, height, drawColor)
{
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(lextX, topY, width, height);
}

function ballReset()
{
    if (player1Score >= WIN_CONDITION || player2Score >= WIN_CONDITION) 
        { showingWinScreen = true; }

    ballSpeedX = -ballSpeedX; 
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
}

function computerMovement()
{
    var paddle2YCenter = paddle2Y + (PADDLE_HEIGHT / 2);
    if (paddle2YCenter < ballY - 35) {
        paddle2Y += 6;
    } else if (paddle2YCenter > ballY + 35) {
        paddle2Y -= 6;
    }
}

function moveEverything()
{
    if (showingWinScreen) { return; }
    computerMovement();

    // move the ball
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // bounce ball from the right side
    if (ballX > canvas.width) { 
        if (ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT) { 
            ballSpeedX = -ballSpeedX;
            
            // add risk factor
            var deltaY = ballY - (paddle2Y + PADDLE_HEIGHT / 2);
            ballSpeedY = deltaY * 0.35;
        } else {
            player1Score++; //change score before I reset
            ballReset();
        }
    }

    // bounce ball from the left side
    if (ballX < 0) {
        if (ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT) {
            ballSpeedX = -ballSpeedX;
            
            // add risk factor
            var deltaY = ballY - (paddle1Y + PADDLE_HEIGHT / 2);
            ballSpeedY = deltaY * 0.35;
        } else {
            player2Score++; //change score before I reset
            ballReset();
        }
    }
    
    // bounce from the top and bottom
    if (ballY > canvas.height  || ballY < BALL_SIZE) {
        ballSpeedY = -ballSpeedY; 
    }
}
