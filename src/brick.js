import Sprite from "./sprite";

class Brick extends Sprite {
  constructor(x, y, width, hieght, color) {
    super(x, y, width, hieght, color);
    this.status = 1;
  }
}

export default Brick();
