var gridSize = 50

class Cell {
  constructor(x, y, letter) {
    this.x = x;
    this.y = y;
    this.letter = letter;
    this.clicked = false;
  }

  show() {
    // Square
    fill(255);
    rect(this.x * gridSize, this.y * gridSize, gridSize, gridSize);

    // Circle if clicked
    if (this.clicked) {
      fill(0, 0, 255, 100);
      ellipse(this.x * gridSize + gridSize / 2, this.y * gridSize + gridSize / 2, gridSize / 1.5, gridSize / 1.5);
    }

    // Letter
    textAlign(CENTER, CENTER);
    fill(0);
    text(this.letter, this.x*gridSize+gridSize/2, this.y*gridSize+gridSize/2);
  }
}
