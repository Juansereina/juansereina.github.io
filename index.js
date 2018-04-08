
const config = require('./server/config');
let appPath= './server/app';
if (config.env === 'production') {
    appPath = './dist/app'
} 
const app = require(appPath);
const { port } = config;
app.listen(port, () => console.log(`server_${config.env} :`, port));
