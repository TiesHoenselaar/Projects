function inputButton(x, y, value) {

    var x_offset = 50;
    var y_offset = 50;

    var x_spacing = 50;
    var y_spacing = 50;

    var size = 40;

    this.matrixPosition = createVector(x, y);
    this.pixelPosition = createVector(x_offset+x*x_spacing, y_offset+y*y_spacing);

    this.value = value;
    this.shown = true;

    this.click = function(mx, my) {
      // Check to see if a point is inside the rectangle
      if (mx > this.pixelPosition.x && mx < this.pixelPosition.x + size && my > this.pixelPosition.y && my < this.pixelPosition.y + size) {
        this.shown = !this.shown;
        this.pixelPosition.y += 100;
      }
    }

    this.display = function() {
      rectMode(CORNER);
      stroke(0);

      if (this.shown) {
          fill(175);
      } else {
          fill(0);
      }
      rect(this.pixelPosition.x, this.pixelPosition.y, size, size);

      fill(200);
      // textMode(CENTER, CENTER);
      text(this.value, this.pixelPosition.x + size/2, this.pixelPosition.y + size/2)
    }

}
