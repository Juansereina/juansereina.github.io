const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const config = require('./config');

const app = express();
const { port } = config;

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve('dist')));
app.listen(port, () => console.log(`Server on port ${port}`));
