function inputButton(x, y, value) {

    var x_offset = 50;
    var y_offset = 50;

    var x_spacing = 50;
    var y_spacing = 50;

    var size = 40;

    this.x = x;
    this.y = y;
    this.pixelPosition = createVector(x_offset+x*x_spacing, y_offset+y*y_spacing);

    this.value = value;
    this.show = false;
    this.hidden = false;

    this.click = function(mx, my) {
      // Check to see if a point is inside the rectangle
      if (inputFormShown && mx > this.pixelPosition.x && mx < this.pixelPosition.x + size && my > this.pixelPosition.y && my < this.pixelPosition.y + size) {
          // console.log("Clicked on input button", this.value);
          console.log(this.x, this.y, this.hidden);
          if (!this.hidden) {
              console.log(!this.hidden);
            scoreform.scores[cellClickedI][cellClickedJ].value = this.value;
            }

          // console.log("inputFormShown set to",inputFormShown);
          hideInputButtons();
          inputFormShown = false;
      }
  };

    this.display = function() {
      rectMode(CORNER);
      stroke(0);

      if (this.show) {
          if (this.hidden) {
              fill(220);
          } else {
              fill(50);
          }
          rect(this.pixelPosition.x, this.pixelPosition.y, size, size);
          fill(200);
          text(this.value, this.pixelPosition.x + size/2, this.pixelPosition.y + size/2)
        }
    }

}

function hideInputButtons() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].show = false;
    }
}
