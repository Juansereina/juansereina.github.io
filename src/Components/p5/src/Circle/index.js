import Helpers from './helpers';

const { drawObject, drawLine } = Helpers.draw;
const { changeColor } = Helpers.controlEffects;

class Circle {
  constructor(app, pos) {
    this.x = pos.x;
    this.y = pos.y;
    this.size = this.getRandomArbitrary(0.75, 3);
    this.tempoSize = this.size;
    this.velocity = this.getRandomArbitrary(0.1, 0.5);
    this.opacity = this.getRandomArbitrary(50, 255);
    this.visible = true;
    this.change = true;
    this.timeVisible = app.ceil(this.getRandomArbitrary(600, 300));
    this.timeColor = app.ceil(this.getRandomArbitrary(600, 1200));
    this.color = [100, 100, 100];
    this.dif = this.getRandomArbitrary(1, 30);
  }

  draw(app) {
    let posX = this.x;
    posX += (app.map(app.mouseX, 0, app.width, 0, this.dif) * -1);
    const dis = this.calculateDist(app, posX);
    this.color = changeColor(false, this.color);
    const properties = {
      app,
      x: posX,
      y: this.y,
      opacity: this.opacity,
      color: this.color,
      size: this.size,
      visible: this.visible,
    };
    drawObject(properties, dis);
    drawLine(properties, dis);
    if (this.move()) this.y = app.height;
    this.timeEffects(app);
  } 

  calculateDist(app, posX) {
    return app.dist(posX, this.y, app.mouseX, app.mouseY);
  }

  changeOpacity(value) {
    this.opacity += value;
  }
  move() {
    this.y -= this.velocity;
    if (this.y < 0) return true;
    return false;
  }

  getRandomArbitrary(min, max) {
    return (Math.random() * (max - min)) + min;
  }


  timeEffects(app) {
    if (app.frameCount % this.timeColor === 0) {
      this.change = !this.change;
    }
    if (app.frameCount % this.timeVisible === 0) {
      this.visible = !this.visible;
    }
  }
}

export default Circle;

