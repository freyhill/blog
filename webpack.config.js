'use strict';
const path  = require('path');
module.exports = {
  mode: "development",
  devtool: process.env.NODE_ENV === 'development' ? 'eval-source-map' : 'source-map',
  entry: {
    'slide-card': path.join(__dirname, './react-demos/slide-card/index.jsx'),
  },
  output: {
    filename: 'react-demos/[name]/build.js',
    publicPath: '/'
  },
  module: {
    rules: [
        {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader:"babel-loader",
                options:{
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react",
                        {"plugins": ["@babel/plugin-proposal-class-properties"]} //这句很重要 不然箭头函数出错
                    ], 
                }
            },
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
            exclude: /node_modules/,
        },
        {
            test: /\.(scss|css)$/,
            use: [
                {loader: "style-loader"},
                { loader: "css-loader", options: { url: false, sourceMap: true } },
                { loader: "sass-loader", options: { sourceMap: true } }
            ],
            exclude: /node_modules/,
        },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
};
