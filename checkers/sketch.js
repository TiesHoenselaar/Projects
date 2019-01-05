var board;
var moving = false;
var currentPiece;
var movingPiece;
var whitesMove = true;

var tileSize = 100;
function setup() {
  createCanvas(1000, 1000);
  board = new Board();
}

function draw() {
  background(100);
  showGrid();
  board.show();
}

function showGrid() {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      if ((i + j) % 2 == 0) {
        fill(249, 223, 172);
      } else {
        fill(119, 85, 21);
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
    // var attacked = false;

	print(movingPiece.mustAttack(board));
    if (movingPiece.mustAttack(board)) {
		attackingPiece = movingPiece.canAttack(x, y, board);
      if (attackingPiece != null && movingPiece.white == whitesMove) {
        print('attack');
        movingPiece.move(x, y, board);
        attackingPiece.taken = true;
        whitesMove = !whitesMove;
        movingPiece.movingThisPiece = false;
      }
    } else if (movingPiece.canMove(x, y, board) && movingPiece.white == whitesMove) {
      print('move');
      movingPiece.move(x, y, board);
      whitesMove = !whitesMove;
      movingPiece.movingThisPiece = false;
	} else {
		print('cancel');
		movingPiece.movingThisPiece = false;
	}
	movingPiece.movingThisPiece = false;
  }
  moving = !moving
}