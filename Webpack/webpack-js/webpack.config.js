const ESlintPlugin = require("eslint-webpack-plugin");
const path = require("path");
const { resolve } = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "dist"),
  },
  plugins: [
    new ESlintPlugin({
      context: path.resolve(__dirname, "src"),
    }),
  ],
  mode:'development'
};
