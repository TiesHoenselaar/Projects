var inputLetters = []
var rows;
var cols;
var gridSize = 50;

class Grid{
  constructor() {
    this.cells = [];

    inputLetters.push('vervoerdervkr');
    inputLetters.push('eteaonpoemeon');
    inputLetters.push('rngeroddeleeo');
    inputLetters.push('geglkraevmlrt');
    inputLetters.push('udeoaviereeic');
    inputLetters.push('nilktnivmkree');
    inputLetters.push('nspoffsaegarn');
    inputLetters.push('ieomfazrerrng');
    inputLetters.push('nrzonnewyzert');
    inputLetters.push('gpkeissalksne');

    // inputLetters.push('kuikennsmt');
    // inputLetters.push('kjkhaaiceu');
    // inputLetters.push('olifanthes');
    // inputLetters.push('eokhondaum');
    // inputLetters.push('inktvisawk');
    // inputLetters.push('zeekoegpki');
    // inputLetters.push('varkenlerp');
    // inputLetters.push('paardenear');
    // inputLetters.push('leeuwvispm');
    // inputLetters.push('tphgytosat');

    rows = inputLetters.length;
    cols = inputLetters[0].length;
    for (var i = 0; i < cols; i++) {
      this.cells[i] = [];
      for (var j = 0; j < rows; j++) {
        var letter = inputLetters[j][i]
        this.cells[i].push(new Cell(i, j, letter));
      }
    }
  }

  show() {
    for (var row = 0; row < rows; row++) {
      for (var col = 0; col < cols; col++) {
        this.cells[col][row].show();
      }
    }
  }

  isCellAt(x,y) {
    for (var i = 0; i < cols; i++) {
      for (var j = 0; j < rows; j++) {
        if (x == this.cells[i][j].x && y == this.cells[i][j].y) {
          return this.cells[i][j];
        }
      }
    }
    return null;
  }

  findWord(word) {
    var value = word.value;
    var len = word.length;

    // console.log(value);
    // console.log(len);

    // Horizontal
    for (var row = 0; row < rows; row ++) {
      for (var col = 0; col < cols - len + 1; col++) {
        var letters = "" // left to right
        var letters2 = "" // right to left
        for (var i = 0; i < len; i++) {
          letters += this.cells[col+i][row].letter;
          letters2 += this.cells[col+len-i-1][row].letter;
        }

        if (letters == value || letters2 == value) {
          word.guessed = true;
          word.startPoint = createVector(col + i - len, row);
          word.endPoint = createVector(col + i - 1, row);
          return
        }
      }
    }

    // Vertical
    for (var col = 0; col < cols; col++) {
      for (var row = 0; row < rows - len + 1; row ++) {
        var letters = "" // left to right
        var letters2 = "" // right to left
        for (var i = 0; i < len; i++) {
          letters += this.cells[col][row+i].letter;
          letters2 += this.cells[col][row+len-i-1].letter;
        }

        if (letters == value || letters2 == value) {
          word.guessed = true;
          word.startPoint = createVector(col, row + i - len);
          word.endPoint = createVector(col, row + i-1);
          return
        }
      }
    }

    // Diagonal 1
    for (var row = 0; row < rows - len + 1; row ++) {
      for (var col = 0; col < cols - len + 1; col++) {
        var letters = "" // left to right
        var letters2 = "" // right to left
        for (var i = 0; i < len; i++) {
          letters += this.cells[col+i][row+i].letter;
          letters2 += this.cells[col+len-i-1][row+len-i-1].letter;
        }

        if (letters == value || letters2 == value) {
          word.guessed = true;
          word.startPoint = createVector(col + i - len, row + i - len);
          word.endPoint = createVector(col + i - 1, row + i - 1);
          return
        }
      }
    }

    // Diagonal 2
    for (var col = 0; col < cols - len + 1; col++) {
      for (var row = 0; row < rows - len + 1; row ++) {
        var letters = "" // left to right
        var letters2 = "" // right to left
        for (var i = 0; i < len; i++) {
          letters += this.cells[col+i][row+len-i-1].letter;
          letters2 += this.cells[len+col-i-1][row+i].letter;
        }

        if (letters == value || letters2 == value) {
          word.guessed = true;
          word.startPoint = createVector(col, row + len - 1);
          word.endPoint = createVector(col+len-1, row);
          return
        }
      }
    }

  }
}
