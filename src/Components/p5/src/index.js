import Circle from './Circle';
// import background from '../../../assets/Images/background.png';

export default function sketch(p) {
  let circles = [];
  let widthSize = 0;

  function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min)) + min;
  }
  function createCircle(y) {
    const x = getRandomArbitrary(1, p.width - 1);
    const circle = new Circle(p, x, y);
    circles.push(circle);
  }

  function circlesCycle() {
    p.noStroke();
    circles.forEach((circle) => {
      circle.draw(p);
    });
  }

  p.setup = () => {
    widthSize = window.innerWidth;
    p.createCanvas(window.innerWidth, window.innerHeight);
  };
  function circlesLength() {
    if (widthSize < 430) {
      return 50;
    }
    return 500;
  }

  setInterval(() => {
    if (circles.length < circlesLength()) {
      const y = getRandomArbitrary(1, p.height - 1);
      createCircle(y);
    }
  }, 100);

  p.draw = () => {
    p.background(32, 37, 48, 95);
    // p.background(img,95);
    circlesCycle();
  };

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
    circles = [];
  };
}
