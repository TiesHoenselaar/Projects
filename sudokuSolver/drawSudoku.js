

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
	this.tempValues = [];
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
	if (this.value != 0 && this.tempValues.length == 0){
		textSize(32);
		text(this.value, this.x + this.w / 3, this.y + this.w / 1.4)
	}

	if (this.tempValues.length != 0) {
		for (var i = 0; i < this.tempValues.length; i++) {
			textSize(12);
			number = this.tempValues[i]
			var x_offset = (number-1)%3-1;
			var y_offset = Math.floor((number-1)/3)-1;
			text(number, this.x + this.w / 2.3 + 0.3 * this.w * x_offset, this.y + this.w / 1.7 + 0.3 * this.w * y_offset)		
		}
	}
	// }
}

Cell.prototype.contains = function(x, y) {
	return (x > this.x && y > this.y && x < this.x + this.w && y < this.y + this.w);
}