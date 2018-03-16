function findEmptyCell(grid) {
	var l = [-1, -1];
	for (var col = 0; col < 9; col++) {
		for (var row = 0; row < 9; row++) {
			if (grid[row][col].value == 0) {
				return [col, row];
			}
		}
	}
	return false;
}

function usedInRow(grid, row, num) {
	for (var col = 0; col < 9; col++) {
		if (grid[col][row].value == num) {
			return true;
		}
	}
	return false;
}

function usedInCol(grid, col, num) {
	for (var row = 0; row < 9; row++) {
		if (grid[col][row].value == num) {
			return true;
		}
	}
	return false;
}

function usedInBox(grid, row, col, num) {
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			if (grid[col+i][row+j].value == num) {
				return true;
			}
		}
	}
	return false;
}

function safeLocation(grid, row, col, num) {
	var r1 = usedInRow(grid, row, num);
	var r2 = usedInCol(grid, col, num);
	var r3 = usedInBox(grid, row-row%3, col-col%3, num);
	// console.log(row,col,num);
	// console.log(r1,r2,r3);
	return (!r1 && !r2 && !r3)
}

function consolePrint(grid){
	for (var i = 0; i < 9; i ++) {
		console.log(grid[0][i].value, grid[1][i].value, grid[2][i].value, grid[3][i].value, grid[4][i].value, grid[5][i].value, grid[6][i].value, grid[7][i].value, grid[8][i].value );
	}
}


function solveSudoku(row=0, col=0) {
	// var l = findEmptyCell(grid);

	// console.log(grid);

	if (findEmptyCell(grid) == false) {
		return true;
	} else {
		[row, col] = findEmptyCell(grid); 
	}


	// if ([row, col] == [-1, -1]) {
	// 	return true
	// }
	// // console.log(findEmptyCell(grid));
	// if (!findEmptyCell(grid)[0]) {
	// 	return true
	// }
	// l = findEmptyCell(grid)[1]
	// console.log(l);
	
	// row = l[0];
	// col = l[1];

	for (var num = 1; num < 10; num++) {
		if (safeLocation(grid,row,col,num)) {
			grid[col][row].value = num;

			// var l = findEmptyCell(grid);
			// if (l == [-1, -1]) {
			if (solveSudoku(col, row)) {
				return true;
			}

			grid[col][row].value = 0;	
		}
	}
	return false;
	// console.log(findEmptyCell(grid));
	
	// console.log(safeLocation(grid,0,4,9));
}

