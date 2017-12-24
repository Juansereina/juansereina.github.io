const validateMessage = (req, res, next) => {
  const message = req.body;
  if (message) {
    return next();
  }
  return res.status(300).send('Empty value');
};

export default {
  validateMessage,
};
