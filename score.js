import * as b from "background.js"

class score {
  constructor(points = 0, color = "red") {
    this.points = points;
    this.color = color;
  }

  draw() {
    b.ctx.font = "16px Arial";
    b.ctx.fillStyle = this.color;
    b.ctx.fillText(`Score: ${this.points}`, 8, 20);
  }
}
