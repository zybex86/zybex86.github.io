// constants for moving the hero
const WALK_SPEED = 3.0;


function heroClass() {
  // variables for a hero
  this.x = 75;
  this.y = 75;
  this.heroPic; // which picture to use
  this.name = "Vestius the Galant";
  this.keysHeld = 0;
  this.score = 0;

  // helps to turn the keys into buttons
  this.keyHeld_Up = false;
  this.keyHeld_Down = false;
  this.keyHeld_GoLeft = false;
  this.keyHeld_GoRight = false;

  // seperate controls for each hero
  this.controlKeyUp;
  this.controlKeyRight;
  this.controlKeyDown;
  this.controlKeyLeft;

  // asignes controls for the player
  this.setupInput = function(upKey, rightKey, downKey, leftKey) {
    this.controlKeyUp = upKey;
    this.controlKeyRight = rightKey;
    this.controlKeyDown = downKey;
    this.controlKeyLeft = leftKey;
  }

  // puts the hero in the starting position
  this.reset = function(whichImage, heroName) {
    this.name = heroName;
    this.heroPic = whichImage;
    this.keysHeld = 0;
	this.updateKeyReadout();

      for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
        for (var eachCol = 0; eachCol < WORLD_COLUMNS; eachCol++)
          {
              var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
              // draws the hero and makes sure there is no world under it.
              if (worldGrid[arrayIndex] == WORLD_PLAYERSTART)
              {
                  worldGrid[arrayIndex] = WORLD_GROUND;
                  this.ang = -Math.PI / 2;
                  this.x = eachCol * WORLD_W + WORLD_W / 2;
                  this.y = eachRow * WORLD_H + WORLD_H / 2;
                  return;
              } // end of hero start position
          }// end of COLUMN for loops
        }// end of ROW for loops
        console.log("NO PLAYER START FOUND!");
  } // end of heroReset()

    this.updateKeyReadout = function() {
        document.getElementById("keysHeld").innerHTML = "Keys: " + this.keysHeld;
    }

  this.move = function()
  {
      var nextX = this.x;
      var nextY = this.y;
      // allows the player to steer the hero
      if (this.keyHeld_Up)
      {
          nextY -= WALK_SPEED;
      }// end of go up

      if (this.keyHeld_Down)
      {
        nextY += WALK_SPEED;

      }// end of go down

        if (this.keyHeld_GoLeft)
        {
            nextX -= WALK_SPEED;
        }// end of go left

        if (this.keyHeld_GoRight)
        {
            nextX += WALK_SPEED;
        }// end of go right
  
        var walkIntoTileIndex = getTileTypeAtPixelCoord(nextX, nextY);
        var walkIntoTileType = WORLD_WALL;

        if(walkIntoTileIndex != undefined) {
            walkIntoTileType = worldGrid[walkIntoTileIndex];
        }
        switch (walkIntoTileType) {
            case WORLD_GROUND:
                this.x = nextX;
                this.y = nextY;
                break;
        
            case WORLD_GOAL:
                this.score++;
                document.getElementById("winningMsg").innerHTML = "Number of Trophies: " + this.score;
                world++;
                loadLevel(levels[world]);
                break;

            case WORLD_KEY:
                this.keysHeld++; // You receive a key;
                this.updateKeyReadout();

                worldGrid[walkIntoTileIndex] = WORLD_GROUND; // if u collect a key, it draws just ground
                break;

            case WORLD_DOOR:
                if(this.keysHeld > 0) {
                    this.keysHeld--; // use one key
                    this.updateKeyReadout();
                    worldGrid[walkIntoTileIndex] = WORLD_GROUND; // if u open a door, it draws just ground
                    
                }
                break;
            
            case WORLD_WALL:
            default:
                break;
		}
  }

  this.draw = function ()
  {
      drawBitmapCenteredWithRotation(this.heroPic, this.x, this.y, 0);
  }

}
