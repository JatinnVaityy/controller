// Get the canvas and set its context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set initial canvas size
canvas.width = 500;
canvas.height = 500;

// Forklift object
const forklift = {
  x: 200,
  y: 200,
  width: 50,
  height: 50,
  angle: 0,  // Rotation angle in degrees
  speed: 5,
  turnSpeed: 5,
  forkLength: 50,  // Length of the forklift's arms (forks)
  forkWidth: 5     // Width of the forklift's arms
};

// Draw the forklift on the canvas
function drawForklift() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

  // Save the current state of the canvas
  ctx.save();

  // Move the context to the forklift's position
  ctx.translate(forklift.x, forklift.y);
  ctx.rotate(forklift.angle * Math.PI / 180); // Rotate by forklift's angle

  // Draw the forklift body (yellow square)
  ctx.fillStyle = "yellow";
  ctx.fillRect(-forklift.width / 2, -forklift.height / 2, forklift.width, forklift.height);

  // Draw the forklift forks (two black lines extending in one direction)
  ctx.strokeStyle = "black";
  ctx.lineWidth = forklift.forkWidth;

  // Fork 1 (left fork)
  ctx.beginPath();
  ctx.moveTo(-forklift.width / 4, -forklift.height / 2); // Start at the front-left corner
  ctx.lineTo(-forklift.width / 4, -forklift.height / 2 - forklift.forkLength); // Extend upward
  ctx.stroke();

  // Fork 2 (right fork)
  ctx.beginPath();
  ctx.moveTo(forklift.width / 4, -forklift.height / 2); // Start at the front-right corner
  ctx.lineTo(forklift.width / 4, -forklift.height / 2 - forklift.forkLength); // Extend upward
  ctx.stroke();

  // Restore the canvas state
  ctx.restore();
}

// Move forklift up
function moveUp() {
  forklift.y -= forklift.speed;
  drawForklift();
}

// Move forklift down
function moveDown() {
  forklift.y += forklift.speed;
  drawForklift();
}

// Move forklift left
function moveLeft() {
  forklift.x -= forklift.speed;
  drawForklift();
}

// Move forklift right
function moveRight() {
  forklift.x += forklift.speed;
  drawForklift();
}

// Turn forklift left
function turnLeft() {
  forklift.angle -= forklift.turnSpeed;
  drawForklift();
}

// Turn forklift right
function turnRight() {
  forklift.angle += forklift.turnSpeed;
  drawForklift();
}

// Stop moving (for when mouse button is released)
function stopMove() {
  // You can implement additional behavior if needed
}

// Set up the event listeners for buttons
document.getElementById("up").addEventListener("mousedown", moveUp);
document.getElementById("down").addEventListener("mousedown", moveDown);
document.getElementById("left").addEventListener("mousedown", moveLeft);
document.getElementById("right").addEventListener("mousedown", moveRight);
document.getElementById("turnLeft").addEventListener("mousedown", turnLeft);
document.getElementById("turnRight").addEventListener("mousedown", turnRight);

// Re-initialize the canvas drawing
drawForklift();
