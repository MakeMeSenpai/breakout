// imports Sprite class
import Sprite from "./sprite";

// creats Sprites child class, Brick ** no 's' ! **
class Brick extends Sprite {
  // Brick's params
  constructor(x, y, width, hieght, color) {
    // Sprite's params
    super(x, y, width, hieght, color);
    this.status = 1;
  }
}

// exports our Brick class
export default Brick;
