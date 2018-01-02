const drawObject = (properties) => {
  const {
    app, x, y, color, opacity, size, distance,
  } = properties;

  let newSize = size;
  if (distance < 100) {
    newSize += app.map(distance, 100, 0, 0, size * 1.5);
  }
  app.noStroke();
  app.fill(color[0], color[1], color[2], opacity);
  app.ellipseMode(app.CENTER);
  app.ellipse(x, y, newSize, newSize);
};

const drawLine = (properties) => {
  const {
    app, x, y, color, opacity, distance,
  } = properties;
  app.push();
  if (distance < 100 && opacity > 50) {
    const opacityLine = app.map(distance, 100, 0, 0, 255);
    app.stroke(color, opacityLine);
    app.strokeWeight(0.5);
    app.line(x, y, app.mouseX, app.mouseY);
  }
  app.pop();
};

const drawElements = (properties) => {
  drawObject(properties);
  drawLine(properties);
};

export default drawElements;

