import { Background } from "background.js";

const b = Background();

class Ball {
  constructor(x = 0, y = 0, dx = 2, dy = -2, radius = 10, color = b.color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, b.PI2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  // move() {
  //   this.x += this.dx;
  //   this.y += this.dy;
  // }
}

function test() {
  const one = Ball();
  one.draw();
  one.move();
}

test();
