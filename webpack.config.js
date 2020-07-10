const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./src/app.js",
  output: {
    filename: "js/bundle.js",
  },
  devServer: {
    open: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
};

module.exports = config;
