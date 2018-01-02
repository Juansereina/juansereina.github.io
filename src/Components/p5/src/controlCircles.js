import Circle from './Circle';
import Helpers from './Circle/helpers';

const { getRandomArbitrary } = Helpers.math;
const createCircle = (app, y) => {
  const x = getRandomArbitrary(1, app.width - 1);
  const circle = new Circle(app.createVector(x, y));
  return circle;
};
const circlesLength = () => {
  if (window.innerWidth < 430) return 50;
  return 500;
};
export default {
  createCircle,
  circlesLength,
};

