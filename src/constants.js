// All of our Constants

// canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
// ball
const ballRadius = 10;
// paddle
const paddleHeight = 10;
const paddleWidth = 75;
const paddleXStart = (canvas.width - paddleWidth) / 2;
const paddleYStart = canvas.height - paddleHeight;
// brick
const brickRowCount = 5;
const brickColumnCount = 7;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
// colour
const colour = "#0095DD";

// exports our code to other files
export {
  canvas,
  ctx,
  ballRadius,
  paddleHeight,
  paddleWidth,
  paddleXStart,
  paddleYStart,
  brickRowCount,
  brickColumnCount,
  brickWidth,
  brickHeight,
  brickPadding,
  brickOffsetTop,
  brickOffsetLeft,
  colour,
};
