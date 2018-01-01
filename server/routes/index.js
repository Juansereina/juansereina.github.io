import express from 'express';
import services from '../services';
import middlewares from '../middlewares';

const api = express.Router();
const { mail } = services;
const { validateMessage } = middlewares.mail;

api.post('/send', validateMessage, (req, res) => {
  const { Subject } = req.body;
  const text = req.body;
  mail.newMessage(Subject, text).then(() => {
    res.send('Message sent!');
  });
});

api.get('/server', (req, res) => {
  res.send('server working :)');
});

export default api;
