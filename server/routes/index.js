import express from 'express';
import services from '../services';
import middlewares from '../middlewares';

const api = express.Router();
const { mail } = services;
const { validateMessage } = middlewares.mail;

api.post('/send', validateMessage, (req, res) => {
  const { subject } = req.body;
  const text = req.body;
  mail.newMessage(subject, text).then(() => {
    res.send('Message sent!');
  });
});

export default api;
