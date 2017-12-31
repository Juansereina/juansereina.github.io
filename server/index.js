
import config from './config';
import app from './app';

const { port } = config;

app.listen(port, () => console.log( `server_${process.env.NODE_ENV} :`, port));
