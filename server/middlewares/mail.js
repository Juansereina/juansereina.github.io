const validateMessage = (req, res, next) => {
  /* const { subject } = req.body;
  const { text } = req.body; */
  console.log(req.body);

  /* if (subject && text) {
    return next();
  } */
  return res.status(300).send('Empty value');
};

export default {
  validateMessage,
};
