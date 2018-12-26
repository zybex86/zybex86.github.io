// global tracks variables and constants
const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_COLUMNS = 20;
const TRACK_GAP = 2;
const TRACK_ROWS = 15;



var levelOne  =[4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4,
                4, 1, 1, 0, 0, 0, 0, 0, 0, 2, 1, 4, 4, 1, 0, 0, 1, 1, 1, 4,
                1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1,
                1, 0, 0, 0, 0, 1, 2, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2, 0, 0, 0, 1,
                1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1,
                1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 4, 1, 0, 0, 1, 4, 1, 0, 0, 1,
                1, 0, 0, 1, 0, 0, 0, 1, 1, 4, 4, 2, 5, 5, 2, 4, 1, 0, 0, 1,
                1, 0, 0, 1, 0, 0, 0, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
                1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1,
                1, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1,
                1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1,
                1, 3, 3, 1, 1, 1, 1, 0, 0, 0, 1, 1, 4, 1, 1, 0, 0, 0, 1, 1,
                1, 0, 0, 1, 4, 4, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 4];

var levelTwo  =[4, 1, 1, 1, 4, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4,
                1, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 2, 1, 0, 0, 1, 1, 2, 0, 0, 2, 1, 1, 0, 0, 1, 2, 0, 1,
                1, 0, 1, 1, 1, 1, 1, 4, 1, 0, 0, 1, 4, 1, 1, 1, 1, 1, 0, 1,
                1, 5, 1, 1, 0, 1, 1, 4, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 5, 1,
                1, 2, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 2, 0, 0, 0, 0, 1, 2, 1,
                1, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1,
                1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 1, 0, 0, 0, 1,
                1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 2, 1, 3, 3, 1, 1, 1, 0, 0, 1,
                1, 0, 0, 1, 4, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1,
                1, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
                1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 4,
                4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4];

var levelThree    =[4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 4,
                    1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 2, 4,
                    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 2, 1, 1, 0, 0, 0, 1,
                    2, 5, 5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 0, 1,
                    4, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 4, 1, 0, 0, 1,
                    1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 1,
                    1, 0, 0, 0, 0, 2, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 1, 1, 4, 4, 4, 1, 1, 1, 1, 0, 0, 0, 0, 0, 2, 1,
                    1, 0, 0, 1, 1, 4, 4, 1, 1, 1, 1, 1, 4, 1, 1, 2, 1, 1, 1, 4,
                    1, 0, 0, 2, 1, 4, 1, 2, 0, 0, 0, 1, 1, 4, 4, 1, 1, 3, 3, 1,
                    1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 2, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 2, 1,
                    4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4];

var levelFour    =[4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4,
                   1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1,
                   1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                   1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 1,
                   1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
                   1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
                   1, 0, 0, 1, 0, 0, 0, 1, 2, 0, 0, 1, 0, 0, 2, 1, 1, 1, 1, 1,
                   1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 4,
                   1, 0, 0, 1, 0, 0, 1, 4, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1,
                   1, 0, 0, 1, 0, 0, 1, 4, 2, 5, 5, 2, 1, 1, 1, 1, 0, 0, 0, 1,
                   1, 0, 0, 1, 0, 0, 2, 1, 1, 1, 1, 1, 4, 4, 4, 1, 2, 0, 0, 1,
                   1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
                   1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                   1, 3, 3, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1,
                   4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4];

var levelFive     =[4, 4, 4, 4, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 4, 4, 4, 4,
                    4, 4, 1, 1, 1, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1, 1, 1, 4, 4,
                    4, 1, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 1, 4,
                    1, 1, 0, 0, 0, 1, 1, 1, 2, 0, 0, 2, 1, 1, 1, 0, 0, 0, 1, 1,
                    1, 0, 0, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1, 0, 0, 1,
                    1, 0, 1, 2, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 2, 1, 0, 1,
                    1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
                    1, 0, 0, 0, 0, 1, 1, 2, 0, 1, 1, 0, 2, 1, 1, 0, 0, 0, 0, 1,
                    1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1,
                    4, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1,
                    1, 2, 0, 0, 0, 0, 0, 1, 1, 4, 4, 1, 1, 0, 0, 0, 0, 0, 2, 1,
                    1, 0, 0, 2, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 2, 1,
                    4, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 4];
var levels = [levelOne, levelTwo, levelThree, levelFour, levelFive]
var trackGrid = [];
const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_START = 2;
const TRACK_GOAL = 3;
const TRACK_TREE = 4;
const TRACK_PLAYERSTART = 5;

//checks if there is a tyle is in the spot where we are with the car

function returnTileTypeAtColRow(col, row)
{
    if(col >= 0 && col < TRACK_COLUMNS &&
       row >= 0 && row < TRACK_ROWS)
        {
            var trackIndexUnderCoord = rowColToArrayIndex(col, row);

            return trackGrid[trackIndexUnderCoord]; // found a tile
        } else {
            return TRACK_WALL; // there is a wall + can't go out of bounds
        }
}

function carTrackHandling(whichCar)
{
    // which column and row and which track INDEX we are at
    var carTrackCol = Math.floor(whichCar.x / TRACK_W);
    var carTrackRow = Math.floor(whichCar.y / TRACK_H);
    var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);

    // car bumps the obsticle
    if(carTrackCol >= 0 && carTrackCol < TRACK_COLUMNS &&
       carTrackRow >= 0 && carTrackRow < TRACK_ROWS)
        {
            var tileType = returnTileTypeAtColRow(carTrackCol, carTrackRow);
            if (tileType == TRACK_GOAL) {
                // If somebody gets 3 wins
                if(track <= 4 && whichCar.score != WIN_CONDITION) {
                    track++;
                    whichCar.score++;
                }
                
                if(!showingWinScreen) {
                    document.getElementById('greenScore').innerHTML = greenCar.score;
                    document.getElementById('blueScore').innerHTML = blueCar.score;;
                }
                
                if(greenCar.score == WIN_CONDITION || blueCar.score == WIN_CONDITION) {
                    showingWinScreen = true;

                    return;
                }
                    
                loadLevel(levels[track]);
                
            }
            else if (tileType != TRACK_ROAD)
            {
                whichCar.x -= Math.cos(whichCar.ang) * (whichCar.speed * 2);
                whichCar.y -= Math.sin(whichCar.ang) * (whichCar.speed * 2);

                whichCar.speed *= -0.5;

            } //end of track found
        } //end of valid col and row
} // and of carTrackHandling()

function rowColToArrayIndex(col, row)
{
    return col + TRACK_COLUMNS * row;
}

function drawTracks()
{
    var arrayIndex = 0;
    var drawTileX = 0;
    var drawTileY = 0;
    for (var eachRow = 0; eachRow < TRACK_ROWS; eachRow++) {
        for (var eachCol = 0; eachCol < TRACK_COLUMNS; eachCol++)
        {

            // draws tracks that are visible

            var tileKindHere = trackGrid[arrayIndex];
            var useImg = trackPics[tileKindHere];


          canvasContext.drawImage(useImg, drawTileX, drawTileY);
          drawTileX += TRACK_W;
          arrayIndex++;
        } // end of column for loop
        drawTileY += TRACK_H;
        drawTileX = 0;
      } // end of row loop

} // end of drawTracks()
