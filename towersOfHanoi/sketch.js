var moving = false;
var movingDisk;
var currentPeg;
var nextPeg;
var tileSize = 50;

function setup() {
	createCanvas(1400, 800);
	game = new Game();
}

function draw() {
	background(100);
	game.show();
}

function mousePressed() {
	if (!game.gameWon) {
		if (!moving) {
			[currentPeg, movingDisk] = game.getDiskAt(mouseX, mouseY);
			if (movingDisk != null && movingDisk == currentPeg.disks[currentPeg.disks.length - 1]) {
				movingDisk.movingThisDisk = true;
			} else {
				return;
			}
		} else {
			nextPeg = game.getPegAt(mouseX, mouseY);
			if (nextPeg != null) {
				if (nextPeg.disks.length == 0 || nextPeg.disks[nextPeg.disks.length - 1].size > movingDisk.size) {
					currentPeg.disks.splice(-1);
					nextPeg.disks.push(movingDisk);
					movingDisk.move(nextPeg.pixelPosition.x + tileSize / 2 - movingDisk.size / 2, height - (nextPeg.disks.length - 1) * tileSize);
					game.moves += 1;
					movingDisk.movingThisDisk = false;
				} else {
					movingDisk.movingThisDisk = false;
				}
			} else {
				movingDisk.movingThisDisk = false;
			}
		}
		moving = !moving
	} else {
		game = new Game();
	}

	game.checkIfWon();
}