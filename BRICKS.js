import { Background } from "background.js";
import { Brick } from "brick.js";

const b = Background();


class Bricks extends Brick {
  constructor(bricks = []) {
    super(Brick);
    this.bricks = bricks;
    this.init();
  }

  rowsAndColumns() {
    for (let c = 0; c < this.ColumnCount; c += 1) {
      this.bricks[c] = [];
      for (let r = 0; r < this.RowCount; r += 1) {
        this.bricks[c][r] = {
          x: 0,
          y: 0,
          status: 1,
        };
      }
    }
  }

  draw() {
    for (let c = 0; c < this.ColumnCount; c += 1) {
      for (let r = 0; r < this.RowCount; r += 1) {
        if (this.bricks[c][r].status === 1) {
          const brickX = (r * this.width + this.padding) + this.offsetLeft;
          const brickY = (c * this.height + this.padding) + this.offsetTop;
          this.bricks[c][r].x = brickX;
          this.bricks[c][r].y = brickY;
          b.ctx.beginPath();
          b.ctx.rect(brickX, brickY, this.width, this.height);
          b.ctx.fill();
          b.fillStyle = this.color;
          b.ctx.fill();
          b.ctx.closePath();
        }
      }
    }
  }
}

function test() {
  const one = Bricks();
  one.draw();
}

test();
