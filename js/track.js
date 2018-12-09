// global tracks variables and constants
const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_COLUMNS = 20;
const TRACK_GAP = 2;
const TRACK_ROWS = 15;

var trackGrid =[4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4,
                4, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 4, 4, 1, 0, 0, 1, 1, 1, 4,
                1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1,
                1, 0, 0, 0, 0, 1, 2, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2, 0, 0, 0, 1,
                1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1,
                1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 4, 1, 0, 0, 1, 4, 1, 0, 0, 1,
                1, 0, 0, 1, 0, 0, 0, 1, 1, 4, 4, 2, 0, 5, 2, 4, 1, 0, 0, 1,
                1, 0, 0, 1, 0, 0, 0, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
                1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1,
                1, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1,
                1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 1,
                1, 3, 3, 1, 1, 1, 1, 0, 0, 0, 1, 1, 4, 1, 1, 0, 0, 0, 1, 1,
                1, 0, 0, 1, 4, 4, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 4];

const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_START = 2;
const TRACK_GOAL = 3;
const TRACK_TREE = 4;
const TRACK_PLAYERSTART = 5;

//checks if a wall is in the spot where we are with the car

function isObstacleAtColRow(col, row)
{
    if(col >= 0 && col < TRACK_COLUMNS &&
       row >= 0 && row < TRACK_ROWS)
        {
            var trackIndexUnderCoord = rowColToArrayIndex(col, row);

            return (trackGrid[trackIndexUnderCoord] != TRACK_ROAD); // found an obsticle
        } else {
            return false; // there is nothing there
        }
}

function carTrackHandling()
{
    // which column and row and which track INDEX we are at
    var carTrackCol = Math.floor(carX / TRACK_W);
    var carTrackRow = Math.floor(carY / TRACK_H);
    var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);

    // car bumps the wall
    if(carTrackCol >= 0 && carTrackCol < TRACK_COLUMNS &&
       carTrackRow >= 0 && carTrackRow < TRACK_ROWS)
        {
            if (isObstacleAtColRow(carTrackCol, carTrackRow))
            {
                carX -= Math.cos(carAng) * (carSpeed * 2);
                carY -= Math.sin(carAng) * (carSpeed * 2);

                carSpeed *= -0.5;

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
