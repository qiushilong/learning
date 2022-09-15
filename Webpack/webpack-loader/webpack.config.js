const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  },
  module: {
    rules: [
      // 使用自定义 loader
      {
        test: /\.js$/,
        loader: "./loader/test-loader.js",
      },
    ],
  },
  mode: "development",
};
