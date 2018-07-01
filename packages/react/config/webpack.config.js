const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const convertToKoa = require('koa-connect');
const connectHistoryApiFallback = require('connect-history-api-fallback');

const WebpackHtmlPlugin = require('html-webpack-plugin');
const WebpackBuildHashPlugin = require('webpack-plugin-hash');
const WebpackDefinePlugin = webpack.DefinePlugin;

const PATH_BUILD = path.join(process.cwd(), './dist');
const PATH_DEV = path.join(process.cwd(), './src/__demo/__server_static');
const PATH_SRC = path.join(process.cwd(), './src');
const PATH_HTML = path.join(PATH_SRC, './assets/index.html');
const PATH_JS = path.join(PATH_SRC, './index.js');

const PORT_DEV = process.env.PORT || 3000;
const MODE = process.env.NODE_ENV || 'development';

module.exports = {
  serve: {
    content: PATH_DEV,
    historyApiFallback: true,
    hot: true,
    port: PORT_DEV,
    dev: {
      publicPath: '/',
    },
    add: (app, middleware, options) => {
      app.use(convertToKoa(connectHistoryApiFallback()));
    },
  },
  devtool: 'inline-source-map',
  entry: PATH_JS,
  mode: MODE,
  output: {
    path: PATH_BUILD,
    publicPath: '/',
    filename: 'static/index.js',
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
              'react',
            ],
            plugins: [
              'transform-class-properties',
              'transform-object-rest-spread',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
  plugins: [
    new WebpackDefinePlugin({
      'global.app.environment': `"${process.env.NODE_ENV || 'production'}"`,
    }),
    new WebpackHtmlPlugin({
      template: PATH_HTML,
      filename: './index.html',
    }),
    new WebpackBuildHashPlugin({
      callback: (err, hash) => {
        if (!err) {
          fs.writeFileSync(path.join(PATH_BUILD, './.version'), hash);
        } else {
          console.error(
            'The following error happened while generating a build hash:'
          );
          console.error(err);
          throw err;
        }
      },
    }),
  ],
};
