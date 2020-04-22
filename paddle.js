import { canvas, ctx, colour } from "./constants";


/* eslint-disable no-use-before-define */
const keyDownHandler = document.addEventListener("keydown", keyDownHandler, false);
const keyUpHandler = document.addEventListener("keyup", keyUpHandler, false);
const mouseMoveHandler = document.addEventListener("mousemove", mouseMoveHandler, false);
/* eslint-enable no-use-before-define */

class Paddle {
  constructor(height = 10, width = 75, start = (canvas.width - width) / 2,
    x = 0, rightPressed = false, leftPressed = false, color = colour) {
    this.height = height;
    this.width = width;
    this.start = start;
    this.x = x;
    this.rightPressed = rightPressed;
    this.leftPressed = leftPressed;
    this.color = color;
  }

  keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
      this.rightPressed = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      this.leftPressed = true;
    }
  }

  keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
      this.rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      this.leftPressed = false;
    }
  }

  mouseMoveHandler(e) {
    const relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
      this.x = relativeX - this.width / 2;
    }
  }

  drawPaddle() {
    ctx.beginPath();
    ctx.rect(this.x, canvas.height - this.height, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  movePaddle() {
    if (this.rightPressed && this.x < canvas.width - this.width) {
      this.x += 7;
    } else if (this.leftPressed && this.x > 0) {
      this.x -= 7;
    }
  }
}

export default Paddle;
