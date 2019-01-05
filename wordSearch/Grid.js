var rows = 5;
var cols = 5;
var gridSize = 50;

class Grid{
  constructor() {
    this.cells = [];
    for (var i = 0; i < cols; i++) {
      this.cells[i] = [];
      for (var j = 0; j < rows; j++) {
        this.cells[i].push(new Cell(i, j, 'a'));
      }
    }
  }

  show() {
    for (var row = 0; row < rows; row++) {
      for (var col = 0; col < cols; col++) {
        this.cells[row][col].show();
      }
    }
  }

  isCellAt(x,y) {
    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < cols; j++) {
        if (x == this.cells[i][j].x && y == this.cells[i][j].y) {
          return this.cells[i][j];
        }
      }
    }
    return null;
  }
}
