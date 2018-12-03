// global variables for car
var carX = 75;
var carY = 75;
var carSpeed = 0;
var carAng = 0;

// constants for moving the car
const GROUNDSPEED_DECAY_MULT = 0.96;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.06;
const BRAKE_POWER = 0.5;
const MIN_SPEED_TO_TURN = 0.5;

function carReset()
{
    for (var eachRow = 0; eachRow < TRACK_ROWS; eachRow++)
        for (var eachCol = 0; eachCol < TRACK_COLUMNS; eachCol++)
        {
            var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
            // draws the car and makes sure there is no track under it.
            if (trackGrid[arrayIndex] == TRACK_PLAYERSTART)
            {
                trackGrid[arrayIndex] = TRACK_ROAD;
                carAng = -Math.PI / 2;
                carX = eachCol * TRACK_W + TRACK_W / 2;
                carY = eachRow * TRACK_H + TRACK_H / 2;
            } // end of car start position
        }// end of for loops
} // end of carReset()

function carMove()
{
    // every frame it lowers the speed by 3% -> adds friction, so
    // the car doesn't behave as flying in space :)
    carSpeed *= GROUNDSPEED_DECAY_MULT;

    // allows the player to steer the car
    if (keyHeld_Gas)
    {
        carSpeed += DRIVE_POWER;
    }

    if (keyHeld_Reverse)
    {
        if (carSpeed > 0)
        {
            carSpeed -= BRAKE_POWER;
        } else {
            carSpeed -= REVERSE_POWER;
        }// end of fast brakes

    }// end of keyHeld_Reverse

    if(Math.abs(carSpeed) > MIN_SPEED_TO_TURN ) {
      if (keyHeld_TurnLeft)
      {
          if (carSpeed > 0)
          {
              carAng -= TURN_RATE;
          } else {
              carAng += TURN_RATE;
          }// end of turning left while in reverse
      }// end of turning

      if (keyHeld_TurnRight)
      {
          if (carSpeed < 0)
          {
              carAng -= TURN_RATE;
          } else {
              carAng += TURN_RATE;
          }// end of turning right while in reverse
      }// end of turning
}
    // moves the car
    // decomposes the angular value into X and Y positions
    carX += Math.cos(carAng) * carSpeed;
    carY += Math.sin(carAng) * carSpeed;
}

function carDraw()
{
    drawBitmapCenteredWithRotation(carPic, carX, carY, carAng);
}
