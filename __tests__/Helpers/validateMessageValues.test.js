import validateMessageValues from '../../src/Components/Contact/Helpers/validateMessageValues';

const message = {
  Name: 'juan',
  Email: 'juan@',
  Subject: 'Prueba',
  Message: '',
};

it('Validate message', () =>
  validateMessageValues(message).then((result) => {
    expect(result).toBe(message);
  }));

