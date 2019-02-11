// global worlds variables and constants
const WORLD_W = 50;
const WORLD_H = 50;
const WORLD_COLUMNS = 16;
const WORLD_GAP = 2;
const WORLD_ROWS = 12;



var levelOne  =[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 1, 1, 1,
				 1, 0, 4, 0, 4, 0, 1, 0, 5, 0, 1, 0, 1, 4, 4, 1,
				 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 2, 1, 2, 1, 1,
				 1, 1, 1, 2, 1, 1, 1, 0, 4, 0, 1, 0, 0, 0, 1, 1,
				 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 0, 1, 1,
				 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1,
				 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 4, 0, 1, 1,
				 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1,
				 1, 0, 2, 0, 2, 0, 2, 0, 3, 0, 1, 1, 1, 1, 1, 1,
				 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1,
				 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var levelTwo  =[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 4, 0, 1, 4, 4, 1, 5, 1, 4, 4, 4, 1, 1, 1, 1,
                1, 4, 0, 2, 0, 4, 1, 0, 1, 4, 4, 4, 2, 0, 0, 1,
                1, 1, 2, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 0, 1,
                1, 1, 0, 0, 2, 0, 1, 0, 1, 0, 0, 0, 4, 1, 2, 1,
                1, 1, 1, 1, 1, 0, 1, 0, 1, 2, 1, 4, 4, 1, 0, 1,
                1, 3, 1, 1, 1, 2, 1, 2, 1, 2, 1, 0, 0, 1, 0, 1,
                1, 2, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 2, 1, 0, 1,
                1, 2, 1, 1, 1, 0, 4, 0, 4, 0, 1, 1, 0, 1, 0, 1,
                1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 1, 2, 1,
                1, 0, 2, 2, 2, 0, 0, 0, 0, 4, 1, 1, 0, 0, 0, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var levelThree    =[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 4, 4, 1, 1, 1, 0, 2, 0, 1, 4, 4, 1, 0, 3, 1,
                    1, 0, 4, 1, 0, 2, 0, 1, 0, 1, 0, 4, 1, 2, 1, 1,
                    1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1,
                    1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 2, 1, 1,
                    1, 1, 1, 0, 1, 1, 0, 0, 4, 0, 1, 1, 1, 2, 1, 1,
                    1, 5, 1, 2, 1, 1, 0, 0, 0, 0, 2, 2, 0, 0, 0, 1,
                    1, 0, 1, 0, 1, 1, 2, 1, 2, 1, 1, 1, 0, 0, 0, 1,
                    1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1,
                    1, 4, 1, 4, 1, 4, 4, 1, 0, 0, 1, 1, 1, 2, 1, 1,
                    1, 0, 4, 0, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var levelFour =[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 4, 1,
                1, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 1,
                1, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0, 1,
                1, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 1,
                1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 4, 0, 0, 0, 0, 1,
                1, 0, 4, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 2, 1,
                1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 1, 1, 1, 4, 1,
                1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 0, 1,
                1, 3, 2, 2, 2, 2, 1, 1, 1, 4, 4, 1, 1, 1, 5, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var levelFive     =[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 5, 1, 4, 4, 4, 1, 1, 2, 0, 2, 0, 2, 2, 3, 1,
                    1, 0, 1, 1, 2, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
                    1, 4, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 0, 2, 0, 1,
                    1, 0, 1, 1, 0, 1, 1, 0, 0, 4, 1, 1, 0, 1, 0, 1,
                    1, 2, 1, 1, 0, 0, 2, 0, 4, 0, 0, 2, 0, 1, 0, 1,
                    1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 2, 1,
                    1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1,
                    1, 4, 0, 1, 1, 1, 1, 1, 0, 1, 4, 2, 0, 1, 0, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 4, 1, 1, 1, 2, 1,
                    1, 4, 4, 4, 4, 2, 0, 2, 0, 1, 4, 1, 4, 4, 4, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var levels = [levelOne, levelTwo, levelThree, levelFour, levelFive]
var worldGrid = [];

const WORLD_GROUND = 0;
const WORLD_WALL = 1;
const WORLD_DOOR = 2;
const WORLD_GOAL = 3;
const WORLD_KEY = 4;
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

function getTileTypeAtPixelCoord(atX, atY) {
	var heroWorldCol = Math.floor(atX / WORLD_W);
	var heroWorldRow = Math.floor(atY / WORLD_H);
	var worldIndexUnderHero = rowColToArrayIndex(heroWorldCol, heroWorldRow);

	if(heroWorldCol >= 0 && heroWorldCol < WORLD_COLUMNS &&
		heroWorldRow >= 0 && heroWorldRow < WORLD_ROWS) {
		

		return worldIndexUnderHero;
	} // end of valid col and row

	return undefined;
} // end of heroWorldHandling func

function rowColToArrayIndex(col, row)
{
    return col + WORLD_COLUMNS * row;
}

function tileTypeHasTransparency(checkTileType) {
	return (checkTileType == WORLD_GOAL ||
			checkTileType == WORLD_KEY ||
			checkTileType == WORLD_DOOR);
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
            arrayIndex = rowColToArrayIndex(eachCol, eachRow);
            var tileKindHere = worldGrid[arrayIndex];
            var useImg = worldPics[tileKindHere];

            if( tileTypeHasTransparency(tileKindHere)) {
                canvasContext.drawImage(worldPics[WORLD_GROUND], drawTileX, drawTileY);
            }

            canvasContext.drawImage(useImg, drawTileX, drawTileY);
            drawTileX += WORLD_W;
            arrayIndex++;
        } // end of column for loop
        drawTileY += WORLD_H;
        drawTileX = 0;
      } // end of row loop

} // end of drawWorlds()
