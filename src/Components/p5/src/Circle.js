class Circle {
  constructor(app, pos) {
    this.x = pos.x;
    this.y = pos.y;
    this.size = this.getRandomArbitrary(0.75, 3);
    this.tempoSize = this.size;
    this.velocity = this.getRandomArbitrary(0.1, 0.5);
    this.opacity = this.getRandomArbitrary(50, 255);
    this.visible = true;
    this.changeColor = true;
    this.timeVisible = app.ceil(this.getRandomArbitrary(600, 300));
    this.timeColor = app.ceil(this.getRandomArbitrary(600, 1200));
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.dif = this.getRandomArbitrary(1, 30);
  }

  draw(app) {
    let posX = this.x;
    posX += (app.map(app.mouseX, 0, app.width, 0, this.dif) * -1);
    this.drawObject(app, posX);
    if (this.move()) this.y = app.height;
    this.changeEffect();
    this.timeEffects(app);
    this.drawLine(app, posX);
  }

  calculateDist(app, posX) {
    return app.dist(posX, this.y, app.mouseX, app.mouseY);
  }

  drawObject(app, posX) {
    let newSize = this.size;
    const dis = this.calculateDist(app, posX);
    if (dis < 100) {
      newSize += app.map(dis, 100, 0, 0, this.size * 1.5);
    }
    app.fill(this.r, this.g, this.b, this.opacity);
    app.ellipseMode(app.CENTER);
    app.ellipse(posX, this.y, newSize, newSize);
  }

  drawLine(app, posX) {
    const dis = this.calculateDist(app, posX);
    app.push();
    if (dis < 100 && this.opacity > 50) {
      const opaLine = app.map(dis, 100, 0, 0, 255);
      app.stroke(this.r, this.g, this.b, opaLine);
      app.strokeWeight(0.5);
      app.line(posX, this.y, app.mouseX, app.mouseY);
    }
    app.pop();
  }

  move() {
    this.y -= this.velocity;
    if (this.y < 0) return true;
    return false;
  }

  getRandomArbitrary(min, max) {
    return (Math.random() * (max - min)) + min;
  }

  changeEffect() {
    if (this.visible && this.opacity > -1) {
      this.opacity -= 1;
      if (this.size >= 0) this.size -= 0.01;
    } else {
      this.opacity += 1;
      if (this.size <= this.tempoSize) this.size += 0.01;
    }
    if (this.changeColor) {
      if (this.r < 255) this.r += 1;
      if (this.g < 255) this.g += 1;
      if (this.b < 255) this.b += 1;
    } else {
      if (this.r > 0) this.r -= 1;
      if (this.g > 239) this.g -= 1;
      if (this.b > 240) this.b -= 1;
    }
  }

  timeEffects(app) {
    if (app.frameCount % this.timeColor === 0) {
      this.changeColor = !this.changeColor;
    }
    if (app.frameCount % this.timeVisible === 0) {
      this.visible = !this.visible;
    }
  }
}

export default Circle;
