import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import api from './routes';

const app = express();
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const env = process.env.NODE_ENV || 'dev';
let DIST_DIR = path.join(__dirname, '../dist');
if (env === 'production') DIST_DIR = path.join(__dirname, './dist');
app.use(express.static(DIST_DIR));
app.use('/api', api);
export default app;
