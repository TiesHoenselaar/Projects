var tileSize = 50;
var buttons = new Array(18);
var inputFormShown = false;
var cellClickedI;
var cellClickedJ;

function setup() {
  createCanvas(650, 200);
  background(220);
  textSize(32);
  textAlign(CENTER, CENTER);

  scoreform = new ScoreForm();

  var count = 0;
  for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 6; j++) {
          buttons[count] = new inputButton(j, i, count+1);
          count += 1;
      }
  }

// x = cols
// y = rows





}

function draw() {
  scoreform.show();

  fill('rgba(255,255,255, 0.5)');
  if (inputFormShown) {
      rect(0, 0, 500, 200);
  }

  for (var i = 0; i < buttons.length; i++) {
      buttons[i].display();
  }

}

function mousePressed() {
    // checkCell();
  // When the mouse is pressed, we must check every single button

  if (inputFormShown) {
      for (var i = 0; i < buttons.length; i++) {
          buttons[i].click(mouseX, mouseY);
      }

      background(220);
  } else {
      for (var i = 0; i < 12; i++) {
          for (var j = 0; j < 3; j++) {
              scoreform.scores[i][j].click(mouseX, mouseY);
          }
      }
  }



function checkCell() {

}


}
