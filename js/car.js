// constants for moving the car
const GROUNDSPEED_DECAY_MULT = 0.96;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.06;
const BRAKE_POWER = 0.5;
const MIN_SPEED_TO_TURN = 0.5;

function carClass() {
  // variables for a car
  this.x = 75;
  this.y = 75;
  this.speed = 0;
  this.ang = 0;
  this.carPic; // which picture to use
  this.name = "Untitled car";
  this.score = 0;

  // helps to turn the keys into buttons
  this.keyHeld_Gas = false;
  this.keyHeld_Reverse = false;
  this.keyHeld_TurnLeft = false;
  this.keyHeld_TurnRight = false;

  // seperate controls for each car
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

  // puts the car in the starting position
  this.reset = function(whichImage, carName) {
    this.name = carName;
    this.carPic = whichImage;
    this.speed = 0;

      for (var eachRow = 0; eachRow < TRACK_ROWS; eachRow++) {
        for (var eachCol = 0; eachCol < TRACK_COLUMNS; eachCol++)
          {
              var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
              // draws the car and makes sure there is no track under it.
              if (trackGrid[arrayIndex] == TRACK_PLAYERSTART)
              {
                  trackGrid[arrayIndex] = TRACK_ROAD;
                  this.ang = -Math.PI / 2;
                  this.x = eachCol * TRACK_W + TRACK_W / 2;
                  this.y = eachRow * TRACK_H + TRACK_H / 2;
                  return;
              } // end of car start position
          }// end of COLUMN for loops
        }// end of ROW for loops
        console.log("NO PLAYER START FOUND!");
  } // end of carReset()

  this.move = function()
  {
      // every frame it lowers the speed by 3% -> adds friction, so
      // the car doesn't behave as flying in space :)
      this.speed *= GROUNDSPEED_DECAY_MULT;

      // allows the player to steer the car
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
      // moves the car
      // decomposes the angular value into X and Y positions
      this.x += Math.cos(this.ang) * this.speed;
      this.y += Math.sin(this.ang) * this.speed;

      carTrackHandling(this);
  }

  this.draw = function ()
  {
      drawBitmapCenteredWithRotation(this.carPic, this.x, this.y, this.ang);
  }

}
