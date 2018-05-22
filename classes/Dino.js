const NNinputCount = 4
const NNoutputCount = 1
const NNnodesCount = 4

class Dino {
  constructor() {
    this.yPosition = height - 200;
    this.xPosition = 200;
    this.gravityForce = 2;
    this.velocity = 0;
    this.height = 60;
    this.width = 30;
    this.jumpHeight = 18
    this.brainz = new NeuralNetwork(NNinputCount, NNoutputCount, NNnodesCount)
  }

  decide() {
    let inputs = [1.0, 0.1, 0.3, 0.6];
    let output = this.brainz.predict(inputs)
    if (output > 0.5) {
      this.jump();
    }
  }

  renderDino() {
    fill(255);
    rect(this.xPosition, this.yPosition, this.width, this.height);
  }

  updateDinoPosition() {
    this.velocity += this.gravityForce;
    this.yPosition += this.velocity

    if (this.yPosition >= (height - 200)) {
      this.yPosition = (height - 200)
      this.velocity = 0;
    }
  }

  duck() {
    this.velocity += (this.gravityForce * this.jumpHeight);
    this.height = this.height / 2;
  }

  standUp(){
    this.height = 60;
  }

  jump() {
    this.velocity += -(this.gravityForce * this.jumpHeight);
    if (this.velocity != -(this.gravityForce * this.jumpHeight)) {
      this.velocity = 0;
    }

  }
}
