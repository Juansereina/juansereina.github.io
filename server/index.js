
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import config from './config';
import { createMessage, sendMessage } from './services';

const app = express();
const { port } = config;

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve('../dist')));

const sending = async () => {
  try {
    const message = await createMessage('buuuuuuuuuuuuuuuuuuuu', 'hey');
    const send = await sendMessage(message);
    return send;
  } catch (err) {
    console.log(err);
  }
};

app.get('/send', (req, res) => {
  sending().then(() => {
    res.send('message sent!');
  }).catch(err => res.status(500).send(err));
});

app.get('*.js', (req, res, next) => {
  req.url = `${req.url}.gz`;
  res.set('Content-Encoding', 'gzip');
  next();
});

app.listen(port, () => console.log(`Server on port ${port}`));
