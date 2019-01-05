class Disk {
    constructor(x, y, size) {
        this.size = size;
        this.pixelPosition = createVector((x * 9 + 5) * tileSize - size / 2, height - y * tileSize);
        this.movingThisDisk = false;
    }

    show() {
        if (this.movingThisDisk) {
            rect(mouseX - this.size / 2, mouseY + tileSize / 2, this.size, -tileSize);
        }
        else {
            rect(this.pixelPosition.x, this.pixelPosition.y, this.size, -tileSize);
        }
    }

    move(x, y) {
        this.pixelPosition = createVector(x, y);
    }
    
}