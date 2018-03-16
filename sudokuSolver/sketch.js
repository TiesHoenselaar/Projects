// Sudoku template

var grid;
var cols = 9;
var rows = 9;
var w = 50;
var offset = 15;
var pencilSelected = false;


function setup() {
  createCanvas(800, 800);
	grid = make2DArray(cols, rows);
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			grid[i][j] = new Cell(offset + i * w, offset + j * w, w);
		}
	}

	resetButton = createButton('Reset');
	resetButton.position(500,15);
	resetButton.mousePressed(resetAllNumbers);

	pencilButton = createButton('Pencil');
	pencilButton.position(500,65);
	pencilButton.mousePressed(pencilButtonClicked);

	initializeButton = createButton('Initialize');
	initializeButton.position(500,115);
	initializeButton.mousePressed(initialize);

	solveButton = createButton('Solve');
	solveButton.position(500,165);
	solveButton.mousePressed(solveSudoku);

}

function initialize() {
	grid[0][0].value = 3;
	grid[2][0].value = 6;
	grid[3][0].value = 5;
	grid[5][0].value = 8;
	grid[6][0].value = 4;
	grid[0][1].value = 5;
	grid[1][1].value = 2;
	grid[1][2].value = 8;
	grid[2][2].value = 7;
	grid[7][2].value = 3;
	grid[8][2].value = 1;
	grid[2][3].value = 3;
	grid[4][3].value = 1;
	grid[7][3].value = 8;
	grid[0][4].value = 9;
	grid[3][4].value = 8;
	grid[4][4].value = 6;
	grid[5][4].value = 3;
	grid[8][4].value = 5;
	grid[1][5].value = 5;
	grid[4][5].value = 9;
	grid[6][5].value = 6;
	grid[0][6].value = 1;
	grid[1][6].value = 3;
	grid[6][6].value = 2;
	grid[7][6].value = 5;
	grid[7][7].value = 7;
	grid[8][7].value = 4;
	grid[2][8].value = 5;
	grid[3][8].value = 2;
	grid[5][8].value = 6;
	grid[6][8].value = 3;
}

function resetAllNumbers() {
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			grid[i][j].value = 0;
			grid[i][j].tempValues = [];
			grid[i][j].selected = false;
		}
	}
}

function pencilButtonClicked() {
	if (pencilSelected) {
		pencilSelected = false;
	} else {
		pencilSelected = true;
	}
}

function drawLines() {
	strokeWeight(5);
	// horizontal
	for (var i = 0; i < 4; i++) {
		line(offset, offset + 3*i*w, offset + 9*w, offset + 3*i*w);
	}

	// vertical
	for (var i = 0; i < 4; i++) {
		line(offset + 3*i*w, offset, offset + 3*i*w, offset + 9*w);
	}
	strokeWeight(1);
}

function mousePressed() {
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			if (grid[i][j].contains(mouseX, mouseY)) {
				grid[i][j].selected = true;
			} else {
				grid[i][j].selected = false;
			}
		}
	}
}

function keyPressed() {
	// console.log(keyCode);
	// p
	if (keyCode == 80) {
		pencilButtonClicked();
	// r
	} else if (keyCode == 82) {
		resetAllNumbers();
	// i
	} else if (keyCode == 73) {
		initialize();
	// s
	} else if (keyCode == 83) {
		solveSudoku();
	}
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			if (grid[i][j].selected) {
				// console.log(grid[i][j])
				if (keyCode >= 49 && keyCode < 58) {
					var number = keyCode - 48;
					if (!pencilSelected) {
						grid[i][j].value = number
						grid[i][j].tempValues = [];
					} else {
						var index = grid[i][j].tempValues.indexOf(number);
						if (index == -1) {
							grid[i][j].tempValues.push(number);
						} else {
							grid[i][j].tempValues.splice(index, 1);
						}
					}
				} else if (keyCode >= 97 && keyCode < 106) {
					var number = keyCode - 96;
					if (!pencilSelected) {
						grid[i][j].value = number;
						grid[i][j].tempValues = [];
					}  else {
						var index = grid[i][j].tempValues.indexOf(number);
						if (index == -1) {
							grid[i][j].tempValues.push(number);
						} else {
							grid[i][j].tempValues.splice(index, 1);
						}
					}
				// backspace or delete
				} else if (keyCode == 8 || keyCode == 46) {
					grid[i][j].value = 0;
					grid[i][j].tempValues = [];

				// escape
				} else if (keyCode == 27) {
					grid[i][j].selected = false;

				//left
				} else if (keyCode == 37) { 
					if (i > 0) {
						grid[i-1][j].selected = true;
						grid[i][j].selected = false;
					}
				// up
				} else if (keyCode == 38) {
					if (j > 0) {
						grid[i][j-1].selected = true;
						grid[i][j].selected = false;
					}
				// right
				} else if (keyCode == 39) {
					if (i < 8) {
						grid[i+1][j].selected = true;
						grid[i][j].selected = false;
					}
				// down
				} else if (keyCode == 40) {
					if (j < 8) {
						grid[i][j].selected = false;
						grid[i][j+1].selected = true;
					}
				}
			keyCode = 0;	
			}
		}
	}	
}

function draw() {
	background(255);
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			grid[i][j].show();
		}
	}
	drawLines();

	textSize(16);
	if (pencilSelected) {
		text('On', 580, 80);
	} else {
		text('Off', 580, 80);
	}

	var instructions = "Press 1-9 to insert a number\nPress I to initialize \nPress R to reset \nPress S to solve \nPress P switch between pen/pencil \nUse the arrow keys to move around \n";
	stroke(50);
	text(instructions,500,250);

}