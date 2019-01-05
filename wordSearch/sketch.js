var rows = 5;
var cols = 5;
var gridSize = 50;
var words = [];

var firstCellClicked = false;
var cellBeingClicked;
var secondCellClicked;

function setup() {
  createCanvas(1000, 1000);

  textSize(32);
  grid = new Grid();

  words.push(new Word('week'));
  words.push(new Word('find'));
  words.push(new Word('random'));
  words.push(new Word('sleuth'));
  words.push(new Word('backward'));
  words.push(new Word('vertical'));
  words.push(new Word('diagonal'));
  words.push(new Word('wikipedia'));
  words.push(new Word('horizontal'));
  words.push(new Word('wordsearch'));

  showWords();


}

function showWords() {
  textAlign(LEFT);
  for (var w = 0; w < words.length; w++) {
    text(words[w].value, 10, (rows+w+1)*gridSize);
  }
}
  //
  // width_text = createElement('h2', 'Width?');
  // width_text.position(20, 5);
  //
  // width_input = createInput('5');
  // width_input.position(20, 65);
  //
  // height_text = createElement('h2', 'Height?');
  // height_text.position(300, 5);
  //
  // height_input = createInput('5');
  // height_input.position(300, 65);
  //
  // button = createButton('submit');
  // button.position(500, 65);
  // button.mousePressed(createGrid);

  // textAlign(CENTER);
  // textSize(50);
  //
	// fill(0);



function draw() {
	grid.show();


}

function mousePressed() {
  var x = floor(mouseX / gridSize);
  var y = floor(mouseY / gridSize);

  if (!firstCellClicked) {
    cellBeingClicked = grid.isCellAt(x, y);

    if (cellBeingClicked != null) {
      cellBeingClicked.clicked = true;
    } else {
      return
    }

  } else {
    if (true) {
      // show line
    }
  }


}
