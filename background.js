class Background {
  constructor() {
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.color = "#0095DD";
  }
}

function test() {
  Background.color = "red";
}

test();
