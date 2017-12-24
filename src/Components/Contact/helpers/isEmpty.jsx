const isEmpty = str =>
  new Promise((resolve, reject) => {
    const values = Object.values(str);
    values.forEach((val) => {
      if (!val.trim()) reject(new Error('Empty value'));
    });
    resolve(str);
  });

export default isEmpty;
