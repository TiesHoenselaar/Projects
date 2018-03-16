function findEmptyCell(sudoku) {
	var l = [-1, -1];
	for (var row = 0; row < sudoku.rows; row++) {
		for (var col = 0; col < sudoku.cols; col++) {
			if (sudoku[row][col].value == 0) {
				return [row, col];
			}
		}
	}
	return false;
}

function usedInRow(sudoku, row, num) {
	for (var col = 0; col < sudoku.cols; col++) {
		if (sudoku[row][col].value == num) {
			return true;
		}
	}
	return false;
}

function usedInCol(sudoku, col, num) {
	for (var row = 0; row < sudoku.rows; row++) {
		if (sudoku[row][col].value == num) {
			return true;
		}
	}
	return false;
}

function usedInBox(sudoku, row, col, num) {
	for (var i = 0; i < sudoku.boxRows; i++) {
		for (var j = 0; j < sudoku.boxCols; j++) {
			if (sudoku[row+i][col+j].value == num) {
				return true;
			}
		}
	}
	return false;
}

function safeLocation(sudoku, row, col, num) {
	var r1 = usedInRow(sudoku, row, num);
	var r2 = usedInCol(sudoku, col, num);
	var r3 = usedInBox(sudoku, row-row%sudoku.boxRows, col-col%sudoku.boxCols, num);
	// console.log(row,col,num);
	// console.log(r1,r2,r3);
	return (!r1 && !r2 && !r3)
}

function consolePrint(sudoku){
	for (var i = 0; i < 9; i ++) {
		console.log(sudoku[i][0].value, sudoku[i][1].value, sudoku[i][2].value, sudoku[i][3].value, sudoku[i][4].value, sudoku[i][5].value, sudoku[i][6].value, sudoku[i][7].value, sudoku[i][8].value );
	}
}


function solveSudoku(row=0, col=0) {
	// var l = findEmptyCell(sudoku);

	// console.log(sudoku);

	if (findEmptyCell(sudoku) == false) {
		console.log('done')
		return true;
	} else {
		[row, col] = findEmptyCell(sudoku); 
	}


	// if ([row, col] == [-1, -1]) {
	// 	return true
	// }
	// // console.log(findEmptyCell(sudoku));
	// if (!findEmptyCell(sudoku)[0]) {
	// 	return true
	// }
	// l = findEmptyCell(sudoku)[1]
	// console.log(l);
	
	// row = l[0];
	// col = l[1];

	for (var num = 1; num < sudoku.boxCols*sudoku.boxRows+1; num++) {
		if (safeLocation(sudoku,row,col,num)) {
			sudoku[row][col].value = num;

			// var l = findEmptyCell(sudoku);
			// if (l == [-1, -1]) {
			if (solveSudoku(row, col)) {
				return true;
			}

			sudoku[row][col].value = 0;	
		}
	}
	return false;
	// console.log(findEmptyCell(sudoku));
	
	// console.log(safeLocation(sudoku,0,4,9));
}

