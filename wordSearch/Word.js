class Word {
  constructor(value) {
    this.value = value;
    this.length = value.length;
    this.guessed = false;
    this.startPoint = null;
    this.endPoint = null;
  }

  show() {
    if (this.guessed) {
      // stroke(random(255),random(255),random(255), 127);
      stroke(255, 0, 0, 127);
      strokeWeight(8);
      // console.log(this.value);
      line(this.startPoint.x*gridSize + gridSize/2,
        this.startPoint.y*gridSize + gridSize/2,
        this.endPoint.x*gridSize + gridSize/2,
        this.endPoint.y*gridSize + gridSize/2);
    }
  }
}
