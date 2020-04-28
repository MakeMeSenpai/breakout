import Sprite from "./sprite";


class Ball extends Sprite {
  constructor(x, y, dx = 2, dy = -1, radius = 10, color) {
    super(x, y, radius * 2, radius * 2, color);
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.PI2 = Math.PI * 2;
  }

  move() {
    this.moveBy(this.dx, this.dy);
  }

  // overrides the method in Sprite Class
  render(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, this.PI2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  reset(canvas) {
    this.x = canvas.width / 2;
    this.y = canvas.height - 30;
    this.dx = 3;
    this.dy = -3;
  }
}

export default Ball();
