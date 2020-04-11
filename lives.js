import { Background } from "background.js";

const b = Background();

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

function test() {
  const one = Lives();
  one.draw();
}

test();
