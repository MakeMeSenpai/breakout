import Brick from "./brick";


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

  draw(ctx) {
    for (let c = 0; c < this.ColumnCount; c += 1) {
      for (let r = 0; r < this.RowCount; r += 1) {
        if (this.bricks[c][r].status === 1) {
          const brickX = (r * this.width + this.padding) + this.offsetLeft;
          const brickY = (c * this.height + this.padding) + this.offsetTop;
          this.bricks[c][r].x = brickX;
          this.bricks[c][r].y = brickY;
          ctx.beginPath();
          ctx.rect(brickX, brickY, this.width, this.height);
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
