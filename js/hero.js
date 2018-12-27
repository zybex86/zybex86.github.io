// constants for moving the hero
const GROUNDSPEED_DECAY_MULT = 0.96;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.06;
const BRAKE_POWER = 0.5;
const MIN_SPEED_TO_TURN = 0.5;

function heroClass() {
  // variables for a hero
  this.x = 75;
  this.y = 75;
  this.speed = 0;
  this.ang = 0;
  this.heroPic; // which picture to use
  this.name = "Untitled hero";
  this.score = 0;

  // helps to turn the keys into buttons
  this.keyHeld_Gas = false;
  this.keyHeld_Reverse = false;
  this.keyHeld_TurnLeft = false;
  this.keyHeld_TurnRight = false;

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
    this.speed = 0;

      for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
        for (var eachCol = 0; eachCol < WORLD_COLUMNS; eachCol++)
          {
              var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
              // draws the hero and makes sure there is no world under it.
              if (worldGrid[arrayIndex] == WORLD_PLAYERSTART)
              {
                  worldGrid[arrayIndex] = WORLD_ROAD;
                  this.ang = -Math.PI / 2;
                  this.x = eachCol * WORLD_W + WORLD_W / 2;
                  this.y = eachRow * WORLD_H + WORLD_H / 2;
                  return;
              } // end of hero start position
          }// end of COLUMN for loops
        }// end of ROW for loops
        console.log("NO PLAYER START FOUND!");
  } // end of heroReset()

  this.move = function()
  {
      // every frame it lowers the speed by 3% -> adds friction, so
      // the hero doesn't behave as flying in space :)
      this.speed *= GROUNDSPEED_DECAY_MULT;

      // allows the player to steer the hero
      if (this.keyHeld_Gas)
      {
          this.speed += DRIVE_POWER;
      }

      if (this.keyHeld_Reverse)
      {
          if (this.speed > 0)
          {
              this.speed -= BRAKE_POWER;
          } else {
              this.speed -= REVERSE_POWER;
          }// end of fast brakes

      }// end of keyHeld_Reverse

      if(Math.abs(this.speed) > MIN_SPEED_TO_TURN ) {
        if (this.keyHeld_TurnLeft)
        {
            if (this.speed > 0)
            {
                this.ang -= TURN_RATE;
            } else {
                this.ang += TURN_RATE;
            }// end of turning left while in reverse
        }// end of turning

        if (this.keyHeld_TurnRight)
        {
            if (this.speed < 0)
            {
                this.ang -= TURN_RATE;
            } else {
                this.ang += TURN_RATE;
            }// end of turning right while in reverse
        }// end of turning
  }
      // moves the hero
      // decomposes the angular value into X and Y positions
      this.x += Math.cos(this.ang) * this.speed;
      this.y += Math.sin(this.ang) * this.speed;

      heroWorldHandling(this);
  }

  this.draw = function ()
  {
      drawBitmapCenteredWithRotation(this.heroPic, this.x, this.y, this.ang);
  }

}
