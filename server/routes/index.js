import express from 'express';
import services from '../services';

const { mail } = services;
const api = express.Router();

api.get('/send', (req, res) => {
  const subject = 'lol';
  const text = 'holiwis';
  mail.newMessage(subject, text).then(() => {
    res.send(`subject: ${subject} and text: ${text} `);
  });
});

api.get('*.js', (req, res, next) => {
  req.url = `${req.url}.gz`;
  res.set('Content-Encoding', 'gzip');
  next();
});

export default api;
