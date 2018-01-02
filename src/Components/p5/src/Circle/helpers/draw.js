const drawObject = (properties, dis) => {
  const {
    app, x, y, color, opacity, size,
  } = properties;

  let newSize = size;
  if (dis < 100) {
    newSize += app.map(dis, 100, 0, 0, size * 1.5);
  }
  app.fill(color, opacity);
  app.ellipseMode(app.CENTER);
  app.ellipse(x, y, newSize, newSize);
};

const drawLine = (properties, dis) => {
  const {
    app, x, y, color, opacity,
  } = properties;
  app.push();
  if (dis < 100 && opacity > 50) {
    const opacityLine = app.map(dis, 100, 0, 0, 255);
    app.stroke(color, opacityLine);
    app.strokeWeight(0.5);
    app.line(x, y, app.mouseX, app.mouseY);
  }
  app.pop();
};

export default {
  drawObject,
  drawLine,
};

