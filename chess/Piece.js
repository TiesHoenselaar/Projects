class Piece {
    constructor(x, y, isWhite, letter) {
        this.matrixPosition = createVector(x, y);
        this.pixelPosition = createVector(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);

        this.taken = false;
        this.white = isWhite;
        this.letter = letter;
        this.movingThisPiece = false;
        this.value = 0;


    }


    show() {
        imageMode(CENTER);
        if (!this.taken) {
            textSize(40);
            strokeWeight(5);
            if (this.white) {
                fill(255);
                stroke(0);
            } else {
                fill(30);
                stroke(255);
            }
            textAlign(CENTER, CENTER);
            if (this.movingThisPiece) {

                var movesPossible = this.possibleMoves(board);
                fill(0, 0, 255, 127);
                for (var i = 0; i < movesPossible.length; i++) {
                    ellipse(movesPossible[i].x * tileSize + tileSize / 2, movesPossible[i].y * tileSize + tileSize / 2, tileSize, tileSize)
                }


                if (this.white) {
                    fill(255);
                    stroke(0);
                } else {
                    fill(30);
                    stroke(255);
                }
                text(this.letter, mouseX, mouseY)
                image(this.pic, mouseX, mouseY, tileSize * 1.5, tileSize * 1.5);
            } else {
                text(this.letter, this.pixelPosition.x, this.pixelPosition.y)
                image(this.pic, this.pixelPosition.x, this.pixelPosition.y, tileSize, tileSize);
            }
        }
    }

    withinBounds(x, y) {

        if (x >= 0 && y >= 0 && x < 8 && y < 8) {
            return true;
        }
        return false;

    }

    move(x, y, board) {
        var attackingPiece = board.getPieceAt(x, y);
        if (attackingPiece != null) {
            attackingPiece.taken = true;
        }

        this.matrixPosition = createVector(x, y);
        this.pixelPosition = createVector(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);
    }

    attackingAllies(x, y, board) {
        var attackingPiece = board.getPieceAt(x, y);
        if (attackingPiece != null) {
            if (attackingPiece.white == this.white) {
                return true;
            }
        }
        return false;
    }

    canMove(x, y, board) {
        if (!this.withinBounds(x, y)) {
            return false;
        }
        return true;
    }

    moveThroughPieces(x, y, board) {
        var stepDirectionX = x - this.matrixPosition.x;
        if (stepDirectionX > 0) {
            stepDirectionX = 1;
        } else if (stepDirectionX < 0) {
            stepDirectionX = -1;
        }
        var stepDirectionY = y - this.matrixPosition.y;
        if (stepDirectionY > 0) {
            stepDirectionY = 1;
        } else if (stepDirectionY < 0) {
            stepDirectionY = -1;
        }

        var tempPos = createVector(this.matrixPosition.x, this.matrixPosition.y);
        tempPos.x += stepDirectionX;
        tempPos.y += stepDirectionY;
        while (tempPos.x != x || tempPos.y != y) {

            if (board.getPieceAt(tempPos.x, tempPos.y) != null) {
                return true;
            }
            tempPos.x += stepDirectionX;
            tempPos.y += stepDirectionY;
        }

        return false;
    }

}

class King extends Piece {
    constructor(x, y, isWhite) {
        super(x, y, isWhite);
        this.letter = "K";
        this.value = 99;

        if (isWhite) {
            this.pic = images[0];
        } else {
            this.pic = images[1];
        }
    }

    canMove(x, y) {
        if (!this.withinBounds(x, y)) {
            return false;
        }

        if (this.attackingAllies(x, y, board)) {
            return false;
        }

        if (abs(x - this.matrixPosition.x) <= 1 && abs(y - this.matrixPosition.y) <= 1) {
            return true;
        }
        return false;
    }

    possibleMoves() {
        var moves = [];
        for (var i = -1; i < 2; i++) {
            for (var j = -1; j < 2; j++) {
                var x = this.matrixPosition.x + i;
                var y = this.matrixPosition.y + j;

                if (this.withinBounds(x, y)) {
                    if (i != 0 || j != 0) {
                        if (!this.attackingAllies(x, y, board)) {
                            moves.push(createVector(x, y));
                        }
                    }
                }
            }
        }
        return moves;
    }
}

class Queen extends Piece {
    constructor(x, y, isWhite) {
        super(x, y, isWhite);
        this.letter = "Q";
        this.value = 9;
        if (isWhite) {
            this.pic = images[2];
        } else {
            this.pic = images[3];
        }
    }

    canMove(x, y) {
        if (!this.withinBounds(x, y)) {
            return false;
        }

        if (this.attackingAllies(x, y, board)) {
            return false;
        }

        // Horizontal or vertical
        if (x == this.matrixPosition.x || y == this.matrixPosition.y) {
            if (this.moveThroughPieces(x, y, board)) {
                return false;
            }
            return true;
        }

        // Diagonal
        if (abs(x - this.matrixPosition.x) == abs(y - this.matrixPosition.y)) {
            if (this.moveThroughPieces(x, y, board)) {
                return false;
            }
            return true;
        }
        return false;
    }

    possibleMoves(board) {
        var moves = [];

        // Horizontal
        for (var i = 0; i < 8; i++) {
            var x = i;
            var y = this.matrixPosition.y;
            if (x != this.matrixPosition.x) {
                if (!this.attackingAllies(x, y, board)) {
                    if (!this.moveThroughPieces(x, y, board)) {
                        moves.push(createVector(x, y));
                    }
                }
            }
        }

        // Vertical
        for (var i = 0; i < 8; i++) {
            var x = this.matrixPosition.x;
            var y = i;
            if (y != this.matrixPosition.y) {
                if (!this.attackingAllies(x, y, board)) {
                    if (!this.moveThroughPieces(x, y, board)) {
                        moves.push(createVector(x, y));
                    }
                }
            }
        }

        // Diagonal 1
        for (var i = 0; i < 8; i++) {
            var x = i;
            var y = this.matrixPosition.y - (this.matrixPosition.x - i);
            if (x != this.matrixPosition.x) {
                if (this.withinBounds(x, y)) {
                    if (!this.attackingAllies(x, y, board)) {
                        if (!this.moveThroughPieces(x, y, board)) {
                            moves.push(createVector(x, y));
                        }
                    }
                }
            }
        }

        // Diagonal 2
        for (var i = 0; i < 8; i++) {
            var x = this.matrixPosition.x + (this.matrixPosition.y - i);
            var y = i;
            if (x != this.matrixPosition.x) {
                if (this.withinBounds(x, y)) {
                    if (!this.attackingAllies(x, y, board)) {
                        if (!this.moveThroughPieces(x, y, board)) {
                            moves.push(createVector(x, y));
                        }
                    }
                }
            }
        }
        return moves;
    }
}

class Rook extends Piece {
    constructor(x, y, isWhite) {
        super(x, y, isWhite);
        this.letter = "R";
        this.value = 5;
        if (isWhite) {
            this.pic = images[4];
        } else {
            this.pic = images[5];
        }
    }

    canMove(x, y, board) {
        if (!this.withinBounds(x, y)) {
            return false;
        }

        if (this.attackingAllies(x, y, board)) {
            return false;
        }

        if (x == this.matrixPosition.x || y == this.matrixPosition.y) {
            if (this.moveThroughPieces(x, y, board)) {
                return false;
            }
            return true;
        }
        return false;
    }

    possibleMoves(board) {
        var moves = [];

        // Horizontal
        for (var i = 0; i < 8; i++) {
            var x = i;
            var y = this.matrixPosition.y;

            if (x != this.matrixPosition.x) {
                if (!this.attackingAllies(x, y, board)) {
                    if (!this.moveThroughPieces(x, y, board)) {
                        moves.push(createVector(x, y));
                    }
                }
            }
        }

        // Vertical
        for (var i = 0; i < 8; i++) {
            var x = this.matrixPosition.x;
            var y = i;

            if (y != this.matrixPosition.y) {
                if (!this.attackingAllies(x, y, board)) {
                    if (!this.moveThroughPieces(x, y, board)) {
                        moves.push(createVector(x, y));
                    }
                }
            }
        }

        return moves;
    }
}

class Bishop extends Piece {
    constructor(x, y, isWhite) {
        super(x, y, isWhite);
        this.letter = "B";
        this.value = 3;
        if (isWhite) {
            this.pic = images[6];
        } else {
            this.pic = images[7];
        }
    }

    canMove(x, y, board) {
        if (!this.withinBounds(x, y)) {
            return false;
        }

        if (this.attackingAllies(x, y, board)) {
            return false;
        }

        if (abs(x - this.matrixPosition.x) == abs(y - this.matrixPosition.y)) {
            if (this.moveThroughPieces(x, y, board)) {
                return false;
            }
            return true;
        }
        return false;
    }

    possibleMoves(board) {
        var moves = [];

        for (var i = 0; i < 8; i++) {
            var x = i;
            var y = this.matrixPosition.y - (this.matrixPosition.x - i);
            if (x != this.matrixPosition.x) {
                if (this.withinBounds(x, y)) {
                    if (!this.attackingAllies(x, y, board)) {
                        if (!this.moveThroughPieces(x, y, board)) {
                            moves.push(createVector(x, y));
                        }
                    }
                }
            }
        }

        for (var i = 0; i < 8; i++) {
            var x = this.matrixPosition.x + (this.matrixPosition.y - i);
            var y = i;
            if (x != this.matrixPosition.x) {
                if (this.withinBounds(x, y)) {
                    if (!this.attackingAllies(x, y, board)) {
                        if (!this.moveThroughPieces(x, y, board)) {
                            moves.push(createVector(x, y));
                        }
                    }
                }
            }
        }
    return moves;
    }
}

class Knight extends Piece {
    constructor(x, y, isWhite) {
        super(x, y, isWhite);
        this.letter = "Kn";
        this.value = 3;
        if (isWhite) {
            this.pic = images[8];
        } else {
            this.pic = images[9];
        }
    }

    canMove(x, y, board) {
        if (!this.withinBounds) {
            return false;
        }

        if (this.attackingAllies(x, y, board)) {
            return false;
        }

        if ((abs(x - this.matrixPosition.x) == 2 && abs(y - this.matrixPosition.y) == 1) || (abs(x - this.matrixPosition.x) == 1 && abs(y - this.matrixPosition.y) == 2)) {
            return true;

        }
    return false;
    }

    possibleMoves(board) {
        var moves = [];

        for (var i = -2; i < 3; i += 4) {
            for (var j = -1; j < 2; j += 2) {
                var x = this.matrixPosition.x + i;
                var y = this.matrixPosition.y + j;
                if (!this.attackingAllies(x, y, board)) {
                    if (this.withinBounds(x, y)) {
                        moves.push(createVector(x, y));
                    }
                }
            }
        }

        for (var i = -1; i < 2; i += 2) {
            for (var j = -2; j < 3; j += 4) {
                var x = this.matrixPosition.x + i;
                var y = this.matrixPosition.y + j;
                if (!this.attackingAllies(x, y, board)) {
                    if (this.withinBounds(x, y)) {
                        moves.push(createVector(x, y));
                    }
                }
            }
        }

        return moves;
    }


}

class Pawn extends Piece {
    constructor(x, y, isWhite) {
        super(x, y, isWhite);
        this.letter = "P";
        this.firstTurn = true;
        if (isWhite) {
            this.pic = images[10];
        } else {
            this.pic = images[11];
        }
        this.value = 1
    }

    canMove(x, y, board) {
        if (!this.withinBounds(x, y)) {
            return false;
        }

        if (this.attackingAllies(x, y, board)) {
            return false;
        }

        var attackingPiece = board.getPieceAt(x, y);
        if (attackingPiece) {
            if (abs(x - this.matrixPosition.x) == abs(y - this.matrixPosition.y) && ((this.white && (y - this.matrixPosition.y) == -1) || (!this.white && (y - this.matrixPosition.y) == 1))) {
                this.firstTurn = false;
                return true;
            }
            return false;
        }

        if (x != this.matrixPosition.x) {
            return false;
        }

        if ((this.white && y - this.matrixPosition.y == -1) || (!this.white && y - this.matrixPosition.y == 1)) {
            this.firstTurn = true;
            return true;
        }

        if (this.firstTurn && ((this.white && y - this.matrixPosition.y == -2) || (!this.white && y - this.matrixPosition.y == 2))) {
            if (this.moveThroughPieces(x, y, board)) {
                return false;
            }

            this.firstTurn = false
            return true;
        }
        return false;
    }


    possibleMoves(board) {
        var moves = [];

        for (var i = -1; i < 2; i += 2) {
            var x = this.matrixPosition.x + i;
            if (this.white) {
                var y = this.matrixPosition.y - 1;
            } else {
                var y = this.matrixPosition.y + 1;
            }

            var attackingPiece = board.getPieceAt(x, y);
            if (attackingPiece) {
                if (!this.attackingAllies(x, y, board)) {
                    moves.push(createVector(x, y));
                }
            }
        }

        var x = this.matrixPosition.x;
        if (this.white) {
            var y = this.matrixPosition.y - 1;
        } else {
            var y = this.matrixPosition.y + 1;
        }

        if (!board.isPieceAt(x, y) && this.withinBounds(x, y)) {
            moves.push(createVector(x, y));
        }

        // First turn
        if (this.firstTurn) {

            if (this.white) {
                var y = this.matrixPosition.y - 2;
            } else {
                var y = this.matrixPosition.y + 2;
            }
            if (!board.isPieceAt(x, y) && this.withinBounds(x, y)) {
                if (!this.moveThroughPieces(x, y, board)) {
                    moves.push(createVector(x, y));
                }
            }
        }

        return moves;

    }

    move(x, y, board) {
        var attackingPiece = board.getPieceAt(x, y);
        if (attackingPiece != null) {
            attackingPiece.taken = true;
        }
        this.matrixPosition = createVector(x, y);
        this.pixelPosition = createVector(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);
        this.firstTurn = false;
    }
}

