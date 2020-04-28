import Sprite from "./sprite";


class Lables extends Sprite {
  constructor(x, y, color, txt, font = "16px Arial") {
    super(x, y, 0, 0, color);
    this.txt = txt;
    this.font = font;
    this.value = 0;
  }

  render(ctx) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`${this.txt} ${this.value}`, this.x, this.y);
  }
}

export default Lables;
