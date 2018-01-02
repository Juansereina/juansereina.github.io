import Helpers from './helpers';

const { drawObject, drawLine } = Helpers.draw;
const {
  changeColor,
  mouseEffect,
  changeOpacity,
  timeEffects,
} = Helpers.controlEffects;
const { getRandomArbitrary, calculateDistance, changeValue } = Helpers.math;

class Circle {
  constructor(pos) {
    this.pos = pos;
    this.visible = true;
    this.chooseColor = true;
    this.color = [255, 255, 255];
    this.size = getRandomArbitrary(0.75, 3);
    this.opacity = getRandomArbitrary(50, 255);
    this.velocity = getRandomArbitrary(0.1, 0.5);
    this.timeVisible = Math.round(getRandomArbitrary(600, 300));
    this.timeColor = Math.round(getRandomArbitrary(600, 1200));
    this.offset = getRandomArbitrary(1, 30);
  }
  draw(app) {
    const posX = this.mousePosition(app);
    const properties = this.gettingPropertiesChanges(app, posX);
    this.drawElements(properties);
    this.move(app);
    this.changeEffects(app);
  }
  mousePosition(app) {
    let posX = this.pos.x;
    posX += mouseEffect(app, this.offset);
    return posX;
  }
  changeEffects(app) {
    this.chooseColor = timeEffects(app, this.chooseColor, this.timeColor);
    this.visible = timeEffects(app, this.visible, this.timeVisible);
    this.opacity = changeOpacity(this.visible, this.opacity);
    this.color = changeColor(this.chooseColor, this.color);
  }
  gettingPropertiesChanges(app, posX) {
    const distance = calculateDistance(app, { x: posX, y: this.pos.y });
    return {
      app,
      distance,
      x: posX,
      y: this.pos.y,
      opacity: this.opacity,
      color: this.color,
      size: this.size,
      visible: this.visible,
    };
  }
  drawElements(properties) {
    drawObject(properties);
    drawLine(properties);
  }
  move(app) {
    if (this.pos.y < 1) this.pos.y = app.height;
    this.pos.y = changeValue(this.pos.y, 0, this.velocity);
  }
}

export default Circle;

