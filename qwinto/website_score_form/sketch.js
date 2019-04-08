var tileSize = 50;
var slider;

function setup() {
  createCanvas(650, 200);
  background(220);
  textSize(32);
  textAlign(CENTER, CENTER);


  scoreform = new ScoreForm();

  slider = createSlider(0, 12, 0, 1);
  sel = createSelect();
  sel.option(0);
  sel.option(1);
  sel.option(2);

  slider.changed(mySelectEvent);
  slider.class('slider');
  slider.id('myRange');
}

function mySelectEvent() {
  var item = slider.value();
  scoreform.scores[3][0].value = item;
}

function draw() {
  scoreform.show();
}
