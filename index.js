
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

import config from './config';

const app = express();
const { port } = config;
const { createMessage, sendMessage } = require('./services');

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve('dist')));

app.get('/send', (req, res) => {
  const message = createMessage('Oasdfasdfasdfasdftro', 'hey');

  res.send('message sent!');
});

app.get('*.js', (req, res, next) => {
  req.url = `${req.url}.gz`;
  res.set('Content-Encoding', 'gzip');
  next();
});

app.listen(port, () => console.log(`Server on port ${port}`));
