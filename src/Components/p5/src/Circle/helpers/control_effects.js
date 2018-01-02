const changeValue = (value, target) => {
  const temp = value - target;
  let result = value;
  if (temp < 0) result += 1;
  else if (temp > 0) result -= 1;
  return result;
};


const changeColor = (change, color) => {
  let coltemp = color;
  if (change) {
    coltemp[0] = changeValue(coltemp[0], 0);
    coltemp[1] = changeValue(coltemp[1], 239);
    coltemp[2] = changeValue(coltemp[2], 240);
  } else {
    coltemp = color.map(() => changeValue(coltemp[0], 255));
  }
  return coltemp;
};

/* const changeOpacity = () => {
  if (visible && opacity > -1) {
    opacity -= 1;
    if (size >= 0) size -= 0.01;
  } else {
    opacity += 1;
    if (size <= tempoSize) size += 0.01;
  }
}; */

export default{
  changeValue,
  changeColor,
};
