var tileSize = 50;
var slider;
var button;
var buttons = new Array(3);
var inputFormShown = false;
var cellClickedI;
var cellClickedJ;

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

  button = createButton("Show input form");
  button.position(20, 200);
  button.mousePressed(buttonClicked);

  buttons[0] = new inputButton(0, 0, "1");
  buttons[1] = new inputButton(1, 0, "2");
  buttons[2] = new inputButton(2, 0, "3");
}

function buttonClicked() {
  console.log("Button clicked!");
  showInputButtons();

}

function mySelectEvent() {
  var item = slider.value();
  scoreform.scores[3][0].value = item;
}

function draw() {
  scoreform.show();

  // rect(100, 100, 500, 200);
  for (var i = 0; i < buttons.length; i++) {
      buttons[i].display();
  }

}

function mousePressed() {
  // When the mouse is pressed, we must check every single button

  if (inputFormShown) {
      for (var i = 0; i < buttons.length; i++) {
          buttons[i].click(mouseX, mouseY);
      }
  } else {
      for (var i = 0; i < 12; i++) {
          for (var j = 0; j < 3; j++) {
              scoreform.scores[i][j].click(mouseX, mouseY);
          }
      }
  }

  background(220);




}
