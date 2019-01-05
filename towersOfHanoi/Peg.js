class Peg {
    constructor(x) {
        this.pixelPosition = createVector((x * 9 + 5) * tileSize - tileSize / 2, height);
        this.height = 6;
        this.disks = [];
    }


    show() {
        fill(127);
        rect(this.pixelPosition.x, this.pixelPosition.y, tileSize, -this.height*tileSize)
        
        fill(255, 0, 0, 127);
        for (var i=0; i < this.disks.length; i++) {
            this.disks[i].show();
        }
    }
}