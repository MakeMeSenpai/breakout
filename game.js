import * as b from "background.js";
import Ball from "ball.js";
import Paddle from "paddle.js";
import BRICKS from "BRICKS.js";
import Score from "score.js";
import Lives from "lives.js";

const { canvas } = b.canvas;

class Game {
  constructor(ball = Ball(), paddle = Paddle(), bricks = BRICKS(),
    score = Score(), lives = Lives()) {
    this.ball = ball;
    this.paddle = paddle;
    this.bricks = bricks;
    this.score = score;
    this.lives = lives;
  }

  collisionDetection() {
    for (let c = 0; c < this.bricks.columnCount; c += 1) {
      for (let r = 0; r < this.bricks.rowCount; r += 1) {
        const brick = this.bricks[c][r];
        if (brick.status === 1) {
          if (this.ball.x > brick.x && this.ball.x < brick.x + this.bricks.width
            && this.ball.y > brick.y && this.ball.y < brick.y + this.bricks.height) {
            this.ball.dy = -this.ball.dy;
            this.brick.status = 0;
            this.score.points += 1;
            if (this.score.points === this.bricks.rowCount * this.bricks.columnCount) {
              alert("YOU WIN, CONGRATS!");
              document.location.reload();
            }
          }
        }
      }
    }
  }

  resetBallAndPaddle() {
    this.ball.x = canvas.width / 2;
    this.ball.y = canvas.height - 30;
    this.ball.dx = 3;
    this.ball.dy = -3;
    this.paddle.x = this.paddle.start;
  }

  collisionWithCanvasAndPaddle() {
    if (this.ball.x + this.ball.dx > canvas.width - this.ball.radius || this.ball.x
      + this.ball.dx < this.ball.radius) {
      this.ball.dx = -this.ball.dx;
    }
    if (this.ball.y + this.ball.dy < this.ball.radius) {
      this.ball.dy = -this.ball.dy;
    } else if (this.ball.y + this.ball.dy > canvas.height - this.ball.radius) {
      if (this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddle.width) {
        this.ball.dy = -this.ball.dy;
      } else {
        this.lives.lives -= 1;
        if (!this.lives.lives) {
          alert("GAME OVER");
          document.location.reload();
        } else {
          this.resetBallAndPaddle();
        }
      }
    }
  }

  draw() {
    b.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.bricks.draw();
    this.ball.draw();
    this.paddle.draw();
    this.score.draw();
    this.lives.draw();
    this.resetBallAndPaddle();
    this.collisionDetection();
    this.collisionWithCanvasAndPaddle();
    this.paddle.move();
    this.ball.move();
    this.requestAnimationFrame(this.draw);
  }
}

const play = Game();
play();
