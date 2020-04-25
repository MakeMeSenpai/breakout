// class Brick {
//   constructor(width = 75, height = 20, padding = 10, offsetTop = 30,
//     offsetLeft = 30, rowCount = 5, columnCount = 3) {
//     this.width = width;
//     this.height = height;
//     this.padding = padding;
//     this.offsetTop = offsetTop;
//     this.offsetLeft = offsetLeft;
//     this.rowCount = rowCount;
//     this.columnCount = columnCount;
//   }
// }

class Brick {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.status = 1;
  }
}

export default Brick;
