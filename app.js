
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const express = require('express');
const app = express()
const path = require('path');
const config = require('./webpack.config');
let  port = 9111;

if (process.env.NODE_ENV === 'development') {
  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    stats: {
      chunkModules: false,
      colors: true,
    }
  }).listen(port, 'localhost', function (err) {
    if (err) {
      console.log(err);
    }
    console.log('Listening at http://localhost/' + port);
  });
} else {
  port = 9112;
  app.use(express.static(path.join(__dirname, './')));
  app.listen(port, () => console.log(`Listening at http://localhost:${port}!`))
}

