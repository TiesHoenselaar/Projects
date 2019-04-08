class ScoreForm{

  constructor() {
    var colors = ['red', 'yellow', 'purple'];

    this.scores = []

    for (let i = 0; i < 12; i++) {
      var row = [];
      for (let j = 0; j < 3; j++) {
        row.push(new Cell(i, j, colors[j]));
      }
      this.scores.push(row);
    }

    this.scores[0][0].display = false;
    this.scores[1][0].display = false;
    this.scores[5][0].display = false;
    this.scores[0][1].display = false;
    this.scores[6][1].display = false;
    this.scores[11][1].display = false;
    this.scores[4][2].display = false;
    this.scores[10][2].display = false;
    this.scores[11][2].display = false;

    this.scores[3][0].special = true;
    this.scores[7][0].special = true;
    this.scores[8][1].special = true;
    this.scores[2][2].special = true;
    this.scores[9][2].special = true;

    // First row
    this.scores[2][0].value = 0;
    this.scores[3][0].value = 5;
    this.scores[4][0].value = 0;
    this.scores[6][0].value = 0;
    this.scores[7][0].value = 10;
    this.scores[8][0].value = 13;
    this.scores[9][0].value = 0;
    this.scores[10][0].value = 17;
    this.scores[11][0].value = 0;

    //Middle row
    this.scores[1][1].value = 2;
    this.scores[2][1].value = 3;
    this.scores[3][1].value = 7;
    this.scores[4][1].value = 8;
    this.scores[5][1].value = 10;
    this.scores[7][1].value = 11;
    this.scores[8][1].value = 12;
    this.scores[9][1].value = 15;
    this.scores[10][1].value = 16;

    // Bottom row
    this.scores[0][2].value = 2;
    this.scores[1][2].value = 4;
    this.scores[2][2].value = 0;
    this.scores[3][2].value = 6;
    this.scores[5][2].value = 7;
    this.scores[6][2].value = 0;
    this.scores[7][2].value = 9;
    this.scores[8][2].value = 11;
    this.scores[9][2].value = 0;


  }

  show() {
    for (let i = 0; i < 12; i++) {
      for (let j = 0; j < 3; j++) {
        this.scores[i][j].show()
      }
    }
  }


}
