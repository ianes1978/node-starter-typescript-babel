const path = require('path');
const { NODE_ENV = 'production' } = process.env;
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  watch: NODE_ENV === 'development',
  entry: {
    main: './src/index.ts'
  },
  mode: NODE_ENV,
  target: 'node',
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
    chunkFilename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript']
          }
        }
      },

    ],
  },
  plugins: [


  ],
};
