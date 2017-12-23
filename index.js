const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const config = require('./config');

const app = express();
const { port } = config;
const nodeMailer = require('./services/mail');

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve('dist')));

app.get('/send', (req, res) => {
  nodeMailer();
  res.send('message sent!');
});

app.get('*.js', (req, res, next) => {
  req.url = `${req.url}.gz`;
  res.set('Content-Encoding', 'gzip');
  next();
});

app.listen(port, () => console.log(`Server on port ${port}`));
