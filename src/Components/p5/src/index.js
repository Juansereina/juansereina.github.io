import Circle from './Circle';

export default function sketch(app) {
  let circles = [];
  let widthSize = 0;

  function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min)) + min;
  }
  function createCircle(y) {
    const x = getRandomArbitrary(1, app.width - 1);
    const circle = new Circle(app, app.createVector(x, y));
    circles.push(circle);
  }

  function circlesCycle() {
    app.noStroke();
    circles.forEach((circle) => {
      circle.draw(app);
    });
  }

  app.setup = () => {
    widthSize = window.innerWidth;
    app.createCanvas(window.innerWidth, window.innerHeight);
  };
  function circlesLength() {
    if (widthSize < 430) {
      return 50;
    }
    return 500;
  }

  setInterval(() => {
    if (circles.length < circlesLength()) {
      const y = getRandomArbitrary(1, app.height - 1);
      createCircle(y);
    }
  }, 100);

  app.draw = () => {
    app.background(32, 37, 48, 95);
    // p.background(img,95);
    circlesCycle();
  };

  app.windowResized = () => {
    app.resizeCanvas(window.innerWidth, window.innerHeight);
    circles = [];
  };
}
