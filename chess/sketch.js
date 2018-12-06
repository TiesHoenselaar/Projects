var board;
var moving = false;
var currentPiece;

var movingPiece;
var images = [];

var tileSize = 100;
function setup() {
  createCanvas(800, 800);

  for (var i = 0; i < 6; i++) {
    images.push(loadImage("sprites/white_" + i + ".png"))
    images.push(loadImage("sprites/black_" + i + ".png"))
  }

  board = new Board();
}

function draw() {
  background(100);
  showGrid();
  board.show();
}

function showGrid() {
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      if ((i + j) % 2 == 0) {
        fill(0);
      } else {
        fill(240);
      }
      rect(i * tileSize, j * tileSize, tileSize, tileSize)
    }
  }
}

function mousePressed() {
  var x = floor(mouseX / tileSize);
  var y = floor(mouseY / tileSize);
  if (!moving) {
    movingPiece = board.getPieceAt(x, y);
    if (movingPiece != null) {
      movingPiece.movingThisPiece = true;
    } else {
      return;
    }
  } else {
    if (movingPiece.canMove(x, y, board)) {
      movingPiece.move(x, y, board);
      movingPiece.movingThisPiece = false;
    } else {
      movingPiece.movingThisPiece = false;
    }
  }
  moving = !moving
}