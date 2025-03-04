// JavaScript code to convert the provided SVG into Canvas
const canvas = document.createElement('canvas');
canvas.width = 484;
canvas.height = 484;

// Find the center-div and append the canvas to it
const centerDiv = document.querySelector('.game-div');
centerDiv.appendChild(canvas);

const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#7caf8c';
ctx.lineWidth = 2;
ctx.lineCap = 'square';

//character settings
let character = {
    x: 234, // Starting position
    y: 2, // Starting position
    size: 2, // Size of the character
    speed: 3, // Speed of movement
};

// Function to draw the character (a simple circle)
function drawCharacter() {
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(character.x, character.y, character.size, 0, Math.PI * 2);
    ctx.fill();
}

// Function to check if the character is about to cross a wall
function checkCollision(newX, newY) {
    for (let wall of mazeWalls) {
        if (lineCircleCollide(wall.x1, wall.y1, wall.x2, wall.y2, newX, newY, character.size)) {
            return true; // Collision detected
        }
    }
    return false; // No collision
}

// Function to check if a line and a circle (character) intersect
function lineCircleCollide(x1, y1, x2, y2, cx, cy, r) {
    // Closest point on the line to the circle's center
    let dx = x2 - x1;
    let dy = y2 - y1;
    let length = Math.sqrt(dx * dx + dy * dy);
    let dot = (((cx - x1) * dx) + ((cy - y1) * dy)) / Math.pow(length, 2);

    let closestX = x1 + (dot * dx);
    let closestY = y1 + (dot * dy);

    // Distance from the circle's center to the closest point on the line
    let distX = closestX - cx;
    let distY = closestY - cy;
    let distance = Math.sqrt((distX * distX) + (distY * distY));

    // If the distance is less than the character's radius, there's a collision
    return distance <= r;
}


// Draw lines equivalent to the provided SVG
const mazeWalls = [];
function drawMaze() {
    ctx.beginPath();

    ctx.moveTo(2, 2); ctx.lineTo(226, 2);
    mazeWalls.push({x1: 2, y1: 2, x2: 226, y2: 2});

    ctx.moveTo(242, 2); ctx.lineTo(482, 2);
    mazeWalls.push({x1: 242, y1: 2, x2: 482, y2: 2});

    ctx.moveTo(50, 18); ctx.lineTo(82, 18);
    mazeWalls.push({x1: 50, y1: 18, x2: 82, y2: 18});

    ctx.moveTo(114, 18); ctx.lineTo(130, 18);
    mazeWalls.push({x1: 114, y1: 18, x2: 130, y2: 18});

    ctx.moveTo(162, 18); ctx.lineTo(178, 18);
    mazeWalls.push({x1: 162, y1: 18, x2: 178, y2: 18});

    ctx.moveTo(226, 18); ctx.lineTo(242, 18);
    mazeWalls.push({x1: 226, y1: 18, x2: 242, y2: 18});

    ctx.moveTo(274, 18); ctx.lineTo(290, 18);
    mazeWalls.push({x1: 274, y1: 18, x2: 290, y2: 18});

    ctx.moveTo(306, 18); ctx.lineTo(354, 18);
    mazeWalls.push({x1: 306, y1: 18, x2: 354, y2: 18});

    ctx.moveTo(402, 18); ctx.lineTo(418, 18);
    mazeWalls.push({x1: 402, y1: 18, x2: 418, y2: 18});

    ctx.moveTo(434, 18); ctx.lineTo(450, 18);
    mazeWalls.push({x1: 434, y1: 18, x2: 450, y2: 18});

    ctx.moveTo(18, 34); ctx.lineTo(50, 34);
    mazeWalls.push({x1: 18, y1: 34, x2: 50, y2: 34});

    ctx.moveTo(98, 34); ctx.lineTo(114, 34);
    mazeWalls.push({x1: 98, y1: 34, x2: 114, y2: 34});

    ctx.moveTo(146, 34); ctx.lineTo(226, 34);
    mazeWalls.push({x1: 98, y1: 34, x2: 114, y2: 34});

    ctx.moveTo(242, 34); ctx.lineTo(274, 34);
    mazeWalls.push({x1: 242, y1: 34, x2: 274, y2: 34});

    ctx.moveTo(290, 34); ctx.lineTo(306, 34);
    mazeWalls.push({x1: 290, y1: 34, x2: 306, y2: 34});

    ctx.moveTo(322, 34); ctx.lineTo(370, 34);
    mazeWalls.push({x1: 322, y1: 34, x2: 370, y2: 34});

    ctx.moveTo(386, 34); ctx.lineTo(402, 34);
    mazeWalls.push({x1: 386, y1: 34, x2: 402, y2: 34});

    ctx.moveTo(2, 50); ctx.lineTo(82, 50);
    mazeWalls.push({x1: 2, y1: 50, x2: 82, y2: 50});


    //what i am doing here 
    ctx.moveTo(114, 50); ctx.lineTo(146, 50);
    mazeWalls.push({x1: 114, y1: 50, x2: 146, y2: 50});

    ctx.moveTo(210, 50); ctx.lineTo(258, 50);
    mazeWalls.push({x1: 210, y1: 50, x2: 258, y2: 50});

    ctx.moveTo(306, 50); ctx.lineTo(322, 50);
    mazeWalls.push({x1: 210, y1: 50, x2: 322, y2: 50});

    //do the same here but w those coordinates
    ctx.moveTo(338, 50);
    ctx.lineTo(354, 50);
    mazeWalls.push({x1: 338, y1: 50, x2: 354, y2: 50});

    ctx.moveTo(402, 50);
    ctx.lineTo(418, 50);
    mazeWalls.push({x1: 402, y1: 50, x2: 418, y2: 50});

    ctx.moveTo(466, 50);
    ctx.lineTo(482, 50);
    mazeWalls.push({x1: 466, y1: 50, x2: 482, y2: 50});

    ctx.moveTo(18, 66);
    ctx.lineTo(50, 66);
    mazeWalls.push({x1: 18, y1: 66, x2: 50, y2: 66});

    ctx.moveTo(82, 66);
    ctx.lineTo(98, 66);
    mazeWalls.push({x1: 82, y1: 66, x2: 98, y2: 66});

    ctx.moveTo(162, 66);
    ctx.lineTo(178, 66);
    mazeWalls.push({x1: 162, y1: 66, x2: 178, y2: 66});

    ctx.moveTo(194, 66);
    ctx.lineTo(210, 66);
    mazeWalls.push({x1: 194, y1: 66, x2: 210, y2: 66});

    ctx.moveTo(258, 66);
    ctx.lineTo(274, 66);
    mazeWalls.push({x1: 258, y1: 66, x2: 274, y2: 66});

    ctx.moveTo(290, 66);
    ctx.lineTo(402, 66);
    mazeWalls.push({x1: 290, y1: 66, x2: 402, y2: 66});

    ctx.moveTo(18, 82);
    ctx.lineTo(34, 82);
    mazeWalls.push({x1: 18, y1: 82, x2: 34, y2: 82});

    ctx.moveTo(50, 82);
    ctx.lineTo(98, 82);
    mazeWalls.push({x1: 50, y1: 82, x2: 98, y2: 82});

    //here

    ctx.moveTo(130, 82);
    ctx.lineTo(162, 82);
    mazeWalls.push({x1: 130, y1: 82, x2: 162, y2: 82});

    ctx.moveTo(178, 82);
    ctx.lineTo(210, 82);
    mazeWalls.push({x1: 178, y1: 82, x2: 210, y2: 82});

    ctx.moveTo(306, 82);
    ctx.lineTo(322, 82);
    mazeWalls.push({x1: 306, y1: 82, x2: 322, y2: 82});

    ctx.moveTo(354, 82);
    ctx.lineTo(386, 82);
    mazeWalls.push({x1: 354, y1: 82, x2: 386, y2: 82});

    ctx.moveTo(402, 82);
    ctx.lineTo(466, 82);
    mazeWalls.push({x1: 402, y1: 82, x2: 466, y2: 82});

    ctx.moveTo(34, 98);
    ctx.lineTo(98, 98);
    mazeWalls.push({x1: 34, y1: 98, x2: 98, y2: 98});

    ctx.moveTo(114, 98);
    ctx.lineTo(130, 98);
    mazeWalls.push({x1: 114, y1: 98, x2: 130, y2: 98});

    ctx.moveTo(162, 98);
    ctx.lineTo(178, 98);
    mazeWalls.push({x1: 162, y1: 98, x2: 178, y2: 98});

    ctx.moveTo(258, 98);
    ctx.lineTo(290, 98);
    mazeWalls.push({x1: 258, y1: 98, x2: 290, y2: 98});

    // here 2

    ctx.moveTo(322, 98);
    ctx.lineTo(338, 98);
    mazeWalls.push({x1: 322, y1: 98, x2: 338, y2: 98});

    ctx.moveTo(370, 98);
    ctx.lineTo(418, 98);
    mazeWalls.push({x1: 370, y1: 98, x2: 418, y2: 98});

    ctx.moveTo(434, 98);
    ctx.lineTo(466, 98);
    mazeWalls.push({x1: 434, y1: 98, x2: 466, y2: 98});

    ctx.moveTo(18, 114);
    ctx.lineTo(34, 114);
    mazeWalls.push({x1: 18, y1: 114, x2: 34, y2: 114});

    ctx.moveTo(66, 114);
    ctx.lineTo(82, 114);
    mazeWalls.push({x1: 66, y1: 114, x2: 82, y2: 114});

    ctx.moveTo(98, 114);
    ctx.lineTo(130, 114);
    mazeWalls.push({x1: 98, y1: 114, x2: 130, y2: 114});

    ctx.moveTo(146, 114);
    ctx.lineTo(194, 114);
    mazeWalls.push({x1: 146, y1: 114, x2: 194, y2: 114});

    ctx.moveTo(226, 114);
    ctx.lineTo(258, 114);
    mazeWalls.push({x1: 226, y1: 114, x2: 258, y2: 114});

    ctx.moveTo(290, 114);
    ctx.lineTo(322, 114);
    mazeWalls.push({x1: 290, y1: 114, x2: 322, y2: 114});

    ctx.moveTo(354, 114);
    ctx.lineTo(370, 114);
    mazeWalls.push({x1: 354, y1: 114, x2: 370, y2: 114});

    ctx.moveTo(402, 114);
    ctx.lineTo(482, 114);
    mazeWalls.push({x1: 402, y1: 114, x2: 482, y2: 114});

    ctx.moveTo(18, 130);
    ctx.lineTo(66, 130);
    mazeWalls.push({x1: 18, y1: 130, x2: 66, y2: 130});

    ctx.moveTo(82, 130);
    ctx.lineTo(114, 130);
    mazeWalls.push({x1: 82, y1: 130, x2: 114, y2: 130});

    ctx.moveTo(178, 130);
    ctx.lineTo(194, 130);
    mazeWalls.push({x1: 178, y1: 130, x2: 194, y2: 130});

    ctx.moveTo(226, 130);
    ctx.lineTo(242, 130);
    mazeWalls.push({x1: 226, y1: 130, x2: 242, y2: 130});

    ctx.moveTo(274, 130);
    ctx.lineTo(306, 130);
    mazeWalls.push({x1: 274, y1: 130, x2: 306, y2: 130});

    ctx.moveTo(322, 130);
    ctx.lineTo(402, 130);
    mazeWalls.push({x1: 322, y1: 130, x2: 402, y2: 130});

    ctx.moveTo(450, 130);
    ctx.lineTo(466, 130);
    mazeWalls.push({x1: 450, y1: 130, x2: 466, y2: 130});

    ctx.moveTo(2, 146);
    ctx.lineTo(34, 146);
    mazeWalls.push({x1: 2, y1: 146, x2: 34, y2: 146});

    ctx.moveTo(82, 146);
    ctx.lineTo(98, 146);
    mazeWalls.push({x1: 82, y1: 146, x2: 98, y2: 146});

    ctx.moveTo(114, 146);
    ctx.lineTo(146, 146);
    mazeWalls.push({x1: 114, y1: 146, x2: 146, y2: 146});

    ctx.moveTo(162, 146);
    ctx.lineTo(274, 146);
    mazeWalls.push({x1: 162, y1: 146, x2: 274, y2: 146});

    ctx.moveTo(306, 146);
    ctx.lineTo(338, 146);
    mazeWalls.push({x1: 306, y1: 146, x2: 338, y2: 146});

    ctx.moveTo(386, 146); ctx.lineTo(418, 146);
    mazeWalls.push({x1: 386, y1: 146, x2: 418, y2: 146});

    ctx.moveTo(34, 162); ctx.lineTo(130, 162);
    mazeWalls.push({x1: 34, y1: 162, x2: 130, y2: 162});

    ctx.moveTo(146, 162); ctx.lineTo(178, 162);
    mazeWalls.push({x1: 306, y1: 146, x2: 338, y2: 146});

    ctx.moveTo(210, 162); ctx.lineTo(242, 162);
    mazeWalls.push({x1: 210, y1: 162, x2: 242, y2: 162});

    ctx.moveTo(322, 162); ctx.lineTo(370, 162);
    mazeWalls.push({x1: 322, y1: 162, x2: 370, y2: 162});

    ctx.moveTo(386, 162); ctx.lineTo(466, 162);
    mazeWalls.push({x1: 386, y1: 162, x2: 466, y2: 162});

    ctx.moveTo(18, 178); ctx.lineTo(50, 178);
    mazeWalls.push({x1: 18, y1: 178, x2: 50, y2: 178});

    ctx.moveTo(130, 178); ctx.lineTo(146, 178);
    mazeWalls.push({x1: 130, y1: 178, x2: 346, y2: 178});

    ctx.moveTo(178, 178); ctx.lineTo(194, 178);
    mazeWalls.push({x1: 178, y1: 178, x2: 194, y2: 178});

    ctx.moveTo(226, 178); ctx.lineTo(258, 178);
    mazeWalls.push({x1: 226, y1: 178, x2: 258, y2: 178});

    ctx.moveTo(306, 178); ctx.lineTo(338, 178);
    mazeWalls.push({x1: 306, y1: 178, x2: 338, y2: 178});


    ctx.moveTo(354, 178); ctx.lineTo(386, 178);
    mazeWalls.push({x1: 354, y1: 178, x2: 386, y2: 178});

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    ctx.moveTo(402, 178); ctx.lineTo(482, 178);
    mazeWalls.push({x1: 402, y1: 178, x2: 482, y2: 178});

    ctx.moveTo(2, 194); ctx.lineTo(18, 194);
    mazeWalls.push({x1: 2, y1: 194, x2: 18, y2: 194});

    ctx.moveTo(34, 194); ctx.lineTo(82, 194);
    mazeWalls.push({x1: 34, y1: 194, x2: 82, y2: 194});

    ctx.moveTo(130, 194);
    ctx.lineTo(178, 194);
    mazeWalls.push({x1: 130, y1: 194, x2: 178, y2: 194});

    ctx.moveTo(194, 194);
    ctx.lineTo(226, 194);
    mazeWalls.push({x1: 194, y1: 194, x2: 226, y2: 194});

    ctx.moveTo(290, 194);
    ctx.lineTo(306, 194);
    mazeWalls.push({x1: 290, y1: 194, x2: 306, y2: 194});

    ctx.moveTo(338, 194);
    ctx.lineTo(370, 194);
    mazeWalls.push({x1: 338, y1: 194, x2: 370, y2: 194});

    ctx.moveTo(386, 194);
    ctx.lineTo(418, 194);
    mazeWalls.push({x1: 386, y1: 194, x2: 418, y2: 194});

    ctx.moveTo(50, 210);
    ctx.lineTo(66, 210);
    mazeWalls.push({x1: 50, y1: 210, x2: 66, y2: 210});

    ctx.moveTo(146, 210);
    ctx.lineTo(162, 210);
    mazeWalls.push({x1: 146, y1: 210, x2: 162, y2: 210});

    ctx.moveTo(178, 210);
    ctx.lineTo(194, 210);
    mazeWalls.push({x1: 178, y1: 210, x2: 194, y2: 210});

    ctx.moveTo(226, 210);
    ctx.lineTo(242, 210);
    mazeWalls.push({x1: 226, y1: 210, x2: 242, y2: 210});

    ctx.moveTo(306, 210);
    ctx.lineTo(338, 210);
    mazeWalls.push({x1: 306, y1: 210, x2: 338, y2: 210});

    ctx.moveTo(434, 210);
    ctx.lineTo(482, 210);
    mazeWalls.push({x1: 434, y1: 210, x2: 482, y2: 210});

    ctx.moveTo(18, 226);
    ctx.lineTo(50, 226);
    mazeWalls.push({x1: 18, y1: 226, x2: 50, y2: 226});

    ctx.moveTo(66, 226);
    ctx.lineTo(178, 226);
    mazeWalls.push({x1: 66, y1: 226, x2: 178, y2: 226});

    ctx.moveTo(194, 226);
    ctx.lineTo(258, 226);
    mazeWalls.push({x1: 194, y1: 226, x2: 258, y2: 226});

    ctx.moveTo(290, 226);
    ctx.lineTo(322, 226);
    mazeWalls.push({x1: 290, y1: 226, x2: 322, y2: 226});

    ctx.moveTo(338, 226);
    ctx.lineTo(386, 226);
    mazeWalls.push({x1: 338, y1: 226, x2: 386, y2: 226});


    ctx.moveTo(418, 226);
    ctx.lineTo(434, 226);
    mazeWalls.push({x1: 418, y1: 226, x2: 434, y2: 226});

    ctx.moveTo(450, 226);
    ctx.lineTo(466, 226);
    mazeWalls.push({x1: 450, y1: 226, x2: 466, y2: 226});

    ctx.moveTo(82, 242);
    ctx.lineTo(114, 242);
    mazeWalls.push({x1: 82, y1: 242, x2: 114, y2: 242});

    ctx.moveTo(146, 242);
    ctx.lineTo(162, 242);
    mazeWalls.push({x1: 146, y1: 242, x2: 162, y2: 242});

    ctx.moveTo(226, 242);
    ctx.lineTo(290, 242);
    mazeWalls.push({x1: 226, y1: 242, x2: 290, y2: 242});

    ctx.moveTo(322, 242);
    ctx.lineTo(450, 242);
    mazeWalls.push({x1: 322, y1: 242, x2: 450, y2: 242});

    ctx.moveTo(34, 258);
    ctx.lineTo(66, 258);
    mazeWalls.push({x1: 34, y1: 258, x2: 66, y2: 258});
    //abc

    ctx.moveTo(114, 258);
    ctx.lineTo(130, 258);
    mazeWalls.push({x1: 114, y1: 258, x2: 130, y2: 258});

    ctx.moveTo(162, 258);
    ctx.lineTo(194, 258);
    mazeWalls.push({x1: 162, y1: 258, x2: 194, y2: 258});

    ctx.moveTo(210, 258);
    ctx.lineTo(258, 258);
    mazeWalls.push({x1: 210, y1: 258, x2: 258, y2: 258});

    ctx.moveTo(306, 258);
    ctx.lineTo(322, 258);
    mazeWalls.push({x1: 306, y1: 258, x2: 322, y2: 258});

    ctx.moveTo(338, 258);
    ctx.lineTo(354, 258);
    mazeWalls.push({x1: 338, y1: 258, x2: 354, y2: 258});

    ctx.moveTo(370, 258);
    ctx.lineTo(386, 258);
    mazeWalls.push({x1: 370, y1: 258, x2: 386, y2: 258});

    ctx.moveTo(402, 258);
    ctx.lineTo(466, 258);
    mazeWalls.push({x1: 402, y1: 258, x2: 466, y2: 258});

    ctx.moveTo(2, 274);
    ctx.lineTo(34, 274);
    mazeWalls.push({x1: 2, y1: 274, x2: 34, y2: 274});

    ctx.moveTo(82, 274);
    ctx.lineTo(114, 274);
    mazeWalls.push({x1: 82, y1: 274, x2: 114, y2: 274});

    ctx.moveTo(146, 274);
    ctx.lineTo(178, 274);
    mazeWalls.push({x1: 146, y1: 274, x2: 178, y2: 274});

    ctx.moveTo(210, 274);
    ctx.lineTo(226, 274);
    mazeWalls.push({x1: 210, y1: 274, x2: 226, y2: 274});

    ctx.moveTo(242, 274);
    ctx.lineTo(290, 274);
    mazeWalls.push({x1: 242, y1: 274, x2: 290, y2: 274});

    ctx.moveTo(306, 274);
    ctx.lineTo(370, 274);
    mazeWalls.push({x1: 306, y1: 274, x2: 370, y2: 274});

    ctx.moveTo(402, 274);
    ctx.lineTo(418, 274);
    mazeWalls.push({x1: 402, y1: 274, x2: 418, y2: 274});

    ctx.moveTo(434, 274);
    ctx.lineTo(466, 274);
    mazeWalls.push({x1: 434, y1: 274, x2: 466, y2: 274});

    //cde

    ctx.moveTo(34, 290);
    ctx.lineTo(130, 290);
    mazeWalls.push({x1: 34, y1: 290, x2: 130, y2: 290});

    ctx.moveTo(146, 290);
    ctx.lineTo(162, 290);
    mazeWalls.push({x1: 146, y1: 290, x2: 162, y2: 290});

    ctx.moveTo(210, 290);
    ctx.lineTo(226, 290);
    mazeWalls.push({x1: 210, y1: 290, x2: 226, y2: 290});

    ctx.moveTo(242, 290);
    ctx.lineTo(290, 290);
    mazeWalls.push({x1: 242, y1: 290, x2: 290, y2: 290});

    ctx.moveTo(306, 290);
    ctx.lineTo(338, 290);
    mazeWalls.push({x1: 306, y1: 290, x2: 338, y2: 290});

    ctx.moveTo(370, 290);
    ctx.lineTo(386, 290);
    mazeWalls.push({x1: 370, y1: 290, x2: 386, y2: 290});

    ctx.moveTo(2, 306);
    ctx.lineTo(18, 306);
    mazeWalls.push({x1: 2, y1: 306, x2: 18, y2: 306});

    ctx.moveTo(82, 306);
    ctx.lineTo(98, 306);
    mazeWalls.push({x1: 82, y1: 306, x2: 98, y2: 306});

    ctx.moveTo(130, 306);
    ctx.lineTo(146, 306);
    mazeWalls.push({x1: 130, y1: 306, x2: 146, y2: 306});

    ctx.moveTo(162, 306);
    ctx.lineTo(210, 306);
    mazeWalls.push({x1: 162, y1: 306, x2: 210, y2: 306});

    ctx.moveTo(226, 306);
    ctx.lineTo(258, 306);
    mazeWalls.push({x1: 226, y1: 306, x2: 258, y2: 306});

    ctx.moveTo(290, 306);
    ctx.lineTo(306, 306);
    mazeWalls.push({x1: 290, y1: 306, x2: 306, y2: 306});

    ctx.moveTo(338, 306);
    ctx.lineTo(354, 306);
    mazeWalls.push({x1: 338, y1: 306, x2: 354, y2: 306});

    ctx.moveTo(370, 306);
    ctx.lineTo(402, 306);
    mazeWalls.push({x1: 370, y1: 306, x2: 402, y2: 306});

    ctx.moveTo(18, 322);
    ctx.lineTo(34, 322);
    mazeWalls.push({x1: 18, y1: 322, x2: 34, y2: 322});

    ctx.moveTo(50, 322);
    ctx.lineTo(82, 322);
    mazeWalls.push({x1: 50, y1: 322, x2: 82, y2: 322});

    ctx.moveTo(98, 322);
    ctx.lineTo(130, 322);
    mazeWalls.push({x1: 98, y1: 322, x2: 130, y2: 322});

    ctx.moveTo(146, 322);
    ctx.lineTo(162, 322);
    mazeWalls.push({x1: 146, y1: 322, x2: 162, y2: 322});

    ctx.moveTo(194, 322);
    ctx.lineTo(226, 322);
    mazeWalls.push({x1: 194, y1: 322, x2: 226, y2: 322});

    ctx.moveTo(258, 322);
    ctx.lineTo(338, 322);
    mazeWalls.push({x1: 258, y1: 322, x2: 338, y2: 322});

    ctx.moveTo(354, 322);
    ctx.lineTo(402, 322);
    mazeWalls.push({x1: 354, y1: 322, x2: 402, y2: 322});

    ctx.moveTo(434, 322);
    ctx.lineTo(450, 322);
    mazeWalls.push({x1: 434, y1: 322, x2: 450, y2: 322});

    ctx.moveTo(18, 338);
    ctx.lineTo(34, 338);
    mazeWalls.push({x1: 18, y1: 338, x2: 34, y2: 338});

    ctx.moveTo(82, 338);
    ctx.lineTo(98, 338);
    mazeWalls.push({x1: 82, y1: 338, x2: 98, y2: 338});

    ctx.moveTo(130, 338);
    ctx.lineTo(162, 338);
    mazeWalls.push({x1: 130, y1: 338, x2: 162, y2: 338});

    ctx.moveTo(178, 338);
    ctx.lineTo(258, 338);
    mazeWalls.push({x1: 178, y1: 338, x2: 258, y2: 338});

    ctx.moveTo(306, 338);
    ctx.lineTo(386, 338);
    mazeWalls.push({x1: 306, y1: 338, x2: 386, y2: 338});

    ctx.moveTo(450, 338);
    ctx.lineTo(482, 338);
    mazeWalls.push({x1: 450, y1: 338, x2: 482, y2: 338});

    ctx.moveTo(66, 354);
    ctx.lineTo(146, 354);
    mazeWalls.push({x1: 66, y1: 354, x2: 146, y2: 354});

    ctx.moveTo(162, 354);
    ctx.lineTo(194, 354);
    mazeWalls.push({x1: 162, y1: 354, x2: 194, y2: 354});

    ctx.moveTo(226, 354);
    ctx.lineTo(290, 354);
    mazeWalls.push({x1: 226, y1: 354, x2: 290, y2: 354});

    ctx.moveTo(322, 354);
    ctx.lineTo(354, 354);
    mazeWalls.push({x1: 322, y1: 354, x2: 354, y2: 354});

    ctx.moveTo(370, 354);
    ctx.lineTo(386, 354);
    mazeWalls.push({x1: 370, y1: 354, x2: 386, y2: 354});

    ctx.moveTo(450, 354);
    ctx.lineTo(466, 354);
    mazeWalls.push({x1: 450, y1: 354, x2: 466, y2: 354});
    
    //here lol
    ctx.moveTo(2, 370);
    ctx.lineTo(18, 370);
    mazeWalls.push({x1: 2, y1: 370, x2: 18, y2: 370});

    ctx.moveTo(34, 370);
    ctx.lineTo(50, 370);
    mazeWalls.push({x1: 34, y1: 370, x2: 50, y2: 370});

    ctx.moveTo(82, 370);
    ctx.lineTo(98, 370);
    mazeWalls.push({x1: 82, y1: 370, x2: 98, y2: 370});

    ctx.moveTo(114, 370);
    ctx.lineTo(130, 370);
    mazeWalls.push({x1: 114, y1: 370, x2: 130, y2: 370});

    ctx.moveTo(146, 370);
    ctx.lineTo(162, 370);
    mazeWalls.push({x1: 146, y1: 370, x2: 162, y2: 370});

    ctx.moveTo(178, 370);
    ctx.lineTo(210, 370);
    mazeWalls.push({x1: 178, y1: 370, x2: 210, y2: 370});

    ctx.moveTo(258, 370);
    ctx.lineTo(274, 370);
    mazeWalls.push({x1: 258, y1: 370, x2: 274, y2: 370});

    ctx.moveTo(290, 370);
    ctx.lineTo(338, 370);
    mazeWalls.push({x1: 290, y1: 370, x2: 338, y2: 370});

    ctx.moveTo(386, 370);
    ctx.lineTo(402, 370);
    mazeWalls.push({x1: 386, y1: 370, x2: 402, y2: 370});

    ctx.moveTo(418, 370);
    ctx.lineTo(450, 370);
    mazeWalls.push({x1: 418, y1: 370, x2: 450, y2: 370});

    ctx.moveTo(466, 370);
    ctx.lineTo(482, 370);
    mazeWalls.push({x1: 466, y1: 370, x2: 482, y2: 370});

    ctx.moveTo(18, 386);
    ctx.lineTo(34, 386);
    mazeWalls.push({x1: 18, y1: 386, x2: 34, y2: 386});

    ctx.moveTo(50, 386);
    ctx.lineTo(82, 386);
    mazeWalls.push({x1: 50, y1: 386, x2: 82, y2: 386});

    ctx.moveTo(98, 386);
    ctx.lineTo(114, 386);
    mazeWalls.push({x1: 98, y1: 386, x2: 114, y2: 386});

    ctx.moveTo(130, 386);
    ctx.lineTo(146, 386);
    mazeWalls.push({x1: 130, y1: 386, x2: 146, y2: 386});

    ctx.moveTo(162, 386);
    ctx.lineTo(178, 386);
    mazeWalls.push({x1: 162, y1: 386, x2: 178, y2: 386});

    ctx.moveTo(194, 386);
    ctx.lineTo(226, 386);
    mazeWalls.push({x1: 194, y1: 386, x2: 226, y2: 386});

    ctx.moveTo(274, 386);
    ctx.lineTo(290, 386);
    mazeWalls.push({x1: 274, y1: 386, x2: 290, y2: 386});

    ctx.moveTo(338, 386);
    ctx.lineTo(354, 386);
    mazeWalls.push({x1: 338, y1: 386, x2: 354, y2: 386});

    ctx.moveTo(370, 386);
    ctx.lineTo(434, 386);
    mazeWalls.push({x1: 370, y1: 386, x2: 434, y2: 386});

    ctx.moveTo(450, 386);
    ctx.lineTo(466, 386);
    mazeWalls.push({x1: 450, y1: 386, x2: 466, y2: 386});

    ctx.moveTo(66, 402);
    ctx.lineTo(130, 402);
    mazeWalls.push({x1: 66, y1: 402, x2: 130, y2: 402});

    ctx.moveTo(178, 402);
    ctx.lineTo(194, 402);
    mazeWalls.push({x1: 178, y1: 402, x2: 194, y2: 402});

    ctx.moveTo(258, 402);
    ctx.lineTo(290, 402);
    mazeWalls.push({x1: 258, y1: 402, x2: 290, y2: 402});

    ctx.moveTo(306, 402);
    ctx.lineTo(322, 402);
    mazeWalls.push({x1: 306, y1: 402, x2: 322, y2: 402});

    ctx.moveTo(370, 402);
    ctx.lineTo(418, 402);
    mazeWalls.push({x1: 370, y1: 402, x2: 418, y2: 402});

    ctx.moveTo(434, 402);
    ctx.lineTo(450, 402);
    mazeWalls.push({x1: 434, y1: 402, x2: 450, y2: 402});

    ctx.moveTo(2, 418);
    ctx.lineTo(34, 418);
    mazeWalls.push({x1: 2, y1: 418, x2: 34, y2: 418});

    ctx.moveTo(66, 418);
    ctx.lineTo(98, 418);
    mazeWalls.push({x1: 66, y1: 418, x2: 98, y2: 418});

    ctx.moveTo(130, 418);
    ctx.lineTo(162, 418);
    mazeWalls.push({x1: 130, y1: 418, x2: 162, y2: 418});

    ctx.moveTo(178, 418);
    ctx.lineTo(194, 418);
    mazeWalls.push({x1: 178, y1: 418, x2: 194, y2: 418});

    ctx.moveTo(226, 418);
    ctx.lineTo(258, 418);
    mazeWalls.push({x1: 226, y1: 418, x2: 258, y2: 418});

    ctx.moveTo(274, 418);
    ctx.lineTo(290, 418);
    mazeWalls.push({x1: 274, y1: 418, x2: 290, y2: 418});

    ctx.moveTo(322, 418);
    ctx.lineTo(338, 418);
    mazeWalls.push({x1: 322, y1: 418, x2: 338, y2: 418});

    ctx.moveTo(354, 418);
    ctx.lineTo(402, 418);
    mazeWalls.push({x1: 354, y1: 418, x2: 402, y2: 418});

    ctx.moveTo(434, 418);
    ctx.lineTo(466, 418);
    mazeWalls.push({x1: 434, y1: 418, x2: 466, y2: 418});

    ctx.moveTo(18, 434);
    ctx.lineTo(50, 434);
    mazeWalls.push({x1: 18, y1: 434, x2: 50, y2: 434});

    ctx.moveTo(98, 434);
    ctx.lineTo(114, 434);
    mazeWalls.push({x1: 98, y1: 434, x2: 114, y2: 434});

    ctx.moveTo(146, 434);
    ctx.lineTo(178, 434);
    mazeWalls.push({x1: 146, y1: 434, x2: 178, y2: 434});

    ctx.moveTo(194, 434);
    ctx.lineTo(226, 434);
    mazeWalls.push({x1: 194, y1: 434, x2: 226, y2: 434});

    ctx.moveTo(290, 434);
    ctx.lineTo(322, 434);
    mazeWalls.push({x1: 290, y1: 434, x2: 322, y2: 434});

    ctx.moveTo(402, 434);
    ctx.lineTo(418, 434);
    mazeWalls.push({x1: 402, y1: 434, x2: 418, y2: 434});

    ctx.moveTo(2, 450);
    ctx.lineTo(18, 450);
    mazeWalls.push({x1: 2, y1: 450, x2: 18, y2: 450});

    ctx.moveTo(50, 450);
    ctx.lineTo(66, 450);
    mazeWalls.push({x1: 50, y1: 450, x2: 66, y2: 450});

    ctx.moveTo(98, 450);
    ctx.lineTo(114, 450);
    mazeWalls.push({x1: 98, y1: 450, x2: 114, y2: 450});

    ctx.moveTo(130, 450);
    ctx.lineTo(162, 450);
    mazeWalls.push({x1: 130, y1: 450, x2: 162, y2: 450});

    ctx.moveTo(178, 450);
    ctx.lineTo(194, 450);
    mazeWalls.push({x1: 178, y1: 450, x2: 194, y2: 450});

    ctx.moveTo(226, 450);
    ctx.lineTo(242, 450);
    mazeWalls.push({x1: 226, y1: 450, x2: 242, y2: 450});

    ctx.moveTo(274, 450);
    ctx.lineTo(290, 450);
    mazeWalls.push({x1: 274, y1: 450, x2: 290, y2: 450});

    ctx.moveTo(354, 450);
    ctx.lineTo(402, 450);
    mazeWalls.push({x1: 354, y1: 450, x2: 402, y2: 450});

    ctx.moveTo(418, 450);
    ctx.lineTo(466, 450);
    mazeWalls.push({x1: 418, y1: 450, x2: 466, y2: 450});


    ctx.moveTo(18, 466);
    ctx.lineTo(50, 466);
    mazeWalls.push({x1: 18, y1: 466, x2: 50, y2: 466});

    ctx.moveTo(98, 466);
    ctx.lineTo(146, 466);
    mazeWalls.push({x1: 98, y1: 466, x2: 146, y2: 466});

    ctx.moveTo(178, 466);
    ctx.lineTo(210, 466);
    mazeWalls.push({x1: 178, y1: 466, x2: 210, y2: 466});

    ctx.moveTo(226, 466);
    ctx.lineTo(290, 466);
    mazeWalls.push({x1: 226, y1: 466, x2: 290, y2: 466});

    ctx.moveTo(322, 466);
    ctx.lineTo(354, 466);
    mazeWalls.push({x1: 322, y1: 466, x2: 354, y2: 466});

    ctx.moveTo(370, 466);
    ctx.lineTo(402, 466);
    mazeWalls.push({x1: 370, y1: 466, x2: 402, y2: 466});

    ctx.moveTo(434, 466);
    ctx.lineTo(450, 466);
    mazeWalls.push({x1: 434, y1: 466, x2: 450, y2: 466});

    ctx.moveTo(18, 482);
    ctx.lineTo(50, 482);
    mazeWalls.push({x1: 18, y1: 482, x2: 50, y2: 482});

    ctx.moveTo(82, 482);
    ctx.lineTo(114, 482);
    mazeWalls.push({x1: 82, y1: 482, x2: 114, y2: 482});

    ctx.moveTo(146, 482);
    ctx.lineTo(178, 482);
    mazeWalls.push({x1: 146, y1: 482, x2: 178, y2: 482});

    ctx.moveTo(194, 482);
    ctx.lineTo(226, 482);
    mazeWalls.push({x1: 194, y1: 482, x2: 226, y2: 482});

    ctx.moveTo(258, 482);
    ctx.lineTo(290, 482);
    mazeWalls.push({x1: 258, y1: 482, x2: 290, y2: 482});
    //fge


    ctx.moveTo(2, 2); 
    ctx.lineTo(2, 482);
    mazeWalls.push({x1: 2, y1: 2, x2: 2, y2: 482});

    ctx.moveTo(18, 18); 
    ctx.lineTo(18, 34);
    mazeWalls.push({x1: 18, y1: 18, x2: 18, y2: 34});

    ctx.moveTo(18, 82); 
    ctx.lineTo(18, 130);
    mazeWalls.push({x1: 18, y1: 82, x2: 18, y2: 130});

    ctx.moveTo(18, 162); 
    ctx.lineTo(18, 178);
    mazeWalls.push({x1: 18, y1: 162, x2: 18, y2: 178});

    ctx.moveTo(18, 194); 
    ctx.lineTo(18, 226);
    mazeWalls.push({x1: 18, y1: 194, x2: 18, y2: 226});

    ctx.moveTo(18, 242); 
    ctx.lineTo(18, 274);
    mazeWalls.push({x1: 18, y1: 242, x2: 18, y2: 274});

    ctx.moveTo(18, 290); 
    ctx.lineTo(18, 306);
    mazeWalls.push({x1: 18, y1: 290, x2: 18, y2: 306});

    ctx.moveTo(18, 338); 
    ctx.lineTo(18, 370);
    mazeWalls.push({x1: 18, y1: 338, x2: 18, y2: 370});

    ctx.moveTo(18, 386); 
    ctx.lineTo(18, 402);
    mazeWalls.push({x1: 18, y1: 386, x2: 18, y2: 402});

    ctx.moveTo(34, 2); 
    ctx.lineTo(34, 18);
    mazeWalls.push({x1: 34, y1: 2, x2: 34, y2: 18});

    ctx.moveTo(34, 66); 
    ctx.lineTo(34, 82);
    mazeWalls.push({x1: 34, y1: 66, x2: 34, y2: 82});

    ctx.moveTo(34, 146); 
    ctx.lineTo(34, 162);
    mazeWalls.push({x1: 34, y1: 146, x2: 34, y2: 162});

    ctx.moveTo(34, 178); 
    ctx.lineTo(34, 210);
    mazeWalls.push({x1: 34, y1: 178, x2: 34, y2: 210});

    ctx.moveTo(34, 242); 
    ctx.lineTo(34, 258);
    mazeWalls.push({x1: 34, y1: 242, x2: 34, y2: 258});

    ctx.moveTo(34, 274); 
    ctx.lineTo(34, 322);
    mazeWalls.push({x1: 34, y1: 274, x2: 34, y2: 322});

    ctx.moveTo(34, 354); 
    ctx.lineTo(34, 386);
    mazeWalls.push({x1: 34, y1: 354, x2: 34, y2: 386});

    ctx.moveTo(34, 402); 
    ctx.lineTo(34, 418);
    mazeWalls.push({x1: 34, y1: 402, x2: 34, y2: 418});

    ctx.moveTo(34, 434); 
    ctx.lineTo(34, 466);
    mazeWalls.push({x1: 34, y1: 434, x2: 34, y2: 466});

    ctx.moveTo(50, 18); 
    ctx.lineTo(50, 34);
    mazeWalls.push({x1: 50, y1: 18, x2: 50, y2: 34});

    ctx.moveTo(50, 82); 
    ctx.lineTo(50, 114);
    mazeWalls.push({x1: 50, y1: 82, x2: 50, y2: 114});

    ctx.moveTo(50, 130); 
    ctx.lineTo(50, 146);
    mazeWalls.push({x1: 50, y1: 130, x2: 50, y2: 146});

    ctx.moveTo(50, 210); 
    ctx.lineTo(50, 242);
    mazeWalls.push({x1: 50, y1: 210, x2: 50, y2: 242});

    ctx.moveTo(50, 258); 
    ctx.lineTo(50, 274);
    mazeWalls.push({x1: 50, y1: 258, x2: 50, y2: 274});

    ctx.moveTo(50, 306); 
    ctx.lineTo(50, 370);
    mazeWalls.push({x1: 50, y1: 306, x2: 50, y2: 370});

    ctx.moveTo(50, 386); 
    ctx.lineTo(50, 434);
    mazeWalls.push({x1: 50, y1: 386, x2: 50, y2: 434});

    ctx.moveTo(66, 34); 
    ctx.lineTo(66, 82);
    mazeWalls.push({x1: 66, y1: 34, x2: 66, y2: 82});

    ctx.moveTo(66, 114); 
    ctx.lineTo(66, 162);
    mazeWalls.push({x1: 66, y1: 114, x2: 66, y2: 162});

    ctx.moveTo(66, 178); 
    ctx.lineTo(66, 194);
    mazeWalls.push({x1: 66, y1: 178, x2: 66, y2: 194});

    ctx.moveTo(66, 226); 
    ctx.lineTo(66, 258);
    mazeWalls.push({x1: 66, y1: 226, x2: 66, y2: 258});

    ctx.moveTo(66, 274); 
    ctx.lineTo(66, 322);
    mazeWalls.push({x1: 66, y1: 274, x2: 66, y2: 322});

    ctx.moveTo(66, 338); 
    ctx.lineTo(66, 386);
    mazeWalls.push({x1: 66, y1: 338, x2: 66, y2: 386});

    ctx.moveTo(66, 418); 
    ctx.lineTo(66, 482);
    mazeWalls.push({x1: 66, y1: 418, x2: 66, y2: 482});

    ctx.moveTo(82, 18); 
    ctx.lineTo(82, 50);
    mazeWalls.push({x1: 82, y1: 18, x2: 82, y2: 50});

    // <line x1="82" y1="130" x2="82" y2="146" />
    ctx.moveTo(82, 130);
    ctx.lineTo(82, 146);

    // <line x1="82" y1="178" x2="82" y2="226" />
    ctx.moveTo(82, 178);
    ctx.lineTo(82, 226);

    // <line x1="82" y1="242" x2="82" y2="274" />
    ctx.moveTo(82, 242);
    ctx.lineTo(82, 274);

    // <line x1="82" y1="322" x2="82" y2="338" />
    ctx.moveTo(82, 322);
    ctx.lineTo(82, 338);

    // <line x1="82" y1="386" x2="82" y2="402" />
    ctx.moveTo(82, 386);
    ctx.lineTo(82, 402);

    // <line x1="82" y1="434" x2="82" y2="466" />
    ctx.moveTo(82, 434);
    ctx.lineTo(82, 466);

    // <line x1="98" y1="2" x2="98" y2="66" />
    ctx.moveTo(98, 2);
    ctx.lineTo(98, 66);

    // <line x1="98" y1="98" x2="98" y2="130" />
    ctx.moveTo(98, 98);
    ctx.lineTo(98, 130);

    // <line x1="98" y1="162" x2="98" y2="210" />
    ctx.moveTo(98, 162);
    ctx.lineTo(98, 210);

    // <line x1="98" y1="242" x2="98" y2="258" />
    ctx.moveTo(98, 242);
    ctx.lineTo(98, 258);

    // <line x1="98" y1="290" x2="98" y2="306" />
    ctx.moveTo(98, 290);
    ctx.lineTo(98, 306);

    // <line x1="98" y1="322" x2="98" y2="338" />
    ctx.moveTo(98, 322);
    ctx.lineTo(98, 338);

    // <line x1="98" y1="354" x2="98" y2="386" />
    ctx.moveTo(98, 354);
    ctx.lineTo(98, 386);

    // <line x1="114" y1="50" x2="114" y2="98" />
    ctx.moveTo(114, 50);
    ctx.lineTo(114, 98);

    // <line x1="114" y1="146" x2="114" y2="226" />
    ctx.moveTo(114, 146);
    ctx.lineTo(114, 226);

    // <line x1="114" y1="258" x2="114" y2="274" />
    ctx.moveTo(114, 258);
    ctx.lineTo(114, 274);

    // <line x1="114" y1="306" x2="114" y2="322" />
    ctx.moveTo(144, 306);
    ctx.lineTo(144, 322);

    // <line x1="114" y1="338" x2="114" y2="354" />
    ctx.moveTo(114, 338);
    ctx.lineTo(114, 354);





    // <line x1="114" y1="370" x2="114" y2="418" />
    ctx.moveTo(114, 404);
    ctx.lineTo(114, 450);

    // <line x1="130" y1="18" x2="130" y2="66" />
    ctx.moveTo(130, 2);
    ctx.lineTo(130, 50);

    //<line x1="130" y1="66" x2="130" y2="82" />
    ctx.moveTo(130, 66);
    ctx.lineTo(130, 82);

    // <line x1="130" y1="114" x2="130" y2="178" />
    ctx.moveTo(130, 114);
    ctx.lineTo(130, 130);

    // <line x1="130" y1="194" x2="130" y2="210" />
    ctx.moveTo(130, 194);
    ctx.lineTo(130, 210);

    // <line x1="130" y1="274" x2="130" y2="290" />
    ctx.moveTo(130, 226);
    ctx.lineTo(130, 258);

    //<line x1="130" y1="274" x2="130" y2="306" />
    ctx.moveTo(130, 274);
    ctx.lineTo(130, 306);

    // <line x1="130" y1="322" x2="130" y2="338" />
    ctx.moveTo(130, 322);
    ctx.lineTo(130, 338);

    // <line x1="130" y1="402" x2="130" y2="434" />
    ctx.moveTo(130, 354);
    ctx.lineTo(130, 370);


    /////////////////////////////////

    ctx.moveTo(130, 386);
    ctx.lineTo(130, 402);

    // <line x1="130" y1="418" x2="130" y2="466" />
    ctx.moveTo(130, 418);
    ctx.lineTo(130, 466);

    // <line x1="146" y1="18" x2="146" y2="34" />
    ctx.moveTo(146, 18);
    ctx.lineTo(146, 34);

    // <line x1="146" y1="50" x2="146" y2="66" />
    ctx.moveTo(146, 50);
    ctx.lineTo(146, 66);

    // <line x1="146" y1="82" x2="146" y2="114" />
    ctx.moveTo(146, 82);
    ctx.lineTo(146, 114);

    // <line x1="146" y1="130" x2="146" y2="194" />
    ctx.moveTo(146, 130);
    ctx.lineTo(146, 194);

    // <line x1="146" y1="242" x2="146" y2="258" />
    ctx.moveTo(146, 242);
    ctx.lineTo(146, 258);

    // <line x1="146" y1="370" x2="146" y2="386" />
    ctx.moveTo(146, 370);
    ctx.lineTo(146, 386);

    // <line x1="146" y1="402" x2="146" y2="418" />
    ctx.moveTo(146, 402);
    ctx.lineTo(146, 418);

    // <line x1="146" y1="466" x2="146" y2="482" />
    ctx.moveTo(146, 466);
    ctx.lineTo(146, 482);

    // <line x1="162" y1="34" x2="162" y2="50" />
    ctx.moveTo(162, 34);
    ctx.lineTo(162, 50);

    // <line x1="162" y1="66" x2="162" y2="82" />
    ctx.moveTo(162, 66);
    ctx.lineTo(162, 82);

    // <line x1="162" y1="114" x2="162" y2="146" />
    ctx.moveTo(162, 114);
    ctx.lineTo(162, 146);

    // <line x1="162" y1="162" x2="162" y2="178" />
    ctx.moveTo(162, 162);
    ctx.lineTo(162, 178);

    // <line x1="162" y1="194" x2="162" y2="210" />
    ctx.moveTo(162, 194);
    ctx.lineTo(162, 210);

    // <line x1="162" y1="242" x2="162" y2="258" />
    ctx.moveTo(162, 242);
    ctx.lineTo(162, 258);

    // <line x1="162" y1="290" x2="162" y2="322" />
    ctx.moveTo(162, 290);
    ctx.lineTo(162, 322);

    // <line x1="162" y1="354" x2="162" y2="370" />
    ctx.moveTo(162, 354);
    ctx.lineTo(162, 370);

    // <line x1="162" y1="386" x2="162" y2="418" />
    ctx.moveTo(162, 386);
    ctx.lineTo(162, 418);

    // <line x1="162" y1="450" x2="162" y2="466" />
    ctx.moveTo(162, 450);
    ctx.lineTo(162, 466);

    // <line x1="178" y1="18" x2="178" y2="34" />
    ctx.moveTo(178, 18);
    ctx.lineTo(178, 34);

    // <line x1="178" y1="50" x2="178" y2="66" />
    ctx.moveTo(178, 50);
    ctx.lineTo(178, 66);

    // <line x1="178" y1="82" x2="178" y2="98" />
    ctx.moveTo(178, 82);
    ctx.lineTo(178, 98);

    // <line x1="178" y1="178" x2="178" y2="194" />
    ctx.moveTo(178, 178);
    ctx.lineTo(178, 194);

    // <line x1="178" y1="210" x2="178" y2="242" />
    ctx.moveTo(178, 210);
    ctx.lineTo(178, 242);

    // <line x1="178" y1="274" x2="178" y2="290" />
    ctx.moveTo(178, 274);
    ctx.lineTo(178, 290);

    // <line x1="178" y1="306" x2="178" y2="354" />
    ctx.moveTo(178, 306);
    ctx.lineTo(178, 354);

    // <line x1="178" y1="370" x2="178" y2="386" />
    ctx.moveTo(178, 370);
    ctx.lineTo(178, 386);



    // <line x1="178" y1="402" x2="178" y2="450" />
    ctx.moveTo(178, 402);
    ctx.lineTo(178, 450);

    // <line x1="178" y1="466" x2="178" y2="482" />
    ctx.moveTo(178, 466);
    ctx.lineTo(178, 482);

    // <line x1="194" y1="2" x2="194" y2="18" />
    ctx.moveTo(194, 2);
    ctx.lineTo(194, 18);

    // <line x1="194" y1="34" x2="194" y2="50" />
    ctx.moveTo(194, 34);
    ctx.lineTo(194, 50);

    // <line x1="194" y1="98" x2="194" y2="130" />
    ctx.moveTo(194, 98);
    ctx.lineTo(194, 130);

    // <line x1="194" y1="146" x2="194" y2="178" />
    ctx.moveTo(194, 146);
    ctx.lineTo(194, 178);

    // <line x1="194" y1="194" x2="194" y2="210" />
    ctx.moveTo(194, 194);
    ctx.lineTo(194, 210);

    // <line x1="194" y1="226" x2="194" y2="258" />
    ctx.moveTo(194, 226);
    ctx.lineTo(194, 258);

    // <line x1="194" y1="274" x2="194" y2="306" />
    ctx.moveTo(194, 274);
    ctx.lineTo(194, 306);

    // <line x1="194" y1="386" x2="194" y2="402" />
    ctx.moveTo(194, 386);
    ctx.lineTo(194, 402);

    // <line x1="194" y1="434" x2="194" y2="466" />
    ctx.moveTo(194, 434);
    ctx.lineTo(194, 466);

    // <line x1="210" y1="2" x2="210" y2="34" />
    ctx.moveTo(210, 2);
    ctx.lineTo(210, 34);

    // <line x1="210" y1="50" x2="210" y2="130" />
    ctx.moveTo(210, 50);
    ctx.lineTo(210, 130);

    // <line x1="210" y1="162" x2="210" y2="178" />
    ctx.moveTo(210, 162);
    ctx.lineTo(210, 178);

    // <line x1="210" y1="210" x2="210" y2="258" />
    ctx.moveTo(210, 210);
    ctx.lineTo(210, 258);

    // <line x1="210" y1="306" x2="210" y2="322" />
    ctx.moveTo(210, 306);
    ctx.lineTo(210, 322);

    // <line x1="210" y1="338" x2="210" y2="370" />
    ctx.moveTo(210, 338);
    ctx.lineTo(210, 370);

    // <line x1="210" y1="402" x2="210" y2="434" />
    ctx.moveTo(210, 402);
    ctx.lineTo(210, 434);

    // <line x1="210" y1="450" x2="210" y2="482" />
    ctx.moveTo(210, 450);
    ctx.lineTo(210, 482);

    // <line x1="226" y1="66" x2="226" y2="130" />
    ctx.moveTo(226, 66);
    ctx.lineTo(226, 130);

    ///zadnja)

    // <line x1="226" y1="194" x2="226" y2="210" />
    ctx.moveTo(226, 194);
    ctx.lineTo(226, 210);

    // <line x1="226" y1="258" x2="226" y2="274" />
    ctx.moveTo(226, 258);
    ctx.lineTo(226, 274);

    // <line x1="226" y1="290" x2="226" y2="306" />
    ctx.moveTo(226, 290);
    ctx.lineTo(226, 306);

    // <line x1="226" y1="354" x2="226" y2="386" />
    ctx.moveTo(226, 354);
    ctx.lineTo(226, 386);

    // <line x1="226" y1="402" x2="226" y2="418" />
    ctx.moveTo(226, 402);
    ctx.lineTo(226, 418);

    // <line x1="226" y1="434" x2="226" y2="450" />
    ctx.moveTo(226, 434);
    ctx.lineTo(226, 450);

    // <line x1="226" y1="466" x2="226" y2="482" />
    ctx.moveTo(226, 466);
    ctx.lineTo(226, 482);

    // <line x1="242" y1="18" x2="242" y2="98" />
    ctx.moveTo(242, 18);
    ctx.lineTo(242, 98);

    // <line x1="242" y1="146" x2="242" y2="162" />
    ctx.moveTo(242, 146);
    ctx.lineTo(242, 162);

    // <line x1="242" y1="178" x2="242" y2="194" />
    ctx.moveTo(242, 178);
    ctx.lineTo(242, 194);

    // <line x1="242" y1="274" x2="242" y2="290" />
    ctx.moveTo(242, 274);
    ctx.lineTo(242, 290);

    // <line x1="242" y1="306" x2="242" y2="338" />
    ctx.moveTo(242, 306);
    ctx.lineTo(242, 338);

    // <line x1="242" y1="354" x2="242" y2="402" />
    ctx.moveTo(242, 354);
    ctx.lineTo(242, 402);

    // <line x1="242" y1="418" x2="242" y2="434" />
    ctx.moveTo(242, 418);
    ctx.lineTo(242, 434);

    // <line x1="242" y1="450" x2="242" y2="466" />
    ctx.moveTo(242, 450);
    ctx.lineTo(242, 466);

    // <line x1="258" y1="2" x2="258" y2="18" />
    ctx.moveTo(258, 2);
    ctx.lineTo(258, 18);

    // <line x1="258" y1="66" x2="258" y2="82" />
    ctx.moveTo(258, 66);
    ctx.lineTo(258, 82);

    // <line x1="258" y1="98" x2="258" y2="146" />
    ctx.moveTo(258, 98);
    ctx.lineTo(258, 146);

    // <line x1="258" y1="162" x2="258" y2="226" />
    ctx.moveTo(258, 162);
    ctx.lineTo(258, 226);

    // <line x1="258" y1="258" x2="258" y2="274" />
    ctx.moveTo(258, 258);
    ctx.lineTo(258, 274);

    // <line x1="258" y1="290" x2="258" y2="306" />
    ctx.moveTo(258, 290);
    ctx.lineTo(258, 306);

    // <line x1="258" y1="370" x2="258" y2="450" />
    ctx.moveTo(258, 370);
    ctx.lineTo(258, 450);

    // <line x1="258" y1="466" x2="258" y2="482" />
    ctx.moveTo(258, 466);
    ctx.lineTo(258, 482);

    //odjlkjlj

    ctx.moveTo(274, 18);
    ctx.lineTo(274, 82);

    ctx.moveTo(274, 98);
    ctx.lineTo(274, 114);

    ctx.moveTo(274, 146);
    ctx.lineTo(274, 226);

    ctx.moveTo(274, 258);
    ctx.lineTo(274, 274);

    ctx.moveTo(274, 306);
    ctx.lineTo(274, 354);

    ctx.moveTo(274, 418);
    ctx.lineTo(274, 434);

    ctx.moveTo(274, 450);
    ctx.lineTo(274, 466);

    ctx.moveTo(290, 2);
    ctx.lineTo(290, 18);

    ctx.moveTo(290, 34);
    ctx.lineTo(290, 66);

    ctx.moveTo(290, 82);
    ctx.lineTo(290, 98);

    ctx.moveTo(290, 130);
    ctx.lineTo(290, 274);

    ctx.moveTo(290, 290);
    ctx.lineTo(290, 306);

    ctx.moveTo(290, 322);
    ctx.lineTo(290, 338);

    ctx.moveTo(290, 354);
    ctx.lineTo(290, 402);

    ctx.moveTo(290, 418);
    ctx.lineTo(290, 434);

    ctx.moveTo(290, 466);
    ctx.lineTo(290, 482);

    ctx.moveTo(306, 18);
    ctx.lineTo(306, 34);

    ctx.moveTo(306, 66);
    ctx.lineTo(306, 98);

    ctx.moveTo(306, 114);
    ctx.lineTo(306, 130);

    ctx.moveTo(306, 146);
    ctx.lineTo(306, 178);

    ctx.moveTo(306, 242);
    ctx.lineTo(306, 306);

    ctx.moveTo(306, 338);
    ctx.lineTo(306, 354);

    ctx.moveTo(306, 386);
    ctx.lineTo(306, 418);

    ctx.moveTo(306, 450);
    ctx.lineTo(306, 466);

    ctx.moveTo(322, 34);
    ctx.lineTo(322, 50);

    ctx.moveTo(322, 98);
    ctx.lineTo(322, 114);

    ctx.moveTo(322, 130);
    ctx.lineTo(322, 146);

    ctx.moveTo(322, 194);
    ctx.lineTo(322, 210);

    ctx.moveTo(322, 226);
    ctx.lineTo(322, 242);

    ctx.moveTo(322, 258);
    ctx.lineTo(322, 274);

    ctx.moveTo(322, 306);
    ctx.lineTo(322, 322);

    ctx.moveTo(322, 370);
    ctx.lineTo(322, 402);

    ctx.moveTo(322, 434);
    ctx.lineTo(322, 466);

    ctx.moveTo(338, 66);
    ctx.lineTo(338, 98);

    ctx.moveTo(338, 114);
    ctx.lineTo(338, 130);

    ctx.moveTo(338, 162);
    ctx.lineTo(338, 194);

    ctx.moveTo(338, 210);
    ctx.lineTo(338, 226);

    ctx.moveTo(338, 290);
    ctx.lineTo(338, 306);

    ctx.moveTo(338, 322);
    ctx.lineTo(338, 338);

    ctx.moveTo(338, 386);
    ctx.lineTo(338, 482);

    ctx.moveTo(354, 50);
    ctx.lineTo(354, 66);

    ctx.moveTo(354, 82);
    ctx.lineTo(354, 114);

    ctx.moveTo(354, 130);
    ctx.lineTo(354, 146);

    ctx.moveTo(354, 210);
    ctx.lineTo(354, 226);

    ctx.moveTo(354, 258);
    ctx.lineTo(354, 322);

    ctx.moveTo(354, 354);
    ctx.lineTo(354, 434);

    ctx.moveTo(370, 2);
    ctx.lineTo(370, 50);

    ctx.moveTo(370, 114);
    ctx.lineTo(370, 130);

    ctx.moveTo(370, 146);
    ctx.lineTo(370, 162);

    ctx.moveTo(370, 178);
    ctx.lineTo(370, 210);

    ctx.moveTo(370, 258);
    ctx.lineTo(370, 306);

    ctx.moveTo(370, 354);
    ctx.lineTo(370, 402);

    ctx.moveTo(370, 434);
    ctx.lineTo(370, 466);

    ctx.moveTo(386, 18);
    ctx.lineTo(386, 66);

    ctx.moveTo(386, 98);
    ctx.lineTo(386, 114);

    ctx.moveTo(386, 146);
    ctx.lineTo(386, 178);

    ctx.moveTo(386, 194);
    ctx.lineTo(386, 226);

    ctx.moveTo(386, 242);
    ctx.lineTo(386, 258);

    ctx.moveTo(386, 338);
    ctx.lineTo(386, 354);

    ctx.moveTo(386, 418);
    ctx.lineTo(386, 450);

    ctx.moveTo(386, 466);
    ctx.lineTo(386, 482);

    ctx.moveTo(402, 2);
    ctx.lineTo(402, 18);

    ctx.moveTo(402, 82);
    ctx.lineTo(402, 98);

    ctx.moveTo(402, 114);
    ctx.lineTo(402, 130);

    ctx.moveTo(402, 178);
    ctx.lineTo(402, 194);

    ctx.moveTo(402, 210);
    ctx.lineTo(402, 242);

    ctx.moveTo(402, 258);
    ctx.lineTo(402, 290);

    ctx.moveTo(402, 306);
    ctx.lineTo(402, 370);

    ctx.moveTo(402, 450);
    ctx.lineTo(402, 466);

    ctx.moveTo(418, 18);
    ctx.lineTo(418, 82);

    ctx.moveTo(418, 130);
    ctx.lineTo(418, 146);

    ctx.moveTo(418, 194);
    ctx.lineTo(418, 210);

    ctx.moveTo(418, 290);
    ctx.lineTo(418, 386);

    ctx.moveTo(418, 402);
    ctx.lineTo(418, 450);

    ctx.moveTo(434, 18);
    ctx.lineTo(434, 66);

    ctx.moveTo(434, 98);
    ctx.lineTo(434, 114);

    ctx.moveTo(434, 130);
    ctx.lineTo(434, 162);

    ctx.moveTo(434, 178);
    ctx.lineTo(434, 194);

    ctx.moveTo(434, 210);
    ctx.lineTo(434, 226);

    ctx.moveTo(434, 274);
    ctx.lineTo(434, 354);

    ctx.moveTo(434, 386);
    ctx.lineTo(434, 402);

    ctx.moveTo(434, 418);
    ctx.lineTo(434, 434);

    ctx.moveTo(450, 18);
    ctx.lineTo(450, 82);

    ctx.moveTo(450, 114);
    ctx.lineTo(450, 146);

    ctx.moveTo(450, 194);
    ctx.lineTo(450, 210);

    ctx.moveTo(450, 290);
    ctx.lineTo(450, 322);

    ctx.moveTo(450, 354);
    ctx.lineTo(450, 386);

    ctx.moveTo(450, 434);
    ctx.lineTo(450, 450);

    ctx.moveTo(466, 18);
    ctx.lineTo(466, 50);

    ctx.moveTo(466, 66);
    ctx.lineTo(466, 82);

    ctx.moveTo(466, 146);
    ctx.lineTo(466, 162);

    ctx.moveTo(466, 178);
    ctx.lineTo(466, 194);

    ctx.moveTo(466, 226);
    ctx.lineTo(466, 258);

    ctx.moveTo(466, 274);
    ctx.lineTo(466, 338);

    ctx.moveTo(466, 386);
    ctx.lineTo(466, 434);

    ctx.moveTo(482, 2);
    ctx.lineTo(482, 482);

    ctx.stroke();
}



// Clear the canvas before each frame
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Update character position based on key press
function moveCharacter(direction) {
    let newX = character.x;
    let newY = character.y;

    if (direction === 'left') newX -= character.speed;
    if (direction === 'right') newX += character.speed;
    if (direction === 'up') newY -= character.speed;
    if (direction === 'down') newY += character.speed;

    // Check if moving to the new position would cause a collision
    if (!checkCollision(newX, newY)) {
        character.x = newX;
        character.y = newY;
    }
}

// Handle keypress events to move character
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') moveCharacter('left');
    if (event.key === 'ArrowRight') moveCharacter('right');
    if (event.key === 'ArrowUp') moveCharacter('up');
    if (event.key === 'ArrowDown') moveCharacter('down');
});

// Main game loop to update the canvas
function gameLoop() {
    clearCanvas();  // Clear previous frame
    drawMaze();     // Draw maze again
    drawCharacter();  // Draw character at new position
    requestAnimationFrame(gameLoop); // Continuously update the canvas
}

// Start the game loop
gameLoop();
