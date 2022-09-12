const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * 代码分割：
 * 1. 多入口自动分割代码
 * 2. splitChunks
 * 3. 动态导入 import('...').then(module => { ... })
 *     
 */
// 取名： import(/** webpackChunkName: "math" */"./js/math").then()
// output 中加入 chunkFilename: "static/js/[name].js" 

module.exports = {
  // 数组方法会打包进入 main.js，而不是分割
  // entry:["./src/app.js", "./src/main.js"],
  entry: {
    app: "./src/app.js",
    main: "./src/main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
