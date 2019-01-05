class Board{
	constructor(){
		this.whitePieces = [];
		this.blackPieces = [];
		this.setupPieces();
	}

	setupPieces(){
		this.blackPieces.push(new Normal_piece(1,0,false));
		this.blackPieces.push(new Normal_piece(3,0,false));
		this.blackPieces.push(new Normal_piece(5,0,false));
		this.blackPieces.push(new Normal_piece(7,0,false));
		this.blackPieces.push(new Normal_piece(9,0,false));
		
		this.blackPieces.push(new Normal_piece(0,1,false));
		this.blackPieces.push(new Normal_piece(2,1,false));
		this.blackPieces.push(new Normal_piece(4,1,false));
		this.blackPieces.push(new Normal_piece(6,1,false));
		this.blackPieces.push(new Normal_piece(8,1,false));

		this.blackPieces.push(new Normal_piece(1,2,false));
		this.blackPieces.push(new Normal_piece(3,2,false));
		this.blackPieces.push(new Normal_piece(5,2,false));
		this.blackPieces.push(new Normal_piece(7,2,false));
		this.blackPieces.push(new Normal_piece(9,2,false));
		
		this.blackPieces.push(new Normal_piece(0,3,false));
		this.blackPieces.push(new Normal_piece(2,3,false));
		this.blackPieces.push(new Normal_piece(4,3,false));
		this.blackPieces.push(new Normal_piece(6,3,false));
		this.blackPieces.push(new Normal_piece(8,3,false));

		this.whitePieces.push(new Normal_piece(1,6,true));
		this.whitePieces.push(new Normal_piece(3,6,true));
		this.whitePieces.push(new Normal_piece(5,6,true));
		this.whitePieces.push(new Normal_piece(7,6,true));
		this.whitePieces.push(new Normal_piece(9,6,true));
		
		this.whitePieces.push(new Normal_piece(0,7,true));
		this.whitePieces.push(new Normal_piece(2,7,true));
		this.whitePieces.push(new Normal_piece(4,7,true));
		this.whitePieces.push(new Normal_piece(6,7,true));
		this.whitePieces.push(new Normal_piece(8,7,true));

		this.whitePieces.push(new Normal_piece(1,8,true));
		this.whitePieces.push(new Normal_piece(3,8,true));
		this.whitePieces.push(new Normal_piece(5,8,true));
		this.whitePieces.push(new Normal_piece(7,8,true));
		this.whitePieces.push(new Normal_piece(9,8,true));
		
		this.whitePieces.push(new Normal_piece(0,9,true));
		this.whitePieces.push(new Normal_piece(2,9,true));
		this.whitePieces.push(new Normal_piece(4,9,true));
		this.whitePieces.push(new Normal_piece(6,9,true));
		this.whitePieces.push(new Normal_piece(8,9,true));
	}

	show(){
		for (var i = 0; i < this.whitePieces.length; i++) {
			this.whitePieces[i].show();
        }
        for (var i = 0; i < this.blackPieces.length; i++) {
			this.blackPieces[i].show();
		}
    }
    
    isPieceAt(x,y){
        for (var i = 0; i < this.whitePieces.length; i++) {
            if(!this.whitePieces[i].taken && this.whitePieces[i].matrixPosition.x == x && this.whitePieces[i].matrixPosition.y == y) {
                return true;
            }
        }
        for (var i = 0; i < this.blackPieces.length; i++) {
            if(!this.whitePieces[i].taken && this.blackPieces[i].matrixPosition.x == x && this.blackPieces[i].matrixPosition.y == y) {
                return true;
            }
        }
        return false;
    }

    getPieceAt(x, y){
        for (var i = 0; i < this.whitePieces.length; i++) {
            if(!this.whitePieces[i].taken && this.whitePieces[i].matrixPosition.x == x && this.whitePieces[i].matrixPosition.y == y) {
                return this.whitePieces[i];
            }
        }
        for (var i = 0; i < this.blackPieces.length; i++) {
            if(!this.blackPieces[i].taken && this.blackPieces[i].matrixPosition.x == x && this.blackPieces[i].matrixPosition.y == y) {
                return this.blackPieces[i];
            }
        }
        return null;
    }
}