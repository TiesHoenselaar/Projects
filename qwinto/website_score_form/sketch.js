var tileSize = 50;
var slider;
var button;
var buttons = new Array(2);

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

  button = createButton("5");
  button.position(100, 100);
  button.mousePressed(buttonClicked);

  buttons[0] = new inputButton(0, 0, "1");
  buttons[1] = new inputButton(1, 0, "2");
}

function buttonClicked() {
  console.log("Button clicked!");
  button.position(100, 400);
}

function mySelectEvent() {
  var item = slider.value();
  scoreform.scores[3][0].value = item;
}

function draw() {
  scoreform.show();

  buttons[0].display();
  buttons[1].display();
}

function mousePressed() {
  // When the mouse is pressed, we must check every single button
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].click(mouseX, mouseY);
  }
}
