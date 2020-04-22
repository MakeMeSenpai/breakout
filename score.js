import { ctx, colour } from "./constants";


class Score {
  constructor(points = 0, color = colour) {
    this.points = points;
    this.color = color;
  }

  draw() {
    ctx.font = "16px Arial";
    ctx.fillStyle = this.color;
    ctx.fillText(`Score: ${this.points}`, 8, 20);
  }
}

export default Score;
