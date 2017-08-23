const path = require('path');
const env = require('../env.js');

exports.devServer = env === 'production' ? {} : 
  { 
    contentBase: path.join(__dirname, '../../public'),
    historyApiFallback: true,
    stats: 'normal',
    hot: true,
    overlay: {
      errors: true,
      warnings: true,
    },
  };
