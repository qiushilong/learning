const path = require("path");
const TestPlugin = require("./plugins/test-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {},
  plugins: [new TestPlugin()],
  mode: "development",
};
