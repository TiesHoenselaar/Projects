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

            var numbers_not_possible = [];
            var current_cell = scoreform.scores[this.x][this.y];
            console.log(current_cell);
            var current_col = current_cell.x;
            var current_row = current_cell.y;
            var rows = [0, 1, 2];
            rows.splice(current_cell.y, 1);
            for (var i in rows) {
                var other_cell  = scoreform.scores[current_col][rows[i]];
                if (other_cell.value != 0) {
                    numbers_not_possible.push(other_cell.value);
                }
            }

            var higher_than = 0;
            for (var col = current_col - 1; col >= 0; col--) {
                var other_cell = scoreform.scores[col][current_row];
                if (other_cell.value != 0) {
                    higher_than = other_cell.value;
                    break;
                }
            }

            var lower_than = 19;
            for (var col = current_col + 1; col < 12; col++) {
                var other_cell = scoreform.scores[col][current_row];
                if (other_cell.value != 0) {
                    lower_than = other_cell.value;
                    break;
                }
            }

            console.log(buttons[0]);

            console.log('numbers_not_possible:', numbers_not_possible);
            console.log('higher than:', higher_than);
            console.log('lower than:', lower_than);

            for (i = 0; i < buttons.length; i++) {
                var current_button = buttons[i];
                if (current_button.value <= higher_than ||
                    current_button.value >= lower_than ||
                    numbers_not_possible.includes(current_button.value)) {
                        current_button.hidden = true;
                    } else  {
                        current_button.hidden = false;
                    }
                // console.log(buttons);
            }

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
