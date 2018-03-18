var grid;
var score = 0;

function setup() {
  	createCanvas(400, 400);
	
	grid = createGrid();
	addNumber();
	addNumber();

	moveUpButton = createButton('Up');
	moveUpButton.position(143,500);
	moveUpButton.mousePressed(moveUp);

	moveDownButton = createButton('Down');
	moveDownButton.position(130,620);
	moveDownButton.mousePressed(moveDown);

	moveLeftButton = createButton('Left');
	moveLeftButton.position(65,560);
	moveLeftButton.mousePressed(moveLeft);

	moveRightButton = createButton('Right');
	moveRightButton.position(210,560);
	moveRightButton.mousePressed(moveRight);

}

function createGrid() {
	var arr = new Array(4);
	for (var i = 0; i < 4; i++) {
		arr[i] = [0,0,0,0];
	}
	return arr
}

function drawGrid() {
	var offset_x = 10;
	var offset_y = 10;
	var w = 80;
	var number;

	textAlign(CENTER, CENTER);
	textSize(30);
	for (var row = 0; row < 4; row++) {
		for (var col = 0; col < 4; col++) {

			number = grid[row][col];
			strokeWeight(2);
			noStroke();
			if (number == 0) {
				fill(199,187,171);
				rect(offset_x+(offset_x+w)*col, 3*offset_y+(offset_y+w)*row, w, w, 10);
			} else if (number == 2) {
				fill(238,226,214);
				rect(offset_x+(offset_x+w)*col, 3*offset_y+(offset_y+w)*row, w, w, 10);
				fill(103,99,86);
				text(grid[row][col],offset_x+(offset_x+w)*col+w/2,3*offset_y+(offset_y+w)*row+w/2);	
			} else if (number == 4) {
				fill(239,222,194);
				rect(offset_x+(offset_x+w)*col, 3*offset_y+(offset_y+w)*row, w, w, 10);
				fill(103,99,86);
				text(grid[row][col],offset_x+(offset_x+w)*col+w/2,3*offset_y+(offset_y+w)*row+w/2);	
			} else if (number == 8) {
				fill(249,174,106);
				rect(offset_x+(offset_x+w)*col, 3*offset_y+(offset_y+w)*row, w, w, 10);
				fill(255);
				text(grid[row][col],offset_x+(offset_x+w)*col+w/2,3*offset_y+(offset_y+w)*row+w/2);	
			} else if (number == 16) {
				fill(253,145,81);
				rect(offset_x+(offset_x+w)*col, 3*offset_y+(offset_y+w)*row, w, w, 10);
				fill(255);
				text(grid[row][col],offset_x+(offset_x+w)*col+w/2,3*offset_y+(offset_y+w)*row+w/2);	
			} else if (number == 32) {
				fill(254,123,77);
				rect(offset_x+(offset_x+w)*col, 3*offset_y+(offset_y+w)*row, w, w, 10);
				fill(255);
				text(grid[row][col],offset_x+(offset_x+w)*col+w/2,3*offset_y+(offset_y+w)*row+w/2);	
			} else if (number == 64) {
				fill(246,91,60);
				rect(offset_x+(offset_x+w)*col, 3*offset_y+(offset_y+w)*row, w, w, 10);
				fill(255);
				text(grid[row][col],offset_x+(offset_x+w)*col+w/2,3*offset_y+(offset_y+w)*row+w/2);	
			} else if (number == 128) {
				fill(232,208,119);
				rect(offset_x+(offset_x+w)*col, 3*offset_y+(offset_y+w)*row, w, w, 10);
				fill(255);
				text(grid[row][col],offset_x+(offset_x+w)*col+w/2,3*offset_y+(offset_y+w)*row+w/2);	
			} else if (number == 256) {
				fill(231,208,102);
				rect(offset_x+(offset_x+w)*col, 3*offset_y+(offset_y+w)*row, w, w, 10);
				fill(255);
				text(grid[row][col],offset_x+(offset_x+w)*col+w/2,3*offset_y+(offset_y+w)*row+w/2);	
			} else if (number == 512) {
				fill(242,192,61);
				rect(offset_x+(offset_x+w)*col, 3*offset_y+(offset_y+w)*row, w, w, 10);
				fill(255);
				text(grid[row][col],offset_x+(offset_x+w)*col+w/2,3*offset_y+(offset_y+w)*row+w/2);	
			} else if (number == 1024) {
				fill(242,189,51);
				rect(offset_x+(offset_x+w)*col, 3*offset_y+(offset_y+w)*row, w, w, 10);
				fill(255);
				text(grid[row][col],offset_x+(offset_x+w)*col+w/2,3*offset_y+(offset_y+w)*row+w/2);	
			} else if (number == 2048) {
				fill(242,182,49);
				rect(offset_x+(offset_x+w)*col, 3*offset_y+(offset_y+w)*row, w, w, 10);
				fill(255);
				text(grid[row][col],offset_x+(offset_x+w)*col+w/2,3*offset_y+(offset_y+w)*row+w/2);	
			} else if (number == 4096) {
				fill(41,39,27);
				rect(offset_x+(offset_x+w)*col, 3*offset_y+(offset_y+w)*row, w, w, 10);
				fill(255);
				text(grid[row][col],offset_x+(offset_x+w)*col+w/2,3*offset_y+(offset_y+w)*row+w/2);	
			} else if (number == 8192) {
				fill(41,39,27);
				rect(offset_x+(offset_x+w)*col, 3*offset_y+(offset_y+w)*row, w, w, 10);
				fill(255);
				text(grid[row][col],offset_x+(offset_x+w)*col+w/2,3*offset_y+(offset_y+w)*row+w/2);	
			} else if (number == 16384) {
				fill(41,39,27);
				rect(offset_x+(offset_x+w)*col, 3*offset_y+(offset_y+w)*row, w, w, 10);
				fill(255);
				text(grid[row][col],offset_x+(offset_x+w)*col+w/2,3*offset_y+(offset_y+w)*row+w/2);	
			} else if (number == 32768) {
				fill(41,39,27);
				rect(offset_x+(offset_x+w)*col, 3*offset_y+(offset_y+w)*row, w, w, 10);
				fill(255);
				text(grid[row][col],offset_x+(offset_x+w)*col+w/2,3*offset_y+(offset_y+w)*row+w/2);	
			}else {
				fill(41,39,27);
				rect(offset_x+(offset_x+w)*col, 3*offset_y+(offset_y+w)*row, w, w, 10);
				fill(255);
				text(grid[row][col],offset_x+(offset_x+w)*col+w/2,3*offset_y+(offset_y+w)*row+w/2);	
			}

			fill(0);
			// fill()
			// if (number != 0) {
			// }
		}
	}
}

function addNumber() {
	var available = [];
	for (var row = 0; row < 4; row++) {
		for (var col = 0; col < 4; col++) {
			if (grid[row][col] == 0) {
				available.push([row,col]);
			}
		}
	}
	var chance = random();
	var cell = random(available);
	if (chance < 0.9) {
		grid[cell[0]][cell[1]] = 2;
	} else {
		grid[cell[0]][cell[1]] = 4;
	}
}

function moveUp() {
	// console.log("up");
	for (var col = 0; col < 4; col++) {
		var numbers = [0, 0, 0, 0];
		var count = 0;
		for (var row = 0; row < 4; row++) {
			var number = grid[row][col];
			if (number != 0) {
				numbers[count] = number;
				count ++;
			}
		}
		var check = false;
		if (numbers[0] == numbers[1]) {
			numbers[0] = 2*numbers[0];
			numbers[1] = 0;
			score += numbers[0];
			check = true;
		} 

		if (numbers[2] == numbers[3]) {
			numbers[2] = 2*numbers[2];
			numbers[3] = 0;
			score += numbers[2];
			check = true;
		}

		if (numbers[1] == numbers[2] && !check){
			numbers[1] = 2*numbers[1];
			numbers[2] = 0;
			score += numbers[1];
		}

		var numbers2 = [0, 0, 0, 0];
		var count2 = 0;
		for (var row = 0; row < 4; row++) {
			var number = numbers[row];
			if (number != 0) {
				numbers2[count2] = number;
				count2 ++;
			}
		}
			

		for (var row = 0; row < 4; row++) {
			grid[row][col] = numbers2[row];
		}

	}
}

function moveDown() {
	// console.log("down");
	for (var col = 0; col < 4; col++) {
		var numbers = [0, 0, 0, 0];
		var count = 3;
		for (var row = 3; row >= 0; row--) {
			var number = grid[row][col];
			if (number != 0) {
				numbers[count] = number;
				count --;
			}
		}


		var check = false;
		if (numbers[2] == numbers[3]) {
			numbers[3] = 2*numbers[2];
			numbers[2] = 0;
			score += numbers[3];
			check = true;
		}

		if (numbers[0] == numbers[1]) {
			numbers[1] = 2*numbers[1];
			numbers[0] = 0;
			score += numbers[1];
			check = true;
		} 

		

		if (numbers[1] == numbers[2] && !check){
			numbers[2] = 2*numbers[2];
			numbers[1] = 0;
			score += numbers[2];
		}

		var numbers2 = [0, 0, 0, 0];
		var count2 = 3;
		for (var row = 3; row >= 0; row--) {
			var number = numbers[row];
			if (number != 0) {
				numbers2[count2] = number;
				count2 --;
			}
		}

		for (var row = 3; row >= 0; row--) {
			grid[row][col] = numbers2[row];
		}

	}
}

function moveLeft() {
	// console.log("left");
	for (var row = 0; row < 4; row++) {
		var numbers = [0, 0, 0, 0];
		var count = 0;
		for (var col = 0; col < 4; col++) {
			var number = grid[row][col];
			if (number != 0) {
				numbers[count] = number;
				count ++;
			}
		}

		var check = false;
		if (numbers[0] == numbers[1]) {
			numbers[0] = 2*numbers[0];
			numbers[1] = 0;
			score += numbers[0];
			check = true;
		} 

		if (numbers[2] == numbers[3]) {
			numbers[2] = 2*numbers[2];
			numbers[3] = 0;
			score += numbers[2];
			check = true;
		}

		if (numbers[1] == numbers[2] && !check){
			numbers[1] = 2*numbers[1];
			numbers[2] = 0;
			score += numbers[1];
		}

		var numbers2 = [0, 0, 0, 0];
		var count2 = 0;
		for (var col = 0; col < 4; col++) {
			var number = numbers[col];
			if (number != 0) {
				numbers2[count2] = number;
				count2 ++;
			}
		}

		for (var col = 0; col < 4; col++) {
			grid[row][col] = numbers2[col];
		}





	}
}

function moveRight() {
	// console.log("right");
	for (var row = 0; row < 4; row++) {
		var numbers = [0, 0, 0, 0];
		var count = 3;
		for (var col = 3; col >= 0; col--) {
			var number = grid[row][col];
			if (number != 0) {
				numbers[count] = number;
				count --;
			}
		}


		var check = false;
		if (numbers[2] == numbers[3]) {
			numbers[3] = 2*numbers[2];
			numbers[2] = 0;
			score += numbers[3];
			check = true;
		}

		if (numbers[0] == numbers[1]) {
			numbers[1] = 2*numbers[1];
			numbers[0] = 0;
			score += numbers[1];
			check = true;
		} 

		

		if (numbers[1] == numbers[2] && !check){
			numbers[2] = 2*numbers[2];
			numbers[1] = 0;
			score += numbers[2];
		}

		var numbers2 = [0, 0, 0, 0];
		var count2 = 3;
		for (var col = 3; col >= 0; col--) {
			var number = numbers[col];
			if (number != 0) {
				numbers2[count2] = number;
				count2 --;
			}
		}
		for (var col = 3; col >= 0; col--) {
			grid[row][col] = numbers2[col];
		}

	}
}

function keyPressed() {
	// console.log(keyCode);
	if (keyCode == 38) {
		moveUp();
		addNumber();
	} else if (keyCode == 40) {
		moveDown();
		addNumber();
	} else if (keyCode == 37) {
		moveLeft();
		addNumber();
	} else if (keyCode == 39) {
		moveRight();
		addNumber();
	} else if (keyCode == 82) {
		grid = createGrid();
	} else if (keyCode == 65) {
		addNumber();
	}
}

function draw() {
	background(255);

	drawGrid();

	textSize(20);
	textAlign(LEFT);
	text('Score:',12,10);
	text(score,75,10)
	// console.log('h')

}