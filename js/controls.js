// key input variables


const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;

// debug mouse variables
var mouseX;
var mouseY;

function setupInput ()
{
    canvas.addEventListener('mousemove', updateMousePos);

    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);

    greenHero.setupInput(KEY_W, KEY_D, KEY_S, KEY_A);
    
}

// connects the mouse to paddle movement
function updateMousePos(evt)
{
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;

    mouseX = evt.clientX - rect.left - root.scrollLeft;
    mouseY = evt.clientY - rect.top - root.scrollTop;
}

// Check if the key is pressed or released
function keySet(keyEvent, setTo) {

  if (keyEvent.keyCode == greenHero.controlKeyLeft)
  {
      greenHero.keyHeld_GoLeft = setTo;
  }

  if (keyEvent.keyCode == greenHero.controlKeyRight)
  {
      greenHero.keyHeld_GoRight = setTo;
  }

  if (keyEvent.keyCode == greenHero.controlKeyUp)
  {
      greenHero.keyHeld_Up = setTo;
  }
  if (keyEvent.keyCode == greenHero.controlKeyDown)
  {
      greenHero.keyHeld_Down = setTo;
  }
}

function keyPressed(evt)
{
  // debug to check the keyCode value
  //console.log("Key pressed: "+ evt.keyCode);
  keySet(evt, true);
  
  evt.preventDefault();
}

function keyReleased(evt)
{
    keySet(evt, false);
    
}
