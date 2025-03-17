var c = document.getElementById('canvas').getContext('2d');

//canvas
var W = 804, H = 484;

//game
var gameSpeed = 23;
var loopCount = 0;
var gameStarted, gameOver;

// Mouse
var mouseImage = new Image();
mouseImage.src = 'img/mouse.png';

var mouseX = 218, mouseY = 362; // Initial position
var mouseTargetX1 = 218, mouseTargetX2 = 234; // Movement range
var mouseSpeed = 1; // Speed of the mouse
var mouseR = 6; // Radius of the mouse
var mouseMovingRight = true; // Direction of mouse movement

//cat
// Load the cat images
var whiteCatImage = new Image();
whiteCatImage.src = 'img/whiteCat.png'; // Path to your white cat image

var grayCatImage = new Image();
grayCatImage.src = 'img/grayCat.png'; // Path to your gray cat image


var catImage; // This will hold the randomly selected cat image

//maze
var mazeW, mazeH, mazeX, mazeY, mazeStartX, mazeStartY, mazeEndX, mazeEndY;
var mazeSolutinPathX = [314, 362, 362, 426, 426, 458, 458, 506, 506, 554, 554, 506, 506, 426, 426, 394, 394, 378, 378, 362, 362, 346, 346, 330, 330, 314, 314, 266, 266, 250, 250, 218, 218, 202, 202, 186, 186, 138, 138, 122, 122, 90, 90, 106, 106, 74, 74, 58, 58, 74, 74, 42, 42, 74, 74, 58, 58, 26, 26, 42, 42, 58, 58, 74, 74, 122, 122, 170, 170, 202, 202, 186, 186, 202, 202, 218, 218, 170, 170, 154, 154, 138, 138, 154, 154, 170, 170, 186, 186, 202, 202, 250, 250, 298, 298, 282, 282, 314, 314, 330, 330, 346, 346, 330, 330];
var mazeSolutinPathY = [10, 10, 26, 26, 10, 10, 26, 26, 10, 10, 74, 74, 90, 90, 122, 122, 138, 138, 170, 170, 154, 154, 170, 170, 186, 186, 202, 202, 234, 234, 250, 250, 202, 202, 186, 186, 122, 122, 138, 138, 90, 90, 58, 58, 42, 42, 58, 58, 74, 74, 106, 106, 154, 154, 170, 170, 186, 186, 202, 202, 218, 218, 234, 234, 250, 250, 266, 266, 282, 282, 298, 298, 314, 314, 330, 330, 426, 426, 410, 410, 442, 442, 458, 458, 474, 474, 458, 458, 442, 442, 474, 474, 442, 442, 458, 458, 474, 474, 458, 458, 442, 442, 474, 474, 482];
var mazeColor, mazeTextColorOrder, mazeTextGrd;

//player
var playerX, playerY, playerR, playerSpeed;
var playerPathX, playerPathY;
var moveDown, moveUp, moveLeft, moveRight, hintPressed, hintDraw;
var resultsName = [], resultsDiff = [];

var interval = init();

var miceCaught = 0; // Counter for caught mice

// Mice
var mice = [
    { x: 218, y: 362, targetX1: 218, targetX2: 234, speed: 1, movingRight: true, caught: false }, // Mouse 1
    { x: 314, y: 106, targetX1: 314, targetX2: 346, speed: 1, movingRight: true, caught: false }, // Mouse 2
    { x: 218, y: 186, targetX1: 202, targetX2: 218, speed: 1, movingRight: true, caught: false }, // Mouse 3
    { x: 10, y: 378, targetY1: 378, targetY2: 442, speed: 1, movingDown: true, caught: false },    // Mouse 4 (vertical)
    { x: 186, y: 330, targetY1: 330, targetY2: 346, speed: 1, movingDown: true, caught: false },   // Mouse 5 (vertical)
    { x: 500, y: 200, targetX1: 480, targetX2: 500, speed: 1, movingRight: true, caught: false },  // Mouse 6 (new horizontal mouse)
    { x: 395, y: 100, targetY1: 75, targetY2: 110, speed: 1, movingDown: true, caught: false },    // Mouse 7 (new vertical mouse)
    { x: 620, y: 235, targetX1: 580, targetX2: 620, speed: 1, movingRight: true, caught: false },  // Mouse 8 (new horizontal mouse)
    { x: 698, y: 290, targetY1: 280, targetY2: 310, speed: 1, movingDown: true, caught: false }    // Mouse 9 (new vertical mouse)
];
var miceCaught = 0; // Counter for caught mice

// Randomly select a cat image
function selectRandomCat() {
    var random = Math.random(); // Generate a random number between 0 and 1
    if (random < 0.5) {
        catImage = whiteCatImage; // 50% chance for white cat
    } else {
        catImage = grayCatImage; // 50% chance for gray cat
    }
    console.log('Selected cat:', catImage === whiteCatImage ? 'White Cat' : 'Gray Cat');
}

// Call this function when the game starts
selectRandomCat();

function moveMouse() {
    // Move mouse horizontally between mouseTargetX1 and mouseTargetX2
    if (mouseMovingRight) {
        mouseX += mouseSpeed;
        if (mouseX >= mouseTargetX2) {
            mouseMovingRight = false; // Reverse direction
        }
    } else {
        mouseX -= mouseSpeed;
        if (mouseX <= mouseTargetX1) {
            mouseMovingRight = true; // Reverse direction
        }
    }
}

function moveMice() {
    mice.forEach(mouse => {
        if (!mouse.caught) {
            if (mouse.targetX1 !== undefined) { // Horizontal movement
                if (mouse.movingRight) {
                    mouse.x += mouse.speed;
                    if (mouse.x >= mouse.targetX2) {
                        mouse.movingRight = false;
                    }
                } else {
                    mouse.x -= mouse.speed;
                    if (mouse.x <= mouse.targetX1) {
                        mouse.movingRight = true;
                    }
                }
            } else if (mouse.targetY1 !== undefined) { // Vertical movement
                if (mouse.movingDown) {
                    mouse.y += mouse.speed;
                    if (mouse.y >= mouse.targetY2) {
                        mouse.movingDown = false;
                    }
                } else {
                    mouse.y -= mouse.speed;
                    if (mouse.y <= mouse.targetY1) {
                        mouse.movingDown = true;
                    }
                }
            }
        }
    });
}

/** GAME LOOP **/
function gameLoop() {
	update();
	render();
}
function update() {
    updateGameVariables();
    movePlayer();
    moveMice(); // Move all mice
    restrictPlayer();
    checkMiceCollision(); // Check for collisions with mice
    checkWinCondition(); // Check if the player has won
}

function checkMiceCollision() {
    mice.forEach(mouse => {
        if (!mouse.caught) {
            var dx = playerX - mouse.x;
            var dy = playerY - mouse.y;
            var distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < playerR + mouseR) {
                // Collision detected
                mouse.caught = true;
                miceCaught++; // Increment the counter
            }
        }
    });
}

function checkWinCondition() {
    if (playerX === 410 && playerY === 482 && !gameOver) {
        gameOver = true;

        // Trigger SweetAlert
        Swal.fire({
            title: 'Congratulations!',
            text: `You caught ${miceCaught} mice out! You won!`,
            icon: 'success',
            confirmButtonText: 'Play Again',
            customClass: {
                popup: 'custom-swal-popup',
                confirmButton: 'custom-swal-confirm-button'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // Reset the game or redirect to the start page
                window.location.reload(); // Reload the page to restart the game
            }
        });
        // Add custom CSS to adjust the z-index of the SweetAlert2 modal and style the button and icon
        const style = document.createElement('style');
        style.innerHTML = `
            .custom-swal-popup {
                z-index: 9999 !important; /* Ensure the modal is above other elements */
            }

            /* Customize the confirm button size */
            .custom-swal-confirm-button {
                width: 200px !important; /* Adjust the width */
                height: 50px !important; /* Adjust the height */
                font-size: 20px !important; /* Adjust the font size */
            }

            /* Customize the icon and its circle background */
            .custom-swal-icon {
                color: #1e3620 !important; /* Change the icon color to #1e3620 */
                border-color: #1e3620 !important; /* Change the circle border color */
            }

            .custom-swal-icon .swal2-icon-content {
                color: #1e3620 !important; /* Ensure the icon content (i) is also #1e3620 */
            }

            .custom-swal-icon.swal2-info {
                background-color: rgba(30, 54, 32, 0.2) !important; /* Change the circle background color */
            }
        `;
        document.head.appendChild(style);
    }
}

function drawMice() {
    mice.forEach(mouse => {
        if (!mouse.caught) {
            // Draw the mouse image
            c.drawImage(mouseImage, mouse.x - mouseR, mouse.y - mouseR, mouseR * 2, mouseR * 2);
        }
    });
}

function drawMouse() {
    c.beginPath();
    c.lineWidth = 2;
    c.strokeStyle = '#000';
    c.arc(mouseX, mouseY, mouseR, 0, 2 * Math.PI);
    c.stroke();
    c.fillStyle = 'gray'; // Mouse color
    c.fill();
    c.closePath();
}

function updateGameVariables() {
	if (loopCount >= 1000)
		loopCount = 0;
	else
		loopCount += gameSpeed;

	if (playerX == mazeEndX && playerY + playerR >= mazeEndY - 3 && !gameOver)
		finishGame(0);
}

function updateInfoPannel() {

}

function movePlayer() {
	if (moveDown) {
		playerY += playerSpeed;
		gameStarted = true;
	}
	if (moveUp) {
		playerY -= playerSpeed;
		gameStarted = true;
	}
	if (moveRight) {
		playerX += playerSpeed;
		gameStarted = true;
	}
	if (moveLeft) {
		playerX -= playerSpeed;
		gameStarted = true;
	}
}

function restrictPlayer() {
	for (i = 0; i < mazePathX.length - 1; i += 2) {
		if (i >= 666) {
			if (playerX + playerR + playerSpeed == mazePathX[i] + mazeX && (playerY >= mazePathY[i] + mazeY && playerY <= mazePathY[i + 1] + mazeY))
				playerX -= playerSpeed;
			else if (playerX - playerR - playerSpeed == mazePathX[i] + mazeX && (playerY >= mazePathY[i] + mazeY && playerY <= mazePathY[i + 1] + mazeY))
				playerX += playerSpeed;

			var d;
			if ((playerX - playerR <= mazePathX[i] + mazeX && playerX + playerR >= mazePathX[i] + mazeX) && (playerY + playerR >= mazePathY[i] + mazeY && playerY + playerR <= mazePathY[i + 1] + mazeY)) {
				d = Math.sqrt(Math.pow(playerR, 2) + Math.pow(mazePathX[i] + mazeX, 2));
				if (d > playerR)
					playerY -= playerSpeed;
			} else if ((playerX - playerR <= mazePathX[i] + mazeX && playerX + playerR >= mazePathX[i] + mazeX) && (playerY - playerR >= mazePathY[i] + mazeY && playerY - playerR <= mazePathY[i + 1] + mazeY)) {
				d = Math.sqrt(Math.pow(playerR, 2) + Math.pow(mazePathX[i] + mazeX, 2));
				if (d > playerR)
					playerY += playerSpeed;
			}
		} else {
			if ((playerY + playerR + playerSpeed == mazePathY[i] + mazeY && playerX >= mazePathX[i] + mazeX && playerX <= mazePathX[i + 1] + mazeX))			//omeji Y stene
				playerY -= playerSpeed;
			else if (playerY - playerR - playerSpeed == mazePathY[i] + mazeY && (playerX >= mazePathX[i] + mazeX && playerX <= mazePathX[i + 1] + mazeX))
				playerY += playerSpeed;

			var d;
			if ((playerY - playerR <= mazePathY[i] + mazeY && playerY + playerR >= mazePathY[i] + mazeY) && (playerX + playerR >= mazePathX[i] + mazeX && playerX + playerR <= mazePathX[i + 1] + mazeX)) {
				d = Math.sqrt(Math.pow(playerR, 2) + Math.pow(mazePathX[i] + mazeX, 2));
				if (d > playerR)
					playerX -= playerSpeed;
			} else if ((playerY - playerR <= mazePathY[i] + mazeY && playerY + playerR >= mazePathY[i] + mazeY) && (playerX - playerR >= mazePathX[i] + mazeX && playerX - playerR <= mazePathX[i + 1] + mazeX)) {
				d = Math.sqrt(Math.pow(playerR, 2) + Math.pow(mazePathX[i] + mazeX, 2));
				if (d > playerR)
					playerX += playerSpeed;
			}
		}
	}

	if (playerX + playerR > mazeW + mazeX - 4)
		playerX -= playerSpeed;
	else if (playerX - playerR < mazeX + 3)
		playerX += playerSpeed;

	if (playerY + playerR > mazeH + mazeY + 10)
		playerY -= playerSpeed;
	else if (playerY - playerR < mazeY - 5)
		playerY += playerSpeed;
}



function changeDifficulty(a) {
	if (!gameStarted) {
		switch (a) {
			case 1:
				hints = 5;
				break;
		}
		difficulty = a;
	}
}
/** UPDATE **/

/** RENDER **/
function render() {
    drawBG();
    drawMaze();
    if (hintDraw) drawMazeSolution();
    drawPlayer();
    drawMice(); // Draw all mice
}

function drawBG() {

	c.clearRect(0, 0, W, H);
}

function checkMouseCollision() {
    var dx = playerX - mouseX;
    var dy = playerY - mouseY;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < playerR + mouseR) {
        // Collision detected
        alert("You caught the mouse!");
        // Stop the mouse's movement
        mouseSpeed = 0;
    }
}

var imagesLoaded = 0;

function checkImagesLoaded() {
    imagesLoaded++;
    if (imagesLoaded === 2) { // Both images are loaded
        console.log('Cat images loaded!');
        selectRandomCat(); // Randomly select a cat after images are loaded
    }
}

whiteCatImage.onload = checkImagesLoaded;
grayCatImage.onload = checkImagesLoaded;


function drawPlayer() {
    if (catImage) { // Ensure the image is loaded
        // Draw the cat image
        c.drawImage(catImage, playerX - playerR, playerY - playerR, playerR * 2, playerR * 2);
    }
}

function drawMaze() {
	c.strokeStyle = "rgb(124, 175, 140)";
	c.lineWidth = 2;

	for (i = 0; i < mazePathX.length; i += 2) {
		c.beginPath();
		c.moveTo(mazePathX[i] + mazeX, mazePathY[i] + mazeY);
		c.lineTo(mazePathX[i + 1] + mazeX, mazePathY[i + 1] + mazeY);
		c.stroke();
		c.closePath();
	}

	if (loopCount % (gameSpeed * 6) == 0) {
		if (!gameStarted)
			mazeTextGrd = c.createLinearGradient(mazeStartX - 28, mazeStartY - 10, mazeStartX + 20, mazeStartY - 5);
		else
			mazeTextGrd = c.createLinearGradient(mazeEndX - 12, mazeEndY + 20, mazeEndX + 32, mazeEndY + 40);

		for (i = 0; i <= 1; i += 0.25) {
			if (mazeTextColorOrder > 3)
				mazeTextColorOrder = 0;
			mazeTextGrd.addColorStop(i, mazeColor[mazeTextColorOrder])
			mazeTextColorOrder++;
		}
	}
	c.fillStyle = mazeTextGrd;
	c.font = 'bold 18pt Calibri';
}

function drawMazeSolution() {
	c.strokeStyle = "purple";
	c.lineWidth = 2;

	c.beginPath();
	c.moveTo(mazeSolutinPathX[i], mazeSolutinPathY[i]);

	for (i = 0; i < mazeSolutinPathX.length; i++) {
		c.lineTo(mazeSolutinPathX[i] + mazeX, mazeSolutinPathY[i] + mazeY);
	}

	c.stroke();
	c.closePath();
}
/** RENDER **/

/** INIT **/
function init() {
	initMaze();
	initPlayer();
	initGame();

	return setInterval(gameLoop, gameSpeed);
}

function initPlayer() {
	playerX = 402;
	playerY = 8;
	playerR = 6;
	playerSpeed = 1;

	playerPathX = [playerX];
	playerPathY = [playerY];
}

function initMaze() {
	mazeW = 804;
	mazeH = 484;
	mazeX = Math.round((W - mazeW) / 2);
	mazeY = Math.round((H - mazeH) / 2);
	mazeStartX = 314 + mazeX;
	mazeStartY = 2 + mazeY;
	mazeEndX = mazeX + 330;
	mazeEndY = mazeY + mazeH - 2;

	mazeColor = ["purple", "pink", "grey", "black"];
	mazeTextColorOrder = 0;

	// Example SVG content (replace this with your actual SVG content)
	var svgContent = `
			<svg width="804" height="484" version="1.1" xmlns="http://www.w3.org/2000/svg">
			  <g fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square">
    <line x1="2" y1="2" x2="386" y2="2" />
    <line x1="402" y1="2" x2="802" y2="2" />
    <line x1="18" y1="18" x2="34" y2="18" />
    <line x1="50" y1="18" x2="114" y2="18" />
    <line x1="146" y1="18" x2="162" y2="18" />
    <line x1="194" y1="18" x2="258" y2="18" />
    <line x1="274" y1="18" x2="306" y2="18" />
    <line x1="370" y1="18" x2="434" y2="18" />
    <line x1="466" y1="18" x2="514" y2="18" />
    <line x1="530" y1="18" x2="578" y2="18" />
    <line x1="594" y1="18" x2="610" y2="18" />
    <line x1="642" y1="18" x2="674" y2="18" />
    <line x1="706" y1="18" x2="722" y2="18" />
    <line x1="754" y1="18" x2="770" y2="18" />
    <line x1="18" y1="34" x2="98" y2="34" />
    <line x1="114" y1="34" x2="146" y2="34" />
    <line x1="162" y1="34" x2="210" y2="34" />
    <line x1="226" y1="34" x2="242" y2="34" />
    <line x1="258" y1="34" x2="290" y2="34" />
    <line x1="306" y1="34" x2="354" y2="34" />
    <line x1="370" y1="34" x2="386" y2="34" />
    <line x1="402" y1="34" x2="434" y2="34" />
    <line x1="450" y1="34" x2="482" y2="34" />
    <line x1="514" y1="34" x2="546" y2="34" />
    <line x1="562" y1="34" x2="594" y2="34" />
    <line x1="610" y1="34" x2="642" y2="34" />
    <line x1="658" y1="34" x2="674" y2="34" />
    <line x1="770" y1="34" x2="786" y2="34" />
    <line x1="34" y1="50" x2="98" y2="50" />
    <line x1="130" y1="50" x2="146" y2="50" />
    <line x1="178" y1="50" x2="194" y2="50" />
    <line x1="210" y1="50" x2="226" y2="50" />
    <line x1="242" y1="50" x2="258" y2="50" />
    <line x1="274" y1="50" x2="306" y2="50" />
    <line x1="322" y1="50" x2="370" y2="50" />
    <line x1="386" y1="50" x2="450" y2="50" />
    <line x1="466" y1="50" x2="482" y2="50" />
    <line x1="498" y1="50" x2="514" y2="50" />
    <line x1="530" y1="50" x2="562" y2="50" />
    <line x1="578" y1="50" x2="594" y2="50" />
    <line x1="610" y1="50" x2="658" y2="50" />
    <line x1="674" y1="50" x2="690" y2="50" />
    <line x1="706" y1="50" x2="738" y2="50" />
    <line x1="754" y1="50" x2="770" y2="50" />
    <line x1="2" y1="66" x2="18" y2="66" />
    <line x1="50" y1="66" x2="66" y2="66" />
    <line x1="82" y1="66" x2="114" y2="66" />
    <line x1="130" y1="66" x2="146" y2="66" />
    <line x1="162" y1="66" x2="194" y2="66" />
    <line x1="226" y1="66" x2="242" y2="66" />
    <line x1="290" y1="66" x2="306" y2="66" />
    <line x1="338" y1="66" x2="354" y2="66" />
    <line x1="370" y1="66" x2="402" y2="66" />
    <line x1="434" y1="66" x2="466" y2="66" />
    <line x1="498" y1="66" x2="514" y2="66" />
    <line x1="626" y1="66" x2="642" y2="66" />
    <line x1="658" y1="66" x2="674" y2="66" />
    <line x1="722" y1="66" x2="738" y2="66" />
    <line x1="754" y1="66" x2="770" y2="66" />
    <line x1="18" y1="82" x2="50" y2="82" />
    <line x1="66" y1="82" x2="82" y2="82" />
    <line x1="114" y1="82" x2="130" y2="82" />
    <line x1="146" y1="82" x2="162" y2="82" />
    <line x1="194" y1="82" x2="210" y2="82" />
    <line x1="242" y1="82" x2="290" y2="82" />
    <line x1="338" y1="82" x2="370" y2="82" />
    <line x1="402" y1="82" x2="418" y2="82" />
    <line x1="434" y1="82" x2="450" y2="82" />
    <line x1="466" y1="82" x2="482" y2="82" />
    <line x1="498" y1="82" x2="514" y2="82" />
    <line x1="546" y1="82" x2="594" y2="82" />
    <line x1="610" y1="82" x2="642" y2="82" />
    <line x1="674" y1="82" x2="690" y2="82" />
    <line x1="706" y1="82" x2="722" y2="82" />
    <line x1="738" y1="82" x2="786" y2="82" />
    <line x1="50" y1="98" x2="66" y2="98" />
    <line x1="98" y1="98" x2="114" y2="98" />
    <line x1="130" y1="98" x2="146" y2="98" />
    <line x1="178" y1="98" x2="226" y2="98" />
    <line x1="242" y1="98" x2="258" y2="98" />
    <line x1="290" y1="98" x2="306" y2="98" />
    <line x1="322" y1="98" x2="338" y2="98" />
    <line x1="354" y1="98" x2="386" y2="98" />
    <line x1="450" y1="98" x2="482" y2="98" />
    <line x1="514" y1="98" x2="530" y2="98" />
    <line x1="546" y1="98" x2="578" y2="98" />
    <line x1="610" y1="98" x2="658" y2="98" />
    <line x1="690" y1="98" x2="706" y2="98" />
    <line x1="82" y1="114" x2="98" y2="114" />
    <line x1="114" y1="114" x2="130" y2="114" />
    <line x1="146" y1="114" x2="162" y2="114" />
    <line x1="194" y1="114" x2="210" y2="114" />
    <line x1="306" y1="114" x2="370" y2="114" />
    <line x1="386" y1="114" x2="402" y2="114" />
    <line x1="418" y1="114" x2="434" y2="114" />
    <line x1="450" y1="114" x2="466" y2="114" />
    <line x1="482" y1="114" x2="514" y2="114" />
    <line x1="562" y1="114" x2="594" y2="114" />
    <line x1="610" y1="114" x2="626" y2="114" />
    <line x1="658" y1="114" x2="674" y2="114" />
    <line x1="690" y1="114" x2="722" y2="114" />
    <line x1="2" y1="130" x2="18" y2="130" />
    <line x1="66" y1="130" x2="114" y2="130" />
    <line x1="130" y1="130" x2="146" y2="130" />
    <line x1="162" y1="130" x2="178" y2="130" />
    <line x1="194" y1="130" x2="210" y2="130" />
    <line x1="226" y1="130" x2="242" y2="130" />
    <line x1="258" y1="130" x2="306" y2="130" />
    <line x1="338" y1="130" x2="354" y2="130" />
    <line x1="370" y1="130" x2="386" y2="130" />
    <line x1="402" y1="130" x2="418" y2="130" />
    <line x1="434" y1="130" x2="466" y2="130" />
    <line x1="482" y1="130" x2="498" y2="130" />
    <line x1="514" y1="130" x2="530" y2="130" />
    <line x1="562" y1="130" x2="594" y2="130" />
    <line x1="626" y1="130" x2="658" y2="130" />
    <line x1="674" y1="130" x2="722" y2="130" />
    <line x1="754" y1="130" x2="786" y2="130" />
    <line x1="34" y1="146" x2="66" y2="146" />
    <line x1="82" y1="146" x2="114" y2="146" />
    <line x1="162" y1="146" x2="194" y2="146" />
    <line x1="210" y1="146" x2="226" y2="146" />
    <line x1="242" y1="146" x2="306" y2="146" />
    <line x1="338" y1="146" x2="354" y2="146" />
    <line x1="418" y1="146" x2="434" y2="146" />
    <line x1="466" y1="146" x2="482" y2="146" />
    <line x1="530" y1="146" x2="546" y2="146" />
    <line x1="562" y1="146" x2="578" y2="146" />
    <line x1="594" y1="146" x2="610" y2="146" />
    <line x1="674" y1="146" x2="722" y2="146" />
    <line x1="770" y1="146" x2="786" y2="146" />
    <line x1="18" y1="162" x2="34" y2="162" />
    <line x1="50" y1="162" x2="82" y2="162" />
    <line x1="114" y1="162" x2="130" y2="162" />
    <line x1="162" y1="162" x2="194" y2="162" />
    <line x1="258" y1="162" x2="290" y2="162" />
    <line x1="354" y1="162" x2="370" y2="162" />
    <line x1="402" y1="162" x2="418" y2="162" />
    <line x1="434" y1="162" x2="450" y2="162" />
    <line x1="466" y1="162" x2="514" y2="162" />
    <line x1="530" y1="162" x2="562" y2="162" />
    <line x1="610" y1="162" x2="626" y2="162" />
    <line x1="642" y1="162" x2="674" y2="162" />
    <line x1="738" y1="162" x2="754" y2="162" />
    <line x1="34" y1="178" x2="50" y2="178" />
    <line x1="82" y1="178" x2="98" y2="178" />
    <line x1="114" y1="178" x2="130" y2="178" />
    <line x1="146" y1="178" x2="162" y2="178" />
    <line x1="178" y1="178" x2="194" y2="178" />
    <line x1="226" y1="178" x2="242" y2="178" />
    <line x1="274" y1="178" x2="290" y2="178" />
    <line x1="306" y1="178" x2="322" y2="178" />
    <line x1="354" y1="178" x2="402" y2="178" />
    <line x1="418" y1="178" x2="434" y2="178" />
    <line x1="450" y1="178" x2="498" y2="178" />
    <line x1="514" y1="178" x2="530" y2="178" />
    <line x1="546" y1="178" x2="610" y2="178" />
    <line x1="626" y1="178" x2="674" y2="178" />
    <line x1="690" y1="178" x2="738" y2="178" />
    <line x1="770" y1="178" x2="802" y2="178" />
    <line x1="18" y1="194" x2="66" y2="194" />
    <line x1="82" y1="194" x2="98" y2="194" />
    <line x1="130" y1="194" x2="162" y2="194" />
    <line x1="178" y1="194" x2="210" y2="194" />
    <line x1="258" y1="194" x2="274" y2="194" />
    <line x1="322" y1="194" x2="338" y2="194" />
    <line x1="354" y1="194" x2="386" y2="194" />
    <line x1="402" y1="194" x2="418" y2="194" />
    <line x1="434" y1="194" x2="466" y2="194" />
    <line x1="530" y1="194" x2="546" y2="194" />
    <line x1="610" y1="194" x2="626" y2="194" />
    <line x1="706" y1="194" x2="770" y2="194" />
    <line x1="2" y1="210" x2="18" y2="210" />
    <line x1="50" y1="210" x2="82" y2="210" />
    <line x1="114" y1="210" x2="146" y2="210" />
    <line x1="162" y1="210" x2="178" y2="210" />
    <line x1="210" y1="210" x2="226" y2="210" />
    <line x1="242" y1="210" x2="290" y2="210" />
    <line x1="338" y1="210" x2="354" y2="210" />
    <line x1="370" y1="210" x2="402" y2="210" />
    <line x1="418" y1="210" x2="434" y2="210" />
    <line x1="466" y1="210" x2="562" y2="210" />
    <line x1="578" y1="210" x2="610" y2="210" />
    <line x1="626" y1="210" x2="674" y2="210" />
    <line x1="690" y1="210" x2="706" y2="210" />
    <line x1="722" y1="210" x2="754" y2="210" />
    <line x1="770" y1="210" x2="786" y2="210" />
    <line x1="34" y1="226" x2="130" y2="226" />
    <line x1="146" y1="226" x2="162" y2="226" />
    <line x1="178" y1="226" x2="194" y2="226" />
    <line x1="226" y1="226" x2="242" y2="226" />
    <line x1="274" y1="226" x2="322" y2="226" />
    <line x1="338" y1="226" x2="354" y2="226" />
    <line x1="386" y1="226" x2="418" y2="226" />
    <line x1="466" y1="226" x2="498" y2="226" />
    <line x1="562" y1="226" x2="610" y2="226" />
    <line x1="642" y1="226" x2="690" y2="226" />
    <line x1="722" y1="226" x2="738" y2="226" />
    <line x1="18" y1="242" x2="66" y2="242" />
    <line x1="98" y1="242" x2="178" y2="242" />
    <line x1="210" y1="242" x2="226" y2="242" />
    <line x1="258" y1="242" x2="274" y2="242" />
    <line x1="290" y1="242" x2="306" y2="242" />
    <line x1="322" y1="242" x2="338" y2="242" />
    <line x1="386" y1="242" x2="402" y2="242" />
    <line x1="482" y1="242" x2="530" y2="242" />
    <line x1="578" y1="242" x2="642" y2="242" />
    <line x1="674" y1="242" x2="690" y2="242" />
    <line x1="722" y1="242" x2="786" y2="242" />
    <line x1="34" y1="258" x2="50" y2="258" />
    <line x1="82" y1="258" x2="114" y2="258" />
    <line x1="130" y1="258" x2="146" y2="258" />
    <line x1="162" y1="258" x2="178" y2="258" />
    <line x1="210" y1="258" x2="258" y2="258" />
    <line x1="274" y1="258" x2="290" y2="258" />
    <line x1="306" y1="258" x2="322" y2="258" />
    <line x1="338" y1="258" x2="418" y2="258" />
    <line x1="450" y1="258" x2="466" y2="258" />
    <line x1="498" y1="258" x2="514" y2="258" />
    <line x1="530" y1="258" x2="546" y2="258" />
    <line x1="610" y1="258" x2="674" y2="258" />
    <line x1="690" y1="258" x2="706" y2="258" />
    <line x1="738" y1="258" x2="754" y2="258" />
    <line x1="770" y1="258" x2="786" y2="258" />
    <line x1="18" y1="274" x2="50" y2="274" />
    <line x1="66" y1="274" x2="82" y2="274" />
    <line x1="98" y1="274" x2="130" y2="274" />
    <line x1="146" y1="274" x2="162" y2="274" />
    <line x1="194" y1="274" x2="242" y2="274" />
    <line x1="258" y1="274" x2="274" y2="274" />
    <line x1="290" y1="274" x2="306" y2="274" />
    <line x1="322" y1="274" x2="338" y2="274" />
    <line x1="354" y1="274" x2="386" y2="274" />
    <line x1="418" y1="274" x2="450" y2="274" />
    <line x1="482" y1="274" x2="498" y2="274" />
    <line x1="514" y1="274" x2="610" y2="274" />
    <line x1="642" y1="274" x2="674" y2="274" />
    <line x1="690" y1="274" x2="706" y2="274" />
    <line x1="770" y1="274" x2="786" y2="274" />
    <line x1="2" y1="290" x2="18" y2="290" />
    <line x1="34" y1="290" x2="82" y2="290" />
    <line x1="114" y1="290" x2="162" y2="290" />
    <line x1="178" y1="290" x2="210" y2="290" />
    <line x1="242" y1="290" x2="258" y2="290" />
    <line x1="290" y1="290" x2="306" y2="290" />
    <line x1="322" y1="290" x2="338" y2="290" />
    <line x1="370" y1="290" x2="386" y2="290" />
    <line x1="418" y1="290" x2="434" y2="290" />
    <line x1="578" y1="290" x2="594" y2="290" />
    <line x1="626" y1="290" x2="658" y2="290" />
    <line x1="674" y1="290" x2="690" y2="290" />
    <line x1="722" y1="290" x2="738" y2="290" />
    <line x1="754" y1="290" x2="770" y2="290" />
    <line x1="18" y1="306" x2="34" y2="306" />
    <line x1="50" y1="306" x2="114" y2="306" />
    <line x1="162" y1="306" x2="242" y2="306" />
    <line x1="274" y1="306" x2="290" y2="306" />
    <line x1="306" y1="306" x2="338" y2="306" />
    <line x1="354" y1="306" x2="370" y2="306" />
    <line x1="386" y1="306" x2="434" y2="306" />
    <line x1="450" y1="306" x2="466" y2="306" />
    <line x1="482" y1="306" x2="514" y2="306" />
    <line x1="530" y1="306" x2="546" y2="306" />
    <line x1="610" y1="306" x2="674" y2="306" />
    <line x1="706" y1="306" x2="722" y2="306" />
    <line x1="738" y1="306" x2="754" y2="306" />
    <line x1="2" y1="322" x2="18" y2="322" />
    <line x1="50" y1="322" x2="66" y2="322" />
    <line x1="98" y1="322" x2="114" y2="322" />
    <line x1="130" y1="322" x2="194" y2="322" />
    <line x1="210" y1="322" x2="226" y2="322" />
    <line x1="274" y1="322" x2="290" y2="322" />
    <line x1="322" y1="322" x2="338" y2="322" />
    <line x1="354" y1="322" x2="370" y2="322" />
    <line x1="402" y1="322" x2="482" y2="322" />
    <line x1="514" y1="322" x2="546" y2="322" />
    <line x1="578" y1="322" x2="610" y2="322" />
    <line x1="626" y1="322" x2="658" y2="322" />
    <line x1="690" y1="322" x2="722" y2="322" />
    <line x1="754" y1="322" x2="802" y2="322" />
    <line x1="2" y1="338" x2="18" y2="338" />
    <line x1="34" y1="338" x2="50" y2="338" />
    <line x1="82" y1="338" x2="98" y2="338" />
    <line x1="114" y1="338" x2="130" y2="338" />
    <line x1="162" y1="338" x2="178" y2="338" />
    <line x1="194" y1="338" x2="226" y2="338" />
    <line x1="242" y1="338" x2="258" y2="338" />
    <line x1="274" y1="338" x2="322" y2="338" />
    <line x1="338" y1="338" x2="386" y2="338" />
    <line x1="418" y1="338" x2="434" y2="338" />
    <line x1="482" y1="338" x2="530" y2="338" />
    <line x1="562" y1="338" x2="594" y2="338" />
    <line x1="626" y1="338" x2="706" y2="338" />
    <line x1="722" y1="338" x2="738" y2="338" />
    <line x1="754" y1="338" x2="770" y2="338" />
    <line x1="2" y1="354" x2="18" y2="354" />
    <line x1="82" y1="354" x2="114" y2="354" />
    <line x1="130" y1="354" x2="146" y2="354" />
    <line x1="178" y1="354" x2="210" y2="354" />
    <line x1="226" y1="354" x2="242" y2="354" />
    <line x1="258" y1="354" x2="274" y2="354" />
    <line x1="338" y1="354" x2="354" y2="354" />
    <line x1="386" y1="354" x2="450" y2="354" />
    <line x1="466" y1="354" x2="498" y2="354" />
    <line x1="514" y1="354" x2="546" y2="354" />
    <line x1="578" y1="354" x2="658" y2="354" />
    <line x1="674" y1="354" x2="690" y2="354" />
    <line x1="706" y1="354" x2="754" y2="354" />
    <line x1="786" y1="354" x2="802" y2="354" />
    <line x1="2" y1="370" x2="18" y2="370" />
    <line x1="66" y1="370" x2="82" y2="370" />
    <line x1="98" y1="370" x2="130" y2="370" />
    <line x1="210" y1="370" x2="226" y2="370" />
    <line x1="258" y1="370" x2="290" y2="370" />
    <line x1="402" y1="370" x2="450" y2="370" />
    <line x1="482" y1="370" x2="498" y2="370" />
    <line x1="546" y1="370" x2="562" y2="370" />
    <line x1="610" y1="370" x2="658" y2="370" />
    <line x1="674" y1="370" x2="706" y2="370" />
    <line x1="770" y1="370" x2="786" y2="370" />
    <line x1="18" y1="386" x2="34" y2="386" />
    <line x1="66" y1="386" x2="130" y2="386" />
    <line x1="162" y1="386" x2="226" y2="386" />
    <line x1="290" y1="386" x2="354" y2="386" />
    <line x1="386" y1="386" x2="402" y2="386" />
    <line x1="434" y1="386" x2="450" y2="386" />
    <line x1="482" y1="386" x2="514" y2="386" />
    <line x1="594" y1="386" x2="690" y2="386" />
    <line x1="722" y1="386" x2="738" y2="386" />
    <line x1="770" y1="386" x2="786" y2="386" />
    <line x1="34" y1="402" x2="66" y2="402" />
    <line x1="98" y1="402" x2="114" y2="402" />
    <line x1="130" y1="402" x2="162" y2="402" />
    <line x1="178" y1="402" x2="210" y2="402" />
    <line x1="226" y1="402" x2="258" y2="402" />
    <line x1="274" y1="402" x2="338" y2="402" />
    <line x1="354" y1="402" x2="370" y2="402" />
    <line x1="386" y1="402" x2="418" y2="402" />
    <line x1="434" y1="402" x2="466" y2="402" />
    <line x1="482" y1="402" x2="530" y2="402" />
    <line x1="546" y1="402" x2="562" y2="402" />
    <line x1="594" y1="402" x2="610" y2="402" />
    <line x1="626" y1="402" x2="642" y2="402" />
    <line x1="658" y1="402" x2="706" y2="402" />
    <line x1="738" y1="402" x2="754" y2="402" />
    <line x1="786" y1="402" x2="802" y2="402" />
    <line x1="114" y1="418" x2="130" y2="418" />
    <line x1="162" y1="418" x2="194" y2="418" />
    <line x1="210" y1="418" x2="274" y2="418" />
    <line x1="290" y1="418" x2="306" y2="418" />
    <line x1="354" y1="418" x2="434" y2="418" />
    <line x1="498" y1="418" x2="546" y2="418" />
    <line x1="562" y1="418" x2="578" y2="418" />
    <line x1="594" y1="418" x2="626" y2="418" />
    <line x1="690" y1="418" x2="706" y2="418" />
    <line x1="722" y1="418" x2="786" y2="418" />
    <line x1="18" y1="434" x2="66" y2="434" />
    <line x1="98" y1="434" x2="114" y2="434" />
    <line x1="226" y1="434" x2="242" y2="434" />
    <line x1="258" y1="434" x2="274" y2="434" />
    <line x1="306" y1="434" x2="322" y2="434" />
    <line x1="338" y1="434" x2="386" y2="434" />
    <line x1="402" y1="434" x2="418" y2="434" />
    <line x1="434" y1="434" x2="450" y2="434" />
    <line x1="482" y1="434" x2="514" y2="434" />
    <line x1="594" y1="434" x2="610" y2="434" />
    <line x1="626" y1="434" x2="642" y2="434" />
    <line x1="674" y1="434" x2="722" y2="434" />
    <line x1="738" y1="434" x2="770" y2="434" />
    <line x1="786" y1="434" x2="802" y2="434" />
    <line x1="2" y1="450" x2="18" y2="450" />
    <line x1="34" y1="450" x2="50" y2="450" />
    <line x1="82" y1="450" x2="114" y2="450" />
    <line x1="146" y1="450" x2="194" y2="450" />
    <line x1="258" y1="450" x2="274" y2="450" />
    <line x1="290" y1="450" x2="338" y2="450" />
    <line x1="386" y1="450" x2="434" y2="450" />
    <line x1="450" y1="450" x2="482" y2="450" />
    <line x1="498" y1="450" x2="530" y2="450" />
    <line x1="546" y1="450" x2="578" y2="450" />
    <line x1="594" y1="450" x2="626" y2="450" />
    <line x1="642" y1="450" x2="658" y2="450" />
    <line x1="706" y1="450" x2="786" y2="450" />
    <line x1="18" y1="466" x2="34" y2="466" />
    <line x1="98" y1="466" x2="114" y2="466" />
    <line x1="130" y1="466" x2="146" y2="466" />
    <line x1="178" y1="466" x2="194" y2="466" />
    <line x1="226" y1="466" x2="306" y2="466" />
    <line x1="322" y1="466" x2="338" y2="466" />
    <line x1="370" y1="466" x2="386" y2="466" />
    <line x1="434" y1="466" x2="450" y2="466" />
    <line x1="466" y1="466" x2="482" y2="466" />
    <line x1="578" y1="466" x2="594" y2="466" />
    <line x1="626" y1="466" x2="642" y2="466" />
    <line x1="674" y1="466" x2="738" y2="466" />
    <line x1="754" y1="466" x2="786" y2="466" />
    <line x1="2" y1="482" x2="402" y2="482" />
    <line x1="418" y1="482" x2="802" y2="482" />
    <line x1="2" y1="2" x2="2" y2="482" />
    <line x1="18" y1="34" x2="18" y2="50" />
    <line x1="18" y1="82" x2="18" y2="114" />
    <line x1="18" y1="130" x2="18" y2="162" />
    <line x1="18" y1="178" x2="18" y2="194" />
    <line x1="18" y1="226" x2="18" y2="242" />
    <line x1="18" y1="258" x2="18" y2="290" />
    <line x1="18" y1="386" x2="18" y2="434" />
    <line x1="18" y1="450" x2="18" y2="466" />
    <line x1="34" y1="2" x2="34" y2="66" />
    <line x1="34" y1="98" x2="34" y2="146" />
    <line x1="34" y1="178" x2="34" y2="226" />
    <line x1="34" y1="258" x2="34" y2="274" />
    <line x1="34" y1="290" x2="34" y2="386" />
    <line x1="34" y1="402" x2="34" y2="418" />
    <line x1="50" y1="2" x2="50" y2="18" />
    <line x1="50" y1="50" x2="50" y2="130" />
    <line x1="50" y1="306" x2="50" y2="322" />
    <line x1="50" y1="338" x2="50" y2="354" />
    <line x1="50" y1="370" x2="50" y2="418" />
    <line x1="50" y1="450" x2="50" y2="482" />
    <line x1="66" y1="82" x2="66" y2="98" />
    <line x1="66" y1="114" x2="66" y2="178" />
    <line x1="66" y1="210" x2="66" y2="226" />
    <line x1="66" y1="242" x2="66" y2="290" />
    <line x1="66" y1="322" x2="66" y2="370" />
    <line x1="66" y1="386" x2="66" y2="402" />
    <line x1="66" y1="418" x2="66" y2="466" />
    <line x1="82" y1="66" x2="82" y2="82" />
    <line x1="82" y1="98" x2="82" y2="130" />
    <line x1="82" y1="194" x2="82" y2="210" />
    <line x1="82" y1="242" x2="82" y2="274" />
    <line x1="82" y1="290" x2="82" y2="322" />
    <line x1="82" y1="386" x2="82" y2="434" />
    <line x1="82" y1="450" x2="82" y2="466" />
    <line x1="98" y1="66" x2="98" y2="82" />
    <line x1="98" y1="146" x2="98" y2="194" />
    <line x1="98" y1="210" x2="98" y2="242" />
    <line x1="98" y1="274" x2="98" y2="338" />
    <line x1="98" y1="418" x2="98" y2="434" />
    <line x1="98" y1="466" x2="98" y2="482" />
    <line x1="114" y1="34" x2="114" y2="50" />
    <line x1="114" y1="82" x2="114" y2="114" />
    <line x1="114" y1="130" x2="114" y2="146" />
    <line x1="114" y1="162" x2="114" y2="194" />
    <line x1="114" y1="338" x2="114" y2="354" />
    <line x1="114" y1="402" x2="114" y2="434" />
    <line x1="114" y1="450" x2="114" y2="466" />
    <line x1="130" y1="2" x2="130" y2="18" />
    <line x1="130" y1="50" x2="130" y2="82" />
    <line x1="130" y1="98" x2="130" y2="162" />
    <line x1="130" y1="178" x2="130" y2="194" />
    <line x1="130" y1="210" x2="130" y2="226" />
    <line x1="130" y1="274" x2="130" y2="306" />
    <line x1="130" y1="322" x2="130" y2="338" />
    <line x1="130" y1="370" x2="130" y2="402" />
    <line x1="130" y1="418" x2="130" y2="482" />
    <line x1="146" y1="18" x2="146" y2="34" />
    <line x1="146" y1="98" x2="146" y2="114" />
    <line x1="146" y1="146" x2="146" y2="194" />
    <line x1="146" y1="210" x2="146" y2="226" />
    <line x1="146" y1="242" x2="146" y2="274" />
    <line x1="146" y1="306" x2="146" y2="354" />
    <line x1="146" y1="370" x2="146" y2="418" />
    <line x1="146" y1="434" x2="146" y2="466" />
    <line x1="162" y1="2" x2="162" y2="18" />
    <line x1="162" y1="34" x2="162" y2="50" />
    <line x1="162" y1="66" x2="162" y2="114" />
    <line x1="162" y1="162" x2="162" y2="178" />
    <line x1="162" y1="210" x2="162" y2="226" />
    <line x1="162" y1="274" x2="162" y2="290" />
    <line x1="162" y1="354" x2="162" y2="386" />
    <line x1="162" y1="402" x2="162" y2="434" />
    <line x1="162" y1="450" x2="162" y2="466" />
    <line x1="178" y1="2" x2="178" y2="18" />
    <line x1="178" y1="66" x2="178" y2="130" />
    <line x1="178" y1="178" x2="178" y2="210" />
    <line x1="178" y1="242" x2="178" y2="274" />
    <line x1="178" y1="338" x2="178" y2="354" />
    <line x1="178" y1="370" x2="178" y2="402" />
    <line x1="178" y1="418" x2="178" y2="450" />
    <line x1="178" y1="466" x2="178" y2="482" />
    <line x1="194" y1="2" x2="194" y2="34" />
    <line x1="194" y1="50" x2="194" y2="82" />
    <line x1="194" y1="130" x2="194" y2="162" />
    <line x1="194" y1="194" x2="194" y2="290" />
    <line x1="194" y1="322" x2="194" y2="338" />
    <line x1="194" y1="354" x2="194" y2="370" />
    <line x1="194" y1="402" x2="194" y2="418" />
    <line x1="194" y1="434" x2="194" y2="450" />
    <line x1="210" y1="34" x2="210" y2="50" />
    <line x1="210" y1="66" x2="210" y2="82" />
    <line x1="210" y1="98" x2="210" y2="114" />
    <line x1="210" y1="130" x2="210" y2="178" />
    <line x1="210" y1="194" x2="210" y2="242" />
    <line x1="210" y1="306" x2="210" y2="322" />
    <line x1="210" y1="354" x2="210" y2="370" />
    <line x1="210" y1="402" x2="210" y2="418" />
    <line x1="210" y1="434" x2="210" y2="482" />
    <line x1="226" y1="82" x2="226" y2="98" />
    <line x1="226" y1="114" x2="226" y2="194" />
    <line x1="226" y1="210" x2="226" y2="226" />
    <line x1="226" y1="242" x2="226" y2="258" />
    <line x1="226" y1="274" x2="226" y2="306" />
    <line x1="226" y1="322" x2="226" y2="338" />
    <line x1="226" y1="370" x2="226" y2="386" />
    <line x1="226" y1="434" x2="226" y2="466" />
    <line x1="242" y1="34" x2="242" y2="66" />
    <line x1="242" y1="114" x2="242" y2="130" />
    <line x1="242" y1="146" x2="242" y2="178" />
    <line x1="242" y1="194" x2="242" y2="242" />
    <line x1="242" y1="290" x2="242" y2="306" />
    <line x1="242" y1="322" x2="242" y2="402" />
    <line x1="242" y1="450" x2="242" y2="482" />
    <line x1="258" y1="34" x2="258" y2="66" />
    <line x1="258" y1="82" x2="258" y2="114" />
    <line x1="258" y1="130" x2="258" y2="146" />
    <line x1="258" y1="162" x2="258" y2="194" />
    <line x1="258" y1="210" x2="258" y2="242" />
    <line x1="258" y1="258" x2="258" y2="274" />
    <line x1="258" y1="290" x2="258" y2="322" />
    <line x1="258" y1="370" x2="258" y2="402" />
    <line x1="258" y1="418" x2="258" y2="434" />
    <line x1="274" y1="50" x2="274" y2="66" />
    <line x1="274" y1="82" x2="274" y2="114" />
    <line x1="274" y1="162" x2="274" y2="178" />
    <line x1="274" y1="242" x2="274" y2="258" />
    <line x1="274" y1="274" x2="274" y2="290" />
    <line x1="274" y1="354" x2="274" y2="386" />
    <line x1="274" y1="434" x2="274" y2="450" />
    <line x1="290" y1="18" x2="290" y2="34" />
    <line x1="290" y1="66" x2="290" y2="82" />
    <line x1="290" y1="98" x2="290" y2="130" />
    <line x1="290" y1="146" x2="290" y2="162" />
    <line x1="290" y1="194" x2="290" y2="210" />
    <line x1="290" y1="258" x2="290" y2="322" />
    <line x1="290" y1="338" x2="290" y2="354" />
    <line x1="290" y1="370" x2="290" y2="402" />
    <line x1="290" y1="418" x2="290" y2="450" />
    <line x1="306" y1="18" x2="306" y2="114" />
    <line x1="306" y1="162" x2="306" y2="242" />
    <line x1="306" y1="258" x2="306" y2="274" />
    <line x1="306" y1="306" x2="306" y2="322" />
    <line x1="306" y1="354" x2="306" y2="386" />
    <line x1="322" y1="2" x2="322" y2="18" />
    <line x1="322" y1="50" x2="322" y2="98" />
    <line x1="322" y1="114" x2="322" y2="130" />
    <line x1="322" y1="146" x2="322" y2="194" />
    <line x1="322" y1="210" x2="322" y2="226" />
    <line x1="322" y1="242" x2="322" y2="290" />
    <line x1="322" y1="338" x2="322" y2="386" />
    <line x1="322" y1="402" x2="322" y2="450" />
    <line x1="338" y1="2" x2="338" y2="18" />
    <line x1="338" y1="50" x2="338" y2="66" />
    <line x1="338" y1="82" x2="338" y2="98" />
    <line x1="338" y1="114" x2="338" y2="178" />
    <line x1="338" y1="194" x2="338" y2="210" />
    <line x1="338" y1="258" x2="338" y2="274" />
    <line x1="338" y1="290" x2="338" y2="322" />
    <line x1="338" y1="338" x2="338" y2="354" />
    <line x1="338" y1="370" x2="338" y2="386" />
    <line x1="338" y1="402" x2="338" y2="418" />
    <line x1="338" y1="450" x2="338" y2="466" />
    <line x1="354" y1="2" x2="354" y2="34" />
    <line x1="354" y1="98" x2="354" y2="114" />
    <line x1="354" y1="146" x2="354" y2="162" />
    <line x1="354" y1="194" x2="354" y2="258" />
    <line x1="354" y1="274" x2="354" y2="290" />
    <line x1="354" y1="306" x2="354" y2="322" />
    <line x1="354" y1="354" x2="354" y2="386" />
    <line x1="354" y1="450" x2="354" y2="482" />
    <line x1="370" y1="18" x2="370" y2="50" />
    <line x1="370" y1="66" x2="370" y2="82" />
    <line x1="370" y1="114" x2="370" y2="130" />
    <line x1="370" y1="146" x2="370" y2="162" />
    <line x1="370" y1="194" x2="370" y2="210" />
    <line x1="370" y1="226" x2="370" y2="258" />
    <line x1="370" y1="290" x2="370" y2="306" />
    <line x1="370" y1="338" x2="370" y2="386" />
    <line x1="370" y1="402" x2="370" y2="418" />
    <line x1="370" y1="434" x2="370" y2="450" />
    <line x1="386" y1="82" x2="386" y2="114" />
    <line x1="386" y1="146" x2="386" y2="178" />
    <line x1="386" y1="258" x2="386" y2="290" />
    <line x1="386" y1="306" x2="386" y2="338" />
    <line x1="386" y1="354" x2="386" y2="370" />
    <line x1="386" y1="402" x2="386" y2="434" />
    <line x1="386" y1="466" x2="386" y2="482" />
    <line x1="402" y1="2" x2="402" y2="18" />
    <line x1="402" y1="66" x2="402" y2="82" />
    <line x1="402" y1="98" x2="402" y2="130" />
    <line x1="402" y1="146" x2="402" y2="162" />
    <line x1="402" y1="178" x2="402" y2="226" />
    <line x1="402" y1="242" x2="402" y2="306" />
    <line x1="402" y1="338" x2="402" y2="354" />
    <line x1="402" y1="370" x2="402" y2="386" />
    <line x1="402" y1="418" x2="402" y2="434" />
    <line x1="402" y1="466" x2="402" y2="482" />
    <line x1="418" y1="34" x2="418" y2="50" />
    <line x1="418" y1="66" x2="418" y2="98" />
    <line x1="418" y1="114" x2="418" y2="130" />
    <line x1="418" y1="162" x2="418" y2="210" />
    <line x1="418" y1="226" x2="418" y2="242" />
    <line x1="418" y1="258" x2="418" y2="274" />
    <line x1="418" y1="386" x2="418" y2="402" />
    <line x1="418" y1="434" x2="418" y2="482" />
    <line x1="434" y1="82" x2="434" y2="130" />
    <line x1="434" y1="146" x2="434" y2="178" />
    <line x1="434" y1="210" x2="434" y2="258" />
    <line x1="434" y1="274" x2="434" y2="290" />
    <line x1="434" y1="338" x2="434" y2="354" />
    <line x1="434" y1="370" x2="434" y2="386" />
    <line x1="434" y1="402" x2="434" y2="418" />
    <line x1="450" y1="18" x2="450" y2="82" />
    <line x1="450" y1="130" x2="450" y2="146" />
    <line x1="450" y1="162" x2="450" y2="258" />
    <line x1="450" y1="274" x2="450" y2="290" />
    <line x1="450" y1="306" x2="450" y2="354" />
    <line x1="450" y1="386" x2="450" y2="402" />
    <line x1="450" y1="418" x2="450" y2="466" />
    <line x1="466" y1="34" x2="466" y2="50" />
    <line x1="466" y1="66" x2="466" y2="82" />
    <line x1="466" y1="114" x2="466" y2="130" />
    <line x1="466" y1="146" x2="466" y2="178" />
    <line x1="466" y1="194" x2="466" y2="210" />
    <line x1="466" y1="226" x2="466" y2="290" />
    <line x1="466" y1="322" x2="466" y2="354" />
    <line x1="466" y1="370" x2="466" y2="402" />
    <line x1="466" y1="418" x2="466" y2="450" />
    <line x1="482" y1="18" x2="482" y2="34" />
    <line x1="482" y1="66" x2="482" y2="114" />
    <line x1="482" y1="178" x2="482" y2="194" />
    <line x1="482" y1="226" x2="482" y2="306" />
    <line x1="482" y1="354" x2="482" y2="370" />
    <line x1="482" y1="418" x2="482" y2="482" />
    <line x1="498" y1="34" x2="498" y2="50" />
    <line x1="498" y1="66" x2="498" y2="82" />
    <line x1="498" y1="98" x2="498" y2="146" />
    <line x1="498" y1="178" x2="498" y2="194" />
    <line x1="498" y1="290" x2="498" y2="306" />
    <line x1="498" y1="322" x2="498" y2="338" />
    <line x1="498" y1="370" x2="498" y2="386" />
    <line x1="498" y1="466" x2="498" y2="482" />
    <line x1="514" y1="34" x2="514" y2="66" />
    <line x1="514" y1="82" x2="514" y2="98" />
    <line x1="514" y1="130" x2="514" y2="194" />
    <line x1="514" y1="226" x2="514" y2="242" />
    <line x1="514" y1="258" x2="514" y2="274" />
    <line x1="514" y1="290" x2="514" y2="338" />
    <line x1="514" y1="354" x2="514" y2="370" />
    <line x1="514" y1="386" x2="514" y2="402" />
    <line x1="514" y1="466" x2="514" y2="482" />
    <line x1="530" y1="50" x2="530" y2="82" />
    <line x1="530" y1="98" x2="530" y2="162" />
    <line x1="530" y1="178" x2="530" y2="194" />
    <line x1="530" y1="226" x2="530" y2="242" />
    <line x1="530" y1="274" x2="530" y2="306" />
    <line x1="530" y1="338" x2="530" y2="386" />
    <line x1="530" y1="402" x2="530" y2="434" />
    <line x1="530" y1="450" x2="530" y2="482" />
    <line x1="546" y1="2" x2="546" y2="34" />
    <line x1="546" y1="50" x2="546" y2="82" />
    <line x1="546" y1="98" x2="546" y2="146" />
    <line x1="546" y1="178" x2="546" y2="194" />
    <line x1="546" y1="226" x2="546" y2="290" />
    <line x1="546" y1="306" x2="546" y2="322" />
    <line x1="546" y1="338" x2="546" y2="354" />
    <line x1="546" y1="386" x2="546" y2="418" />
    <line x1="546" y1="434" x2="546" y2="466" />
    <line x1="562" y1="18" x2="562" y2="50" />
    <line x1="562" y1="66" x2="562" y2="82" />
    <line x1="562" y1="146" x2="562" y2="162" />
    <line x1="562" y1="178" x2="562" y2="194" />
    <line x1="562" y1="226" x2="562" y2="242" />
    <line x1="562" y1="258" x2="562" y2="290" />
    <line x1="562" y1="306" x2="562" y2="386" />
    <line x1="562" y1="402" x2="562" y2="434" />
    <line x1="562" y1="466" x2="562" y2="482" />
    <line x1="578" y1="34" x2="578" y2="66" />
    <line x1="578" y1="98" x2="578" y2="114" />
    <line x1="578" y1="130" x2="578" y2="162" />
    <line x1="578" y1="194" x2="578" y2="210" />
    <line x1="578" y1="226" x2="578" y2="242" />
    <line x1="578" y1="258" x2="578" y2="274" />
    <line x1="578" y1="306" x2="578" y2="322" />
    <line x1="578" y1="338" x2="578" y2="418" />
    <line x1="578" y1="434" x2="578" y2="482" />
    <line x1="594" y1="18" x2="594" y2="34" />
    <line x1="594" y1="50" x2="594" y2="66" />
    <line x1="594" y1="82" x2="594" y2="98" />
    <line x1="594" y1="130" x2="594" y2="162" />
    <line x1="594" y1="178" x2="594" y2="194" />
    <line x1="594" y1="210" x2="594" y2="226" />
    <line x1="594" y1="242" x2="594" y2="258" />
    <line x1="594" y1="290" x2="594" y2="338" />
    <line x1="594" y1="354" x2="594" y2="386" />
    <line x1="610" y1="66" x2="610" y2="98" />
    <line x1="610" y1="114" x2="610" y2="146" />
    <line x1="610" y1="162" x2="610" y2="178" />
    <line x1="610" y1="194" x2="610" y2="210" />
    <line x1="610" y1="242" x2="610" y2="258" />
    <line x1="610" y1="274" x2="610" y2="306" />
    <line x1="610" y1="338" x2="610" y2="354" />
    <line x1="610" y1="370" x2="610" y2="402" />
    <line x1="610" y1="434" x2="610" y2="450" />
    <line x1="610" y1="466" x2="610" y2="482" />
    <line x1="626" y1="2" x2="626" y2="18" />
    <line x1="626" y1="146" x2="626" y2="162" />
    <line x1="626" y1="178" x2="626" y2="226" />
    <line x1="626" y1="274" x2="626" y2="290" />
    <line x1="626" y1="338" x2="626" y2="354" />
    <line x1="626" y1="386" x2="626" y2="402" />
    <line x1="626" y1="418" x2="626" y2="466" />
    <line x1="642" y1="18" x2="642" y2="34" />
    <line x1="642" y1="50" x2="642" y2="82" />
    <line x1="642" y1="98" x2="642" y2="162" />
    <line x1="642" y1="194" x2="642" y2="210" />
    <line x1="642" y1="226" x2="642" y2="242" />
    <line x1="642" y1="258" x2="642" y2="306" />
    <line x1="642" y1="402" x2="642" y2="434" />
    <line x1="642" y1="450" x2="642" y2="482" />
    <line x1="658" y1="18" x2="658" y2="66" />
    <line x1="658" y1="82" x2="658" y2="98" />
    <line x1="658" y1="114" x2="658" y2="130" />
    <line x1="658" y1="146" x2="658" y2="162" />
    <line x1="658" y1="194" x2="658" y2="210" />
    <line x1="658" y1="242" x2="658" y2="258" />
    <line x1="658" y1="322" x2="658" y2="338" />
    <line x1="658" y1="386" x2="658" y2="434" />
    <line x1="658" y1="450" x2="658" y2="466" />
    <line x1="674" y1="2" x2="674" y2="18" />
    <line x1="674" y1="50" x2="674" y2="66" />
    <line x1="674" y1="82" x2="674" y2="98" />
    <line x1="674" y1="146" x2="674" y2="162" />
    <line x1="674" y1="178" x2="674" y2="194" />
    <line x1="674" y1="226" x2="674" y2="242" />
    <line x1="674" y1="290" x2="674" y2="306" />
    <line x1="674" y1="322" x2="674" y2="354" />
    <line x1="674" y1="402" x2="674" y2="418" />
    <line x1="674" y1="434" x2="674" y2="482" />
    <line x1="690" y1="2" x2="690" y2="18" />
    <line x1="690" y1="34" x2="690" y2="98" />
    <line x1="690" y1="162" x2="690" y2="194" />
    <line x1="690" y1="210" x2="690" y2="226" />
    <line x1="690" y1="242" x2="690" y2="258" />
    <line x1="690" y1="274" x2="690" y2="290" />
    <line x1="690" y1="306" x2="690" y2="322" />
    <line x1="690" y1="370" x2="690" y2="386" />
    <line x1="690" y1="402" x2="690" y2="418" />
    <line x1="690" y1="450" x2="690" y2="466" />
    <line x1="706" y1="2" x2="706" y2="66" />
    <line x1="706" y1="98" x2="706" y2="114" />
    <line x1="706" y1="146" x2="706" y2="162" />
    <line x1="706" y1="210" x2="706" y2="242" />
    <line x1="706" y1="274" x2="706" y2="290" />
    <line x1="706" y1="338" x2="706" y2="354" />
    <line x1="706" y1="386" x2="706" y2="402" />
    <line x1="706" y1="450" x2="706" y2="466" />
    <line x1="722" y1="34" x2="722" y2="82" />
    <line x1="722" y1="98" x2="722" y2="114" />
    <line x1="722" y1="130" x2="722" y2="146" />
    <line x1="722" y1="162" x2="722" y2="210" />
    <line x1="722" y1="242" x2="722" y2="274" />
    <line x1="722" y1="290" x2="722" y2="322" />
    <line x1="722" y1="338" x2="722" y2="386" />
    <line x1="722" y1="402" x2="722" y2="434" />
    <line x1="738" y1="2" x2="738" y2="34" />
    <line x1="738" y1="66" x2="738" y2="130" />
    <line x1="738" y1="146" x2="738" y2="162" />
    <line x1="738" y1="210" x2="738" y2="226" />
    <line x1="738" y1="258" x2="738" y2="290" />
    <line x1="738" y1="306" x2="738" y2="322" />
    <line x1="738" y1="354" x2="738" y2="370" />
    <line x1="738" y1="402" x2="738" y2="418" />
    <line x1="754" y1="18" x2="754" y2="34" />
    <line x1="754" y1="98" x2="754" y2="130" />
    <line x1="754" y1="146" x2="754" y2="194" />
    <line x1="754" y1="210" x2="754" y2="290" />
    <line x1="754" y1="306" x2="754" y2="322" />
    <line x1="754" y1="354" x2="754" y2="370" />
    <line x1="754" y1="386" x2="754" y2="402" />
    <line x1="754" y1="418" x2="754" y2="434" />
    <line x1="754" y1="450" x2="754" y2="466" />
    <line x1="770" y1="2" x2="770" y2="18" />
    <line x1="770" y1="50" x2="770" y2="114" />
    <line x1="770" y1="146" x2="770" y2="226" />
    <line x1="770" y1="242" x2="770" y2="258" />
    <line x1="770" y1="306" x2="770" y2="338" />
    <line x1="770" y1="354" x2="770" y2="386" />
    <line x1="770" y1="402" x2="770" y2="418" />
    <line x1="786" y1="2" x2="786" y2="66" />
    <line x1="786" y1="82" x2="786" y2="130" />
    <line x1="786" y1="162" x2="786" y2="194" />
    <line x1="786" y1="210" x2="786" y2="226" />
    <line x1="786" y1="258" x2="786" y2="290" />
    <line x1="786" y1="306" x2="786" y2="322" />
    <line x1="786" y1="338" x2="786" y2="370" />
    <line x1="802" y1="2" x2="802" y2="482" />
  	</g>
	</svg>
			`;

	// Parse the SVG content
	var parser = new DOMParser();
	var svgDoc = parser.parseFromString(svgContent, "image/svg+xml");

	// Get all <line> elements
	var lines = svgDoc.querySelectorAll("line");

	// Arrays to store the coordinates
	mazePathX = [];
	mazePathY = [];

	// Extract coordinates from each <line> element
	lines.forEach(function (line) {
		mazePathX.push(parseFloat(line.getAttribute("x1")), parseFloat(line.getAttribute("x2")));
		mazePathY.push(parseFloat(line.getAttribute("y1")), parseFloat(line.getAttribute("y2")));
	});

	// Log the results (optional)
	console.log("mazePathX:", mazePathX);
	console.log("mazePathY:", mazePathY);
}

function initGame() {
	hintTime = 0;
	gameStarted = false;
	gameOver = false;
	hintDraw = false;
	moveLeft = false;
	moveUp = false;
	moveRight = false;
	moveDown = false;
}

document.onkeydown = function (e) {
	switch (e.keyCode) {
		case 37:
			moveLeft = true;
			break;
		case 65:
			moveLeft = true;
			break;
		case 38:
			moveUp = true;
			break;
		case 87:
			moveUp = true;
			break;
		case 39:
			moveRight = true;
			break;
		case 68:
			moveRight = true;
			break;
		case 40:
			moveDown = true;
			break;
		case 83:
			moveDown = true;
			break;
	}
};

document.onkeyup = function (e) {
	switch (e.keyCode) {
		case 37:
			moveLeft = false;
			break;
		case 65:
			moveLeft = false;
			break;
		case 38:
			moveUp = false;
			break;
		case 87:
			moveUp = false;
			break;
		case 39:
			moveRight = false;
			break;
		case 68:
			moveRight = false;
			break;
		case 40:
			moveDown = false;
			break;
		case 83:
			moveDown = false;
			break;
	}
};


