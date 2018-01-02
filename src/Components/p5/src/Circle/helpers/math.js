const getRandomArbitrary = (min, max) => (Math.random() * (max - min)) + min;
const calculateDistance = (app, target) => app.dist(target.x, target.y, app.mouseX, app.mouseY);
const changeValue = (value, target, increase) => {
  const temp = value - target;
  let result = value;
  if (temp < 0) result += increase;
  else if (temp > 0) result -= increase;
  return result;
};
export default{
  getRandomArbitrary,
  calculateDistance,
  changeValue,
};

