const webpack = require('webpack');
const path = require('path');

function configFactory({ mode } = {}) {
  return {
    entry: {
      main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
      path: path.resolve(__dirname, './build'),
      filename: '[name]-[hash].js',
      chunkFilename: '[name]-[chunkhash].js',
    },
    resolve: {
      extensions: ['.js'],
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: [/node_modules/]
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(mode)
        }
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false,
        },
      })
    ]
  }
}

module.exports = configFactory;
