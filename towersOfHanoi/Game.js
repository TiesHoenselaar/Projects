class Game{
	constructor(){
		this.pegs = [];
		this.moves = 0;
		this.gameWon = false;
		this.setupPegs();
		this.setupDisks();
	}

	setupPegs(){
		this.pegs.push(new Peg(0));
		this.pegs.push(new Peg(1));
		this.pegs.push(new Peg(2));
	}

	setupDisks(){
		this.pegs[0].disks.push(new Disk(0, 0, 400));
		this.pegs[0].disks.push(new Disk(0, 1, 300));
		this.pegs[0].disks.push(new Disk(0, 2, 200));
		this.pegs[0].disks.push(new Disk(0, 3, 100));
	}

	show() {
		fill(255);
		textSize(32);
		text('Moves: ' + String(this.moves), 10, 30);
		for (var i = 0; i < this.pegs.length; i++) {
			this.pegs[i].show();
		}
		
		if (this.gameWon) {
			fill(0, 255, 0);
			textSize(100);
			textAlign(CENTER, CENTER);
			text("You won the game!", width/2	, height/2 - 100);
			textSize(50);
			text("Click to play again", width/2	, height/2);
		}
	}

	getDiskAt(x, y) {
		for (var i = 0; i < this.pegs.length; i++) {
			for (var j = 0; j < this.pegs[i].disks.length; j++) {
				var min_x = this.pegs[i].disks[j].pixelPosition.x;
				var min_y = this.pegs[i].disks[j].pixelPosition.y - tileSize;
				var max_x = this.pegs[i].disks[j].pixelPosition.x + this.pegs[i].disks[j].size;
				var max_y = this.pegs[i].disks[j].pixelPosition.y;
				
				// print(i, min_x, max_x, min_y, max_y);
				if (x >= min_x && x <= max_x && y >= min_y && y <= max_y) {
					// print(this.disks[i]);
					return [this.pegs[i], this.pegs[i].disks[j]];
				}
            }
		}
		return [null, null]
	}

	getPegAt(x, y) {
		for (var i = 0; i < this.pegs.length; i++) {
			var min_x = this.pegs[i].pixelPosition.x;
			var min_y = this.pegs[i].pixelPosition.y - this.pegs[i].height * tileSize;
			var max_x = this.pegs[i].pixelPosition.x + tileSize;
			var max_y = this.pegs[i].pixelPosition.y;

			if (x >= min_x && x <= max_x && y >= min_y && y <= max_y) {
				return (this.pegs[i]);
            }
		}
	}

	checkIfWon() {
		if (this.pegs[0].disks.length == 0 && this.pegs[1].disks.length == 0) {
			this.gameWon = true;
		}
	}
}