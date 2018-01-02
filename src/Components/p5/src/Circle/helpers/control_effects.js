import math from './math';

const { changeValue } = math;

const changeColor = (change, color) => {
  const coltemp = color;
  if (change) {
    coltemp[0] = changeValue(coltemp[0], 0, 1);
    coltemp[1] = changeValue(coltemp[1], 239, 1);
    coltemp[2] = changeValue(coltemp[2], 240, 1);
  } else {
    coltemp[0] = changeValue(coltemp[0], 255, 1);
    coltemp[1] = changeValue(coltemp[1], 255, 1);
    coltemp[2] = changeValue(coltemp[2], 255, 1);
  }
  return coltemp;
};

const mouseEffect = (app, change) => (app.map(app.mouseX, 0, app.width, 0, change) * -1);

const changeOpacity = (change, opacity) => {
  const opacityTemp = opacity;
  let value = 0;
  if (change) value = 255;
  return changeValue(opacityTemp, value, 1);
};

const timeEffects = (app, change, time) => {
  let changeTemp = change;
  if (app.frameCount % time === 0) {
    changeTemp = !changeTemp;
  }
  return changeTemp;
};

export default{
  changeColor,
  mouseEffect,
  changeOpacity,
  timeEffects,
};
