

function make2DArray(cols, rows) {
	var arr = new Array(cols);
	for (var i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows);
	}
	return arr
}

function Cell(x, y, w) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.selected = false;
	this.value = 0;
}

Cell.prototype.show = function() {
	stroke(0);
	noFill();
	if (this.selected) {
		fill(85,170,255);
	}
	rect(this.x, this.y, this.w, this.w);
	fill(0);
	
	// textAlign(CENTER);
	if (this.value != 0){
		textSize(32);
		text(this.value, this.x + this.w / 3, this.y + this.w / 1.4)
	}

	// }
}

Cell.prototype.contains = function(x, y) {
	return (x > this.x && y > this.y && x < this.x + this.w && y < this.y + this.w);
}

function drawLines() {
	strokeWeight(5);
	// horizontal
	// console.log(grid.boxWidth);
	for (var i = 0; i < (grid.cols/grid.boxHeight)+1; i++) {
		line(offset, offset + grid.boxHeight*i*w, offset + grid.rows*w, offset + grid.boxHeight*i*w);
	}

	// vertical
	for (var i = 0; i < (grid.rows/grid.boxWidth)+1; i++) {
		line(offset + grid.boxWidth*i*w, offset, offset + grid.boxWidth*i*w, offset + grid.cols*w);
	}
	strokeWeight(1);
}