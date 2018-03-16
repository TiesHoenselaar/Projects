// Sudoku template

var sudoku;
// var cols = 9;
// var rows = 9;
var w = 50;
var offset_x = 20;
var offset_y = 130;
// var trace = [3,0,6,5,0,8,4,0,0,5,2,0,0,0,0,0,0,0,0,8,7,0,0,0,0,3,1,0,0,3,0,1,0,0,8,0,9,0,0,8,6,3,0,0,5,0,5,0,0,9,0,6,0,0,1,3,0,0,0,0,2,5,0,0,0,0,0,0,0,0,7,4,0,0,5,2,0,6,3,0,0];
// var trace2 = [0,2,0,1,6,0,0,0,0,0,0,0,11,8,0,0,0,0,10,0,0,5,2,0,0,0,6,0,12,0,1,0,0,9,0,8,0,0,0,6,0,0,0,0,5,0,7,12,12,11,0,0,0,0,0,0,0,2,10,0,0,0,0,10,0,0,0,0,0,6,1,0,0,3,0,0,2,0,7,11,4,0,0,0,0,4,5,0,0,8,0,0,6,0,12,0,6,9,1,2,0,0,0,4,11,0,8,0,10,0,0,0,0,1,0,0,0,7,0,0,1,6,9,0,0,0,0,7,0,0,3,10,0,0,0,0,0,0,0,2,12,0,6,0];

function setup() {
  	createCanvas(1000, 1000);
	
	// rows, cols, boxRows, boxCols
	// sudoku = createSudoku(12, 9, 4, 3);
	sudoku = createSudoku(9, 9, 3, 3);
	
	// initialize();
	// console.log(sudoku);

	initializeButton = createButton('Initialize');
	initializeButton.position(20,20);
	initializeButton.mousePressed(initialize);

	solveButton = createButton('Solve');
	solveButton.position(100,20);
	solveButton.mousePressed(solveSudoku);
	
	resetButton = createButton('Reset');
	resetButton.position(166,20);
	resetButton.mousePressed(resetAllNumbers);

	loadTraceButton = createButton('Load trace');
	loadTraceButton.position(235,20);
	loadTraceButton.mousePressed(loadTrace);

	updateSizeButton = createButton('Update size');
	updateSizeButton.position(330,20);
	updateSizeButton.mousePressed(updateSize);

	fill(0);
	

  	inputRows = createInput();
  	inputRows.value('12');
  	inputRows.position(80,50);

  	inputCols = createInput();
  	inputCols.value('12');
  	inputCols.position(80,75);

  	inputBoxRows = createInput();
  	inputBoxRows.value('3');
  	inputBoxRows.position(360,50);

  	inputBoxCols = createInput();
  	inputBoxCols.value('4');
  	inputBoxCols.position(360,75);

  	inputTrace = createInput();
  	inputTrace.value('[0,2,0,1,6,0,0,0,0,0,0,0,11,8,0,0,0,0,10,0,0,5,2,0,0,0,6,0,12,0,1,0,0,9,0,8,0,0,0,6,0,0,0,0,5,0,7,12,12,11,0,0,0,0,0,0,0,2,10,0,0,0,0,10,0,0,0,0,0,6,1,0,0,3,0,0,2,0,7,11,4,0,0,0,0,4,5,0,0,8,0,0,6,0,12,0,6,9,1,2,0,0,0,4,11,0,8,0,10,0,0,0,0,1,0,0,0,7,0,0,1,6,9,0,0,0,0,7,0,0,3,10,0,0,0,0,0,0,0,2,12,0,6,0]');
  	// inputTrace.value('[0,2,7,1,6,9,11,8,10,12,4,3,11,8,12,9,4,7,10,3,1,5,2,6,3,10,6,4,12,2,1,5,7,9,11,8,2,1,3,6,8,4,9,10,5,11,7,12,12,11,4,7,5,3,6,1,8,2,10,9,9,5,8,10,7,11,2,12,3,6,1,4,8,3,10,12,2,6,7,11,4,1,9,5,7,4,5,11,1,8,3,9,6,10,12,2,6,9,1,2,10,5,12,4,11,3,8,7,10,12,2,8,3,1,4,6,9,7,5,11,1,6,9,5,11,12,8,7,2,4,3,10,4,7,11,3,9,10,5,2,12,8,6,1]');
  	inputTrace.position(80,100);

}

///// CHECKED /////
function createSudoku(rows, cols, boxRows, boxCols) {
	grid = make2DArray(rows, cols);
	grid.rows = rows;
	grid.cols = cols;
	grid.boxRows = boxRows;
	grid.boxCols = boxCols;
	for (var i = 0; i < grid.rows; i++) {
		for (var j = 0; j < grid.cols; j++) {
			grid[i][j] = new Cell(i,j);
		}
	}
	return grid;
}

///// CHECKED /////
function updateSize() {
	sudoku = createSudoku(int(inputRows.value()), int(inputCols.value()), int(inputBoxRows.value()), int(inputBoxCols.value()));
}

///// CHECKED /////
function initialize() {
	sudoku[0][0].value = 3;
	sudoku[0][2].value = 6;
	sudoku[0][3].value = 5;
	sudoku[0][5].value = 8;
	sudoku[0][6].value = 4;
	sudoku[1][0].value = 5;
	sudoku[1][1].value = 2;
	sudoku[2][1].value = 8;
	sudoku[2][2].value = 7;
	sudoku[2][7].value = 3;
	sudoku[2][8].value = 1;
	sudoku[3][2].value = 3;
	sudoku[3][4].value = 1;
	sudoku[3][7].value = 8;
	sudoku[4][0].value = 9;
	sudoku[4][3].value = 8;
	sudoku[4][4].value = 6;
	sudoku[4][5].value = 3;
	sudoku[4][8].value = 5;
	sudoku[5][1].value = 5;
	sudoku[5][4].value = 9;
	sudoku[5][6].value = 6;
	sudoku[6][0].value = 1;
	sudoku[6][1].value = 3;
	sudoku[6][6].value = 2;
	sudoku[6][7].value = 5;
	sudoku[7][7].value = 7;
	sudoku[7][8].value = 4;
	sudoku[8][2].value = 5;
	sudoku[8][3].value = 2;
	sudoku[8][5].value = 6;
	sudoku[8][6].value = 3;
}

function loadTrace() {

	var traceInput = inputTrace.value();
	trace = JSON.parse(traceInput);
	if (trace.length == sudoku.cols * sudoku.rows) {
		for (var i = 0; i < sudoku.rows; i++) {
			for (var j = 0; j < sudoku.cols; j++) {
				sudoku[i][j].value = trace[i*sudoku.rows + j];
			}
		}
	}
}

///// CHECKED /////
function resetAllNumbers() {
	for (var i = 0; i < sudoku.rows; i++) {
		for (var j = 0; j < sudoku.cols; j++) {
			sudoku[i][j].value = 0;
			sudoku[i][j].selected = false;
		}
	}
}

///// CHECKED /////
function mousePressed() {
	for (var i = 0; i < sudoku.rows; i++) {
		for (var j = 0; j < sudoku.cols; j++) {
			if (sudoku[i][j].contains(mouseX, mouseY)) {
				sudoku[i][j].selected = true;
			} else {
				sudoku[i][j].selected = false;
			}
		}
	}
}

///// CHECKED /////
function keyPressed() {
	// console.log(keyCode);
	// r
	if (keyCode == 82) {
		resetAllNumbers();
	// i
	} else if (keyCode == 73) {
		initialize();
	// l
	} else if (keyCode == 76) {
		loadTrace();
	// s
	} else if (keyCode == 83) {
		solveSudoku();
	// u
	} else if (keyCode == 85) {
		updateSize();
	}
	for (var i = 0; i < sudoku.rows; i++) {
		for (var j = 0; j < sudoku.cols; j++) {
			if (sudoku[i][j].selected) {
				if (keyCode >= 49 && keyCode < 58) {
					var number = keyCode - 48;
					if (sudoku[i][j].value == 1 && sudoku.boxRows*sudoku.boxCols >= 10) {
						number += 10;
					}
					sudoku[i][j].value = number
				} else if (keyCode >= 97 && keyCode < 106) {
					var number = keyCode - 96;
					if (sudoku[i][j].value == 1 && sudoku.boxRows*sudoku.boxCols >= 10) {
						number += 10;
					}
					sudoku[i][j].value = number;
				// backspace or delete
				} else if (keyCode == 8 || keyCode == 46) {
					sudoku[i][j].value = 0;

				// escape
				} else if (keyCode == 27) {
					sudoku[i][j].selected = false;

				//left
				} else if (keyCode == 37) { 
					if (j > 0) {
						sudoku[i][j-1].selected = true;
						sudoku[i][j].selected = false;
					}
				// up
				} else if (keyCode == 38) {
					if (i > 0) {
						sudoku[i-1][j].selected = true;
						sudoku[i][j].selected = false;
					}
				// right
				} else if (keyCode == 39) {
					if (j < sudoku.cols-1) {
						sudoku[i][j+1].selected = true;
						sudoku[i][j].selected = false;
					}
				// down
				} else if (keyCode == 40) {
					if (i < sudoku.rows-1) {
						sudoku[i+1][j].selected = true;
						sudoku[i][j].selected = false;
					}
				}
			keyCode = 0;	
			}
		}
	}	
}

function draw() {
	background(255);

	drawSudoku(sudoku);

	// 	}
	// }
	// drawLines();
	textSize(12);
	textAlign(RIGHT, TOP);
	text('Rows:', 70, 55);
	text('Columns:', 70, 80);
	text('Trace:', 70, 105);
	text('Box rows:', 350, 55);
	text('Box columns:', 350, 80);
	// textSize(16);
	// var instructions = "Press 1-9 to insert a number\nPress I to initialize \nPress R to reset \nPress S to solve \nPress P switch between pen/pencil \nUse the arrow keys to move around \n";
	// text(instructions,700,485);

}