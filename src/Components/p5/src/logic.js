import Control from './controlCircles';
import Helpers from './Circle/helpers';

const { createCircle, circlesLength } = Control;
const { getRandomArbitrary } = Helpers.math;
let circles = [];
class Logic {
  drawCircles(app) {
    app.noStroke();
    circles.forEach((circle) => {
      circle.draw(app);
    });
  }
  create(app) {
    if (circles.length < circlesLength()) {
      const posY = getRandomArbitrary(1, app.height - 1);
      circles.push(createCircle(app, posY));
    }
  }
  clear() {
    circles = [];
  }
}
export default Logic;
