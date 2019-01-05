var gridSize = 50;
var words = [];

var firstCellClicked = false;
var cellBeingClicked;
var secondCellClicked;

function setup() {
  createCanvas(1000, 1200);

  textSize(32);
  grid = new Grid();

  words.push(new Word('afkeer'));
  words.push(new Word('arriveren'));
  words.push(new Word('creme'));
  words.push(new Word('engte'));
  words.push(new Word('geroddel'));
  words.push(new Word('glansryk'));
  words.push(new Word('grootvader'));
  words.push(new Word('inzamelen'));
  words.push(new Word('klassiek'));
  words.push(new Word('koerier'));
  words.push(new Word('koffievlek'));
  words.push(new Word('lerares'));
  words.push(new Word('onderkant'));
  words.push(new Word('oplegger'));
  words.push(new Word('presidente'));
  words.push(new Word('roemeen'));
  words.push(new Word('slokop'));
  words.push(new Word('vergunning'));
  words.push(new Word('vervoerder'));
  words.push(new Word('wegrit'));
  words.push(new Word('zonnewyzer'));

  // words.push(new Word('paard'));
  // words.push(new Word('hond'));
  // words.push(new Word('poes'));
  // words.push(new Word('haai'));
  // words.push(new Word('welp'));
  // words.push(new Word('zeekoe'));
  // words.push(new Word('varken'));
  // words.push(new Word('kip'));
  // words.push(new Word('vis'));
  // words.push(new Word('olifant'));
  // words.push(new Word('inktvis'));
  // words.push(new Word('meeuw'));
  // words.push(new Word('koe'));
  // words.push(new Word('haan'));
  // words.push(new Word('kikker'));
  // words.push(new Word('kuiken'));
  // words.push(new Word('leeuw'));
  // words.push(new Word('krap'));
  // words.push(new Word('schaap'));

  showWords();

  grid.show();

  for (var w = 0; w < words.length; w++) {
    grid.findWord(words[w]);
    words[w].show();
  }

}

function showWords() {
  textAlign(LEFT, CENTER);
  stroke(0);
  strokeWeight(0.25);
  for (var w = 0; w < words.length; w++) {
    text(words[w].value, 700, (w+1)*gridSize);
  }
}

function solve() {
  for (var w = 0; w < words.length; w++) {
    grid.findWord(words[w]);
  }
}


function draw() {
  showWords();


}

function mousePressed() {
  solve();
  // var x = floor(mouseX / gridSize);
  // var y = floor(mouseY / gridSize);
  //
  // if (!firstCellClicked) {
  //   cellBeingClicked = grid.isCellAt(x, y);
  //
  //   if (cellBeingClicked != null) {
  //     cellBeingClicked.clicked = true;
  //   } else {
  //     return
  //   }
  //
  // } else {
  //   if (true) {
  //     // show line
  //   }
  // }


}
