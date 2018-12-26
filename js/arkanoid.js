// global variables for ball
            var ballX = 75;
            var ballY = 75;
            var ballRadius = 10;
            var ballSpeedX = 5;
            var ballSpeedY = 6;

            // global bricks variables and constants
            const BRICK_W = 80;
            const BRICK_H = 25; 
            const BRICK_COLUMNS = 10;
            const BRICK_GAP = 2;
            const BRICK_ROWS = 11; 
            var brickGrid = new Array(BRICK_COLUMNS * BRICK_ROWS);
            var bricksLeft = 0;

            // global variables for paddle
            const PADDLE_WIDTH = 100;
            const PADDLE_THICKNESS = 25;
            const PADDLE_DIST_FROM_EDGE = 70;
            var paddleX = 400;

            // debug mouse variables
            var mouseX;
            var mouseY;
            // global variables for game space
            var canvas, canvasContext;

            // connects the mouse to paddle movement
            function updateMousePos(evt) 
            {
                var rect = canvas.getBoundingClientRect();
                var root = document.documentElement;
                
                mouseX = evt.clientX - rect.left - root.scrollLeft;
                mouseY = evt.clientY - rect.top - root.scrollTop; 

                paddleX = mouseX - PADDLE_WIDTH / 2;

                /*
                // cheat for debug
                ballX = mouseX;
                ballY = mouseY;

                ballSpeedX = 5;
                ballSpeedY = -5;
                */
            }

            function brickReset() 
            {
                bricksLeft = 0;
                var i;
                for (i = 0; i <2 * BRICK_COLUMNS; i++)
                {
                    brickGrid[i] = false;
                }
                for (; i < BRICK_COLUMNS * BRICK_ROWS; i++)
                {
                    brickGrid[i] = true;
                    bricksLeft++;
                } // end of for loop
                

            } // end of brickReset()

            window.onload = function() 
            {
                // references the canvas
                canvas = document.getElementById('gameCanvas');
                canvasContext = canvas.getContext('2d');

                // sets framerate of refresh
                var framesPerSecond = 40;
                setInterval(updateAll, 1000 / framesPerSecond);

                // moves the paddle
                canvas.addEventListener('mousemove', updateMousePos);
               
                brickReset();
                ballReset();
            }

            function updateAll() 
            {
                moveAll(); 
                drawAll();
            }

            function ballReset() 
            {
                ballX = canvas.width / 2;
                ballY = canvas.height / 2;
                ballSpeedX = 5;
                ballSpeedY = 6;
            }

            function ballMove()
            {
                // moves the ball
                ballX += ballSpeedX;
                ballY += ballSpeedY;

                if (ballX > canvas.width && ballSpeedX > 0.0) { ballSpeedX *= -1; } //right
                if (ballX < 0 && ballSpeedX < 0.0) { ballSpeedX *= -1; } // left
                if(ballY > canvas.height) 
                { 
                    ballReset(); 
                    brickReset();
                } // bottom
                if (ballY < 0 && ballSpeedY < 0.0) { ballSpeedY *= -1; } // top
            }

            function isBrickAtColRow(col, row) 
            {
                if(col >= 0 && col < BRICK_COLUMNS &&
                   row >= 0 && row < BRICK_ROWS) 
                    {
                        var brickIndexUnderCoord = rowColToArrayIndex(col, row);

                        return brickGrid[brickIndexUnderCoord];
                    } else {
                        return false;
                    }
            }

            function ballBrickHandling() 
            {
                // debug showing which column and row and which brick INDEX
                var ballBrickCol = Math.floor(ballX / BRICK_W);
                var ballBrickRow = Math.floor(ballY / BRICK_H);
                var brickIndexUnderBall = rowColToArrayIndex(ballBrickCol, ballBrickRow);
                
                // ball destroys a brick on collision
                if(ballBrickCol >= 0 && ballBrickCol < BRICK_COLUMNS &&
                   ballBrickRow >= 0 && ballBrickRow < BRICK_ROWS)
                    { 
                        if (isBrickAtColRow(ballBrickCol, ballBrickRow))
                        {
                            brickGrid[brickIndexUnderBall] = false;
                            bricksLeft--;
                            if (ballSpeedY < 0.0)
                            {
                                ballSpeedY -= 0.1;
                            } else {
                                ballSpeedY += 0.1;
                            }
                            
                            //console.log(ballSpeedY);
                            
                            // local variables to detect side collision
                            var prevBallX = ballX - ballSpeedX;
                            var prevBallY = ballY - ballSpeedY;
                            var prevBrickCol = Math.floor(prevBallX / BRICK_W);
                            var prevBrickRow = Math.floor(prevBallY / BRICK_H);

                            var bothTestsFailed = true;

                            if (prevBrickCol != ballBrickCol) 
                            { 
                                if (isBrickAtColRow(ballBrickCol, ballBrickRow) == false) 
                                { 
                                    ballSpeedX *= -1;
                                    bothTestsFailed = false; 
                                }
                            } // collision with side

                            if (prevBrickRow != ballBrickRow) 
                            { 
                                if (isBrickAtColRow(ballBrickCol, ballBrickRow) == false) 
                                { 
                                    ballSpeedY *= -1;
                                    bothTestsFailed = false; 
                                }
                            } // collision with top / bottom
                            
                            if (bothTestsFailed) // armpit case
                            {
                                ballSpeedX *= -1;
                                ballSpeedY *= -1;
                            }

                        } //end of brick found
                    } //end of valid col and row
            } // and of ballBrickHandling()

            function ballPaddleHandling()
            {
                //private variables
                var paddleTopEdgeY = canvas.height - PADDLE_DIST_FROM_EDGE;
                var paddleBottomEdgeY = paddleTopEdgeY + PADDLE_THICKNESS;
                var paddleLeftEdgeX = paddleX;
                var paddleRightEdgeX = paddleLeftEdgeX + PADDLE_WIDTH;
                
                // collision with paddle
                if ( ballY > paddleTopEdgeY && // below the top of the paddle
                     ballY < paddleBottomEdgeY && // above the bottom of the paddle
                     ballX > paddleLeftEdgeX && // right of the left side of the paddle
                     ballX < paddleRightEdgeX) // left of the right side of the paddle
                { 
                        ballSpeedY *= -1;
                
                        //add risk factor
                        var centerOfPaddleX = paddleX + PADDLE_WIDTH / 2;
                        var ballDistFromPaddleCenterX = ballX - centerOfPaddleX;
                        ballSpeedX = ballDistFromPaddleCenterX * 0.35;

                        if (bricksLeft ==0) 
                        {
                            brickReset();
                        } // out of bricks 
                } //end of collision with paddle
            } //end of ballPaddleHandling()

            function moveAll() 
            {
                ballMove();

                ballBrickHandling();

                ballPaddleHandling()
            } 

            function rowColToArrayIndex(col, row)
            {
                return col + BRICK_COLUMNS * row;
            }

            function drawBricks() 
            {
                for (var eachRow = 0; eachRow < BRICK_ROWS; eachRow++)
                    for (var eachCol = 0; eachCol < BRICK_COLUMNS; eachCol++)
                    {
                        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
                        // draws bricks that are visible
                        if (brickGrid[arrayIndex]) 
                            drawRect(BRICK_W * eachCol, BRICK_H * eachRow,
                                    BRICK_W - BRICK_GAP,BRICK_H - BRICK_GAP, 'blue');
                    } // end of column for loop
            } // end of drawBricks()

            function drawAll() 
            {
                // draws the game screen
                drawRect(0,0, canvas.width, canvas.height, 'black');
                
                // draws ball
                drawCircle(ballX, ballY, ballRadius, 'white'); 
                
                // draws paddle
                drawRect(paddleX,canvas.height - PADDLE_DIST_FROM_EDGE,
                            PADDLE_WIDTH,PADDLE_THICKNESS, 'white'); 
                
                drawBricks();

               
            }


            function writeText(showWords, textX,textY, fillColor) 
            {
                canvasContext.fillStyle = fillColor;
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