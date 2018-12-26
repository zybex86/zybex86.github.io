// draws the car
function  drawBitmapCenteredWithRotation(useBitmap, atX, atY, withAng)
{
    // 4. saves our canvas
    canvasContext.save();
    // 3. moves the car into center position
    canvasContext.translate(atX, atY);
    // 2. rotates the car
    canvasContext.rotate(withAng);
    // 1. takes the car into the canvas
    canvasContext.drawImage(useBitmap, -useBitmap.width / 2, -useBitmap.height / 2);
    // 5. restores the code, so we forget everything we did.
    canvasContext.restore();
}

function writeText(showWords, textX,textY, fillColor, font = "30px Verdana")
{
    canvasContext.fillStyle = fillColor;
    canvasContext.font = font;
    canvasContext.fillText(showWords, textX,textY);
}

function drawRect(topLextX,topLeftY, boxWidth,boxheight, fillColor)
{
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLextX,topLeftY, boxWidth,boxheight);
}

function drawCircle(centerX,centerY, radius, fillColor)
{
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX,centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
}
