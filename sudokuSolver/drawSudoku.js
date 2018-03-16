///// CHECKED /////
function drawSudoku(sudoku){
	for (var i = 0; i < sudoku.rows; i++) {
		for (var j = 0; j < sudoku.cols; j++) {
			sudoku[i][j].show();
		}
	}

	drawLines();
}

///// CHECKED /////
function make2DArray(rows, cols) {
	var arr = new Array(rows);
	for (var i = 0; i < rows; i++) {
		arr[i] = new Array(cols);
	}
	return arr
}

///// CHECKED /////
function Cell(row, col) {
	this.selected = false;
	this.value = 0;
	this.x = offset_x + w * col;
	this.y = offset_y + w * row;
	this.w = w;
}

///// CHECKED /////
Cell.prototype.show = function() {
	stroke(0);
	noFill();
	if (this.selected) {
		fill(85,170,255);
	}
	rect(this.x, this.y, this.w, this.w);

	fill(0);
	textAlign(CENTER, CENTER);
	if (this.value != 0) {
		textSize(32);
		text(this.value, this.x + this.w / 2, this.y + this.w / 2);
	}
}

///// CHECKED /////
Cell.prototype.contains = function(x, y) {
	return (x > this.x && y > this.y && x < this.x + this.w && y < this.y + this.w);
}

///// CHECKED /////
function drawLines() {
	strokeWeight(5);
	// horizontal lines
	for (var i = 0; i < (sudoku.rows/sudoku.boxRows)+1; i++) {		
		line(offset_x, offset_y + sudoku.boxRows*i*w, offset_x + sudoku.cols*w, offset_y + sudoku.boxRows*i*w);
	}

	// vertical lines
	for (var i = 0; i < (grid.cols/grid.boxCols)+1; i++) {
		line(offset_x + sudoku.boxCols*i*w, offset_y, offset_x + sudoku.boxCols*i*w, offset_y + sudoku.rows*w);
	}
	strokeWeight(1);
}