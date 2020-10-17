const path = require('path')
const dotenv = require('dotenv')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const environmentVariables = dotenv.config({ path: '.env' }).parsed || {}

const plugins = []

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') })
const envPlugin = new webpack.DefinePlugin({
  'process.env': JSON.stringify(environmentVariables),
})

plugins.push(HTMLWebpackPluginConfig, envPlugin)

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: {
          loader: 'css-loader',
        },
      },
    ],
  },
  resolve: {
    alias: {
      config: path.resolve(__dirname, 'config'),
      services: path.resolve(__dirname, 'src', 'services'),
    },
  },
  plugins,
}
