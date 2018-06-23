const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = function(opts = {}) {
  return {
    entry: {
      app: './src/app.ts'
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          include: srcPath
        },
        {
          test: /\.css$/,
          use: [
            opts.isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [require("autoprefixer")()],
              },
            }
          ]
        },
        {
          test: /\.html$/,
          use: [ {
            loader: 'html-loader',
            options: {
              minimize: opts.isProduction
            }
          }],
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'App'
      })
    ],
    resolve: {
      extensions: [ '.ts', '.js' ]
    },
    output: {
      filename: '[name].js',
      path: distPath
    }
  };
};
