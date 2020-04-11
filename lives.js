import * as b from "background.js";

class Lives {
  constructor(lives = 3, color) {
    this.lives = lives;
    this.color = color;
  }

  draw() {
    b.ctx.font = "16px Arial";
    b.ctx.fillStyle = this.color;
    b.ctx.fillText(`Lives: ${this.lives}`, b.canvas.width - 65, 20);
  }
}
