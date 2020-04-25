import Brick from "./brick";


class Bricks extends Brick {
  constructor(bricks = []) {
    super(Brick);
    this.bricks = bricks;
    this.init();
  }

  initialize() {
    for (let c = 0; c < this.ColumnCount; c += 1) {
      this.bricks[c] = [];
      for (let r = 0; r < this.RowCount; r += 1) {
        this.bricks[c][r] = new Brick();
      }
    }
  }

  draw(ctx) {
    for (let c = 0; c < this.ColumnCount; c += 1) {
      for (let r = 0; r < this.RowCount; r += 1) {
        const brick = this.bricks[c][r]
        if (brick.status === 1) {
          const brick.x = (r * this.width + this.padding) + this.offsetLeft;
          const brick.y = (c * this.height + this.padding) + this.offsetTop;
          this.bricks[c][r].x = brick.x;
          this.bricks[c][r].y = brick.y;
          ctx.beginPath();
          ctx.rect(brick.x, brick.y, this.width, this.height);
          ctx.fill();
          ctx.fillStyle = this.color;
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }
}

export default Bricks();
