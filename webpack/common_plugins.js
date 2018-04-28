const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const generate = env => {
  let indexPath = 'index.html'
  /*if(env.production){
    indexPath = '../index.html';
  }*/
  const plugins = {
    object: [
      new ExtractTextPlugin({
        filename: 'css/app_.css', // waiting for fix [contenthash] 
        disable: false,
 //YA        allChunks: true,
      }),
    ],
  };
  return plugins;
}


module.exports = {
  generate,
};
