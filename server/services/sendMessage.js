import transporter from '../controllers/mail';

const send = Message =>
  new Promise((resolve, reject) => {
    transporter.sendMail(Message, (error, info) => {
      if (error) {
        reject(error);
      }
      resolve(info);
    });
  });

export default send;
