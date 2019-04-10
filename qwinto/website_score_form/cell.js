function Cell(x, y, color) {

// class Cell{

  // constructor(x, y, color) {

    this.x = x;
    this.y = y;
    this.pixelPosition = createVector(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);
    this.special = false;
    this.display = true;
    this.color = color;
    this.value = 0;

    this.show = function() {
        var colors = {"red": [255, 0, 0],
                      "yellow": [255, 255, 0],
                      "purple": [102, 0, 255]};

        strokeWeight(2);
        fill(colors[this.color]);
        if (this.display) {
          rect(this.pixelPosition.x, this.pixelPosition.y, tileSize, tileSize);
        }

        if (this.special) {
          circle(this.pixelPosition.x + tileSize / 2, this.pixelPosition.y + tileSize / 2, tileSize / 2.5);
        }

        if (this.value) {
          fill(0);
          text(this.value, this.pixelPosition.x + tileSize / 2, this.pixelPosition.y + tileSize / 2);
        }

    this.click = function(mx, my) {
        if (!inputFormShown && this.display && mx > this.pixelPosition.x && mx < this.pixelPosition.x + tileSize && my > this.pixelPosition.y && my < this.pixelPosition.y + tileSize) {
            cellClickedI = this.x;
            cellClickedJ = this.y;
            console.log("Clicked on cell (", this.x,",",this.y, ") with value", this.value);
            showInputButtons();
            inputFormShown = true;
            console.log("inputFormShown set to",inputFormShown);
        }

    };

};

}

function showInputButtons() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].show = true;
    }
}
