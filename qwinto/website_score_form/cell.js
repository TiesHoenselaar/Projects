class Cell{

  constructor(x, y, color) {

    this.matrixPosition = createVector(x, y);
    this.pixelPosition = createVector(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);
    this.special = false;
    this.display = true;
    this.color = color;
    this.value = 0;
  }

  show() {
    var colors = {"red": [255, 0, 0],
              "yellow": [255, 255, 0],
              "purple": [102, 0, 255]}

    strokeWeight(2);
    fill(colors[this.color]);
    if (this.display) {
      rect(this.pixelPosition.x, this.pixelPosition.y, tileSize, tileSize);
    }

    if (this.special) {
      circle(this.pixelPosition.x + tileSize / 2, this.pixelPosition.y + tileSize / 2, tileSize / 2.5);
    }

    if (this.value) {
      fill(0);
      text(this.value, this.pixelPosition.x + tileSize / 2, this.pixelPosition.y + tileSize / 2)
    }

  }



}
