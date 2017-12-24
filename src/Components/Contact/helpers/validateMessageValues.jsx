const validateMessageValues = message =>
  new Promise((resolve, reject) => {
    if (!message.Name || !message.Email || !message.Subject || !message.Message) {
      reject(new Error('Missing value'));
    }
    resolve(message);
  });

export default validateMessageValues;

