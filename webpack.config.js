const path = require('path');
const webpack = require('webpack');
var UglifyJsPlugin = require('uglify-js-plugin');
module.exports = {
    mode: 'none',
  entry: {
    app: "./app/assets/scripts/index.js"
    },

  output: {
    path: path.resolve(__dirname,"./app/temp/scripts"),
    filename: "app.js"
  },

  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
        test: /\.html$/,
        loader: 'html-loader'
    }
  ]
},
   plugins: [

          /*  new UglifyJsPlugin({
            compress: true, //default 'true', you can pass 'false' to disable this plugin
            debug: true //default 'false', it will display some information in console
        })
        */

   ] 
 
};

