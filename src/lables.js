// imports Spite class
import Sprite from "./sprite";

// creates Sprite's child class, Lable
class Lables extends Sprite {
  // Lable's params
  constructor(x, y, color, txt, font = "16px Arial") {
    // Sprite's params
    super(x, y, 0, 0, color);
    this.txt = txt;
    this.font = font;
    this.value = 0;
  }

  // overrides Sprites render method
  render(ctx) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`${this.txt} ${this.value}`, this.x, this.y);
  }
}

// exports Lables class
export default Lables;
