// import our Brick class
import Brick from "./brick";

// creates our Bricks class ***remember the 's'***
class Bricks {
  constructor(cols, rows, width, height, padding, OffsetTop, OffsetLeft, color) {
    this.cols = cols;
    this.rows = rows;
    this.bricks = [];
    this.width = width;
    this.height = height;
    this.padding = padding;
    this.OffsetLeft = OffsetLeft;
    this.OffsetTop = OffsetTop;
    this.color = color;

    this.init();
  }

  // orients our new bricks in their respective positions
  init() {
    for (let c = 0; c < this.cols; c += 1) {
      this.bricks[c] = [];
      for (let r = 0; r < this.rows; r += 1) {
        const brickX = (c * (this.width + this.padding)) + this.OffsetLeft;
        const brickY = (r * (this.height + this.padding)) + this.OffsetTop;
        if (c % 2 === 0) {
          this.bricks[c][r] = new Brick(brickX, brickY, this.width + (c * 2.5),
            this.height + (r * 2.5), this.color);
        } else if (r % 2 === 0) {
          this.bricks[c][r] = new Brick(brickX, brickY, this.width, this.height, "pink");
        } else {
          this.bricks[c][r] = new Brick(brickX, brickY, this.width, this.height, "yellow");
        }
      }
    }
  }

  // draws our bricks
  render(ctx) {
    for (let c = 0; c < this.cols; c += 1) {
      for (let r = 0; r < this.rows; r += 1) {
        const brick = this.bricks[c][r];
        if (brick.status === 1) {
          brick.render(ctx);
        }
      }
    }
  }
}

// exports Bricks class 
export default Bricks;
