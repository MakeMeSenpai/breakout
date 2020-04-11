import * as b from "background.js";

class Ball {
  constructor(x = 0, y = 0, dx = 2, dy = -2, radius = 10, color = b.objectColor) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    b.ctx.beginPath();
    b.ctx.arc(this.x, this.y, this.radius, 0, b.PI2);
    b.ctx.fillStyle = this.color;
    b.ctx.fill();
    b.ctx.closePath();
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }
}
