// Imports const colours
import colour from "./constants";

// creates parent class, Sprite
class Sprite {
  constructor(x = 0, y = 0, width = 10, height = 10, color = colour) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  // creates our games items
  render(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  // resets paddle's position
  reset(paddleXStart) {
    this.x = paddleXStart;
  }

  // controles object movement
  moveBy(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  // used for mouse controls
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}

// exports Sprite class
export default Sprite;
