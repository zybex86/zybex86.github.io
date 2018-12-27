// global worlds variables and constants
const WORLD_W = 40;
const WORLD_H = 40;
const WORLD_COLUMNS = 20;
const WORLD_GAP = 2;
const WORLD_ROWS = 15;



var levelOne  =[4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4,
                4, 1, 1, 0, 0, 0, 0, 0, 0, 2, 1, 4, 4, 1, 0, 0, 1, 1, 1, 4,
                1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1,
                1, 0, 0, 0, 0, 1, 2, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2, 0, 0, 0, 1,
                1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1,
                1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 4, 1, 0, 0, 1, 4, 1, 0, 0, 1,
                1, 0, 0, 1, 0, 0, 0, 1, 1, 4, 4, 2, 5, 0, 2, 4, 1, 0, 0, 1,
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
                1, 5, 1, 1, 0, 1, 1, 4, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
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
                    2, 5, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 0, 1,
                    4, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 4, 1, 0, 0, 1,
                    1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 1,
                    1, 0, 0, 0, 0, 2, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 1, 1, 4, 4, 4, 1, 1, 1, 1, 0, 0, 0, 0, 0, 2, 1,
                    1, 0, 0, 1, 1, 4, 4, 1, 1, 1, 1, 1, 4, 1, 1, 2, 1, 1, 1, 4,
                    1, 0, 0, 2, 1, 4, 1, 2, 0, 0, 0, 1, 1, 4, 4, 1, 1, 3, 3, 1,
                    1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 2, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 2, 1,
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
                   1, 0, 0, 1, 0, 0, 1, 4, 2, 5, 0, 2, 1, 1, 1, 1, 0, 0, 0, 1,
                   1, 0, 0, 1, 0, 0, 2, 1, 1, 1, 1, 1, 4, 4, 4, 1, 2, 0, 0, 1,
                   1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
                   1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                   1, 3, 3, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1,
                   4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4];

var levelFive     =[4, 4, 4, 4, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 4, 4, 4, 4,
                    4, 4, 1, 1, 1, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1, 1, 1, 4, 4,
                    4, 1, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 1, 4,
                    1, 1, 0, 0, 0, 1, 1, 1, 2, 0, 0, 2, 1, 1, 1, 0, 0, 0, 1, 1,
                    1, 0, 0, 1, 1, 1, 1, 1, 1, 5, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1,
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
var worldGrid = [];
const WORLD_ROAD = 0;
const WORLD_WALL = 1;
const WORLD_START = 2;
const WORLD_GOAL = 3;
const WORLD_TREE = 4;
const WORLD_PLAYERSTART = 5;

//checks if there is a tyle is in the spot where we are with the hero

function returnTileTypeAtColRow(col, row)
{
    if(col >= 0 && col < WORLD_COLUMNS &&
       row >= 0 && row < WORLD_ROWS)
        {
            var worldIndexUnderCoord = rowColToArrayIndex(col, row);

            return worldGrid[worldIndexUnderCoord]; // found a tile
        } else {
            return WORLD_WALL; // there is a wall + can't go out of bounds
        }
}

function heroWorldHandling(whichHero)
{
    // which column and row and which world INDEX we are at
    var heroWorldCol = Math.floor(whichHero.x / WORLD_W);
    var heroWorldRow = Math.floor(whichHero.y / WORLD_H);
    var worldIndexUnderHero = rowColToArrayIndex(heroWorldCol, heroWorldRow);

    // hero bumps the obsticle
    if(heroWorldCol >= 0 && heroWorldCol < WORLD_COLUMNS &&
       heroWorldRow >= 0 && heroWorldRow < WORLD_ROWS)
        {
            var tileType = returnTileTypeAtColRow(heroWorldCol, heroWorldRow);
            if (tileType == WORLD_GOAL) {
                // If somebody gets 3 wins
                if(world <= 4 && whichHero.score != WIN_CONDITION) {
                    world++;
                    whichHero.score++;
                }
                
                if(!showingWinScreen) {
                    
                }
                
                if(greenHero.score == WIN_CONDITION) {
                    showingWinScreen = true;

                    return;
                }
                    
                loadLevel(levels[world]);
                
            }
            else if (tileType != WORLD_ROAD)
            {
                whichHero.x -= Math.cos(whichHero.ang) * (whichHero.speed * 2);
                whichHero.y -= Math.sin(whichHero.ang) * (whichHero.speed * 2);

                whichHero.speed *= -0.5;

            } //end of world found
        } //end of valid col and row
} // and of heroWorldHandling()

function rowColToArrayIndex(col, row)
{
    return col + WORLD_COLUMNS * row;
}

function drawWorlds()
{
    var arrayIndex = 0;
    var drawTileX = 0;
    var drawTileY = 0;
    for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
        for (var eachCol = 0; eachCol < WORLD_COLUMNS; eachCol++)
        {

            // draws worlds that are visible

            var tileKindHere = worldGrid[arrayIndex];
            var useImg = worldPics[tileKindHere];


          canvasContext.drawImage(useImg, drawTileX, drawTileY);
          drawTileX += WORLD_W;
          arrayIndex++;
        } // end of column for loop
        drawTileY += WORLD_H;
        drawTileX = 0;
      } // end of row loop

} // end of drawWorlds()
