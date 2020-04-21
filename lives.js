import { canvas, ctx, color } from "./constants";


class Lives {
  constructor(lives = 3, color = color) {
    this.lives = lives;
    this.color = color;
  }

  draw() {
    ctx.font = "16px Arial";
    ctx.fillStyle = this.color;
    ctx.fillText(`Lives: ${this.lives}`, canvas.width - 65, 20);
  }
}

export default Lives;
