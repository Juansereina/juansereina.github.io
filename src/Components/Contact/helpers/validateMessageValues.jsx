const values = ['Name', 'Email', 'Subject', 'Message'];
const validateMessageValues = message =>
  new Promise((resolve, reject) => {
    const keys = Object.keys(message);
    values.forEach((val) => {
      if (!keys.includes(val)) reject(new Error('Missing value'));
    });
    resolve(message);
  });

export default validateMessageValues;

