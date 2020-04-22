import { canvas, ctx, colour } from "./constants";


class Lives {
  constructor(lives = 3, color = colour) {
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
