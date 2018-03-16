// Sudoku template

var grid;
// var cols = 9;
// var rows = 9;
var w = 50;
var offset = 15;


function setup() {
  	createCanvas(1000, 1000);
	
	grid = createSudoku(9, 9);

	resetButton = createButton('Reset');
	resetButton.position(700,15);
	resetButton.mousePressed(resetAllNumbers);

	initializeButton = createButton('Initialize');
	initializeButton.position(700,115);
	initializeButton.mousePressed(initialize);

	solveButton = createButton('Solve');
	solveButton.position(700,165);
	solveButton.mousePressed(solveSudoku);

	updateSizeButton = createButton('Update size');
	updateSizeButton.position(700,215);
	updateSizeButton.mousePressed(updateSize);

	// updateSize();

  	inputRows = createInput();
  	inputRows.value('9');
  	inputRows.position(700,285);

  	inputCols = createInput();
  	inputCols.value('9');
  	inputCols.position(700,315);

  	inputBoxWidth = createInput();
  	inputBoxWidth.value('3');
  	inputBoxWidth.position(700,345);

  	inputBoxHeight = createInput();
  	inputBoxHeight.value('3');
  	inputBoxHeight.position(700,375);

}

function createSudoku(rows=3, cols=3, boxWidth=3, boxHeight=3) {
	grid = make2DArray(rows, cols);
	grid.rows = rows;
	grid.cols = cols;
	grid.boxWidth = boxWidth;
	grid.boxHeight = boxHeight;
	for (var i = 0; i < grid.rows; i++) {
		for (var j = 0; j < grid.cols; j++) {
			grid[i][j] = new Cell(offset + i * w, offset + j * w, w);
		}
	}
	return grid;
}

function updateSize() {
	// var columns = 12;

	//cols rows
	// console.log(int(inputCols.value()));
	grid = createSudoku(int(inputCols.value()), int(inputRows.value()), int(inputBoxWidth.value()), int(inputBoxHeight.value()));
	// console.log(grid.cols)
	// console.log(grid2);
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
	for (var i = 0; i < grid.rows; i++) {
		for (var j = 0; j < grid.cols; j++) {
			grid[i][j].value = 0;
			grid[i][j].selected = false;
		}
	}
}

function mousePressed() {
	for (var i = 0; i < grid.rows; i++) {
		for (var j = 0; j < grid.cols; j++) {
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
	// r
	if (keyCode == 82) {
		resetAllNumbers();
	// i
	} else if (keyCode == 73) {
		initialize();
	// s
	} else if (keyCode == 83) {
		solveSudoku();
	// u
	} else if (keyCode == 85) {
		updateSize();
	}
	for (var i = 0; i < grid.rows; i++) {
		for (var j = 0; j < grid.cols; j++) {
			if (grid[i][j].selected) {
				// console.log(grid[i][j])
				if (keyCode >= 49 && keyCode < 58) {
					var number = keyCode - 48;
					grid[i][j].value = number
				} else if (keyCode >= 97 && keyCode < 106) {
					var number = keyCode - 96;
					grid[i][j].value = number;
				// backspace or delete
				} else if (keyCode == 8 || keyCode == 46) {
					grid[i][j].value = 0;

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
					if (i < grid.rows-1) {
						grid[i+1][j].selected = true;
						grid[i][j].selected = false;
					}
				// down
				} else if (keyCode == 40) {
					if (j < grid.cols-1) {
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
	for (var i = 0; i < grid.rows; i++) {
		for (var j = 0; j < grid.cols; j++) {
			grid[i][j].show();
		}
	}
	drawLines();

	textSize(16);
	var instructions = "Press 1-9 to insert a number\nPress I to initialize \nPress R to reset \nPress S to solve \nPress P switch between pen/pencil \nUse the arrow keys to move around \n";
	text(instructions,700,485);

}