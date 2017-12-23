import createMessage from './createMessage';
import sendMessage from './sendMessage';

const newMessage = async (subject, text) => {
  try {
    const message = await createMessage(subject, text);
    const send = await sendMessage(message);
    return send;
  } catch (err) {
    return console.log(err);
  }
};

const mail = {
  newMessage,
};
export default mail;

