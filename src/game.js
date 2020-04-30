// imports all our modules into one main file
import {
  canvas,
  ctx,
  ballRadius,
  paddleHeight,
  paddleWidth,
  brickRowCount,
  brickColumnCount,
  brickWidth,
  brickHeight,
  brickPadding,
  brickOffsetTop,
  brickOffsetLeft,
  paddleXStart,
  paddleYStart,
  colour,
} from "./constants";
import Ball from "./ball";
import Sprite from "./sprite";
import Brick from "./brick";
import Bricks from "./bricks";
import Lables from "./lables";

// creates our main opperations class, Game (which is kinda like glue)
class Game {
  constructor() {
    // Ball class
    this.ball = new Ball(0, 0, 2, -2, ballRadius, colour);

    // Paddle Class
    this.paddle = new Sprite(paddleXStart, paddleYStart,
      paddleWidth, paddleHeight, colour);

    // Bricks Class
    this.brick = new Brick(brickColumnCount, brickRowCount,
      brickWidth, brickHeight, colour);
    this.bricks = new Bricks(brickColumnCount, brickRowCount,
      brickWidth, brickHeight, brickPadding,
      brickOffsetLeft, brickOffsetTop, colour);

    // Lables Class
    this.score = new Lables(8, 20, colour, "Score: ");
    this.lives = new Lables(canvas.width - 65, 20, colour, "Lives: ");

    // Setup
    this.leftPressed = false;
    this.rightPressed = false;
    this.setup();
  }

  setup() {
    this.lives.value = 3;
    this.resetBallAndPaddle();
    document.addEventListener("keydown", ((e) => {
      this.keyDownHandler(e);
    }), false);
    document.addEventListener("keyup", ((e) => {
      this.keyUpHandler(e);
    }), false);
    document.addEventListener("mousemove", ((e) => {
      this.mouseMoveHandler(e);
    }), false);
  }

  // resets our ball and Paddle
  resetBallAndPaddle() {
    this.ball.reset(canvas);
    this.paddle.reset(paddleXStart);
  }

  // creates win conditions and tests collisions with bricks
  collisionDetection() {
    for (let c = 0; c < this.bricks.cols; c += 1) {
      for (let r = 0; r < this.bricks.rows; r += 1) {
        const brick = this.bricks.bricks[c][r];
        if (brick.status === 1) {
          if (this.ball.x > brick.x
            && this.ball.x < brick.x + brick.width
            && this.ball.y > brick.y
            && this.ball.y < brick.y + brick.height) {
            this.ball.dy = -this.ball.dy;
            brick.status = 0;
            this.score.value += 1;
            if (this.score.value === this.bricks.cols * this.bricks.rows) {
              alert("YOU WIN, CONGRATS!");
              document.location.reload();
            }
          }
        }
      }
    }
  }

  // controls the movement of our paddle
  movePaddle() {
    if (this.rightPressed && this.x < canvas.width - this.width) {
      this.paddle.moveBy(7, 0);
    } else if (this.leftPressed && this.x > 0) {
      this.paddle.moveBy(-7, 0);
    }
  }

  // creates lose conditions and tests collisions with canvas/paddle
  collisionWithCanvasAndPaddle() {
    if (this.ball.x + this.ball.dx > canvas.width - this.ball.radius
      || this.ball.x + this.ball.dx < this.ball.radius) {
      this.ball.dx = -this.ball.dx;
    }
    if (this.ball.y + this.ball.dy < this.ball.radius) {
      this.ball.dy = -this.ball.dy;
    } else if (this.ball.y + this.ball.dy > canvas.height - this.ball.radius) {
      if (this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddle.width) {
        this.ball.dy = -this.ball.dy;
      } else {
        this.lives.value -= 1;
        if (this.lives.value < 1) {
          alert("GAME OVER");
          this.lives = 3;
          document.location.reload();
        } else {
          this.resetBallAndPaddle();
        }
      }
    }
  }

  // tests if the keys are held down/pressed
  keyDownHandler(e) {
    if (e.key === 39) {
      this.rightPressed = true;
    } else if (e.key === 37) {
      this.leftPressed = true;
    }
  }

  // tests if the keys are up/not pressed
  keyUpHandler(e) {
    if (e.key === 39) {
      this.rightPressed = false;
    } else if (e.key === 37) {
      this.leftPressed = false;
    }
  }

  // controls our paddle using the mouse
  mouseMoveHandler(e) {
    const relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
      this.paddle.moveTo(relativeX - this.paddle.width / 2, paddleYStart);
    }
  }

  // displays our game and runs necessary functions
  draw() {
    // creates our canvas and colors it's background
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "lightgreen";
    ctx.fill();
    // creates our assests
    this.bricks.render(ctx);
    this.ball.render(ctx);
    this.paddle.render(ctx);
    this.score.render(ctx);
    this.lives.render(ctx);
    // runs our functions for gameplay
    this.collisionDetection();
    this.ball.move();
    this.movePaddle();
    this.collisionWithCanvasAndPaddle();
    // requestAnimationFrame(this.draw.bind(this));
    // Google: JavaScript This is confusing
    requestAnimationFrame(() => {
      this.draw();
    });
  }
}

// sends our game to index.js
export default Game;
