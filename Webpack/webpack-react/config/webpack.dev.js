const path = require("path");
const EslintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const getStyleLoader = (pre) => {
  return [
    "style-loader",
    "css-loader",
    // postcss 处理兼容性，除此之外 package.json 中也需要配置 browserslist
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [["postcss-preset-env"]],
        },
      },
    },
    pre,
  ].filter(Boolean);
};

module.exports = {
  entry: "./src/main.js",
  output: {
    path: undefined,
    filename: "static/js/[name].js",
    chunkFilename: "static/js/[name].chunk.js",
    assetModuleFilename: "static/media/[hash:10][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: getStyleLoader(),
      },
      {
        test: /\.less$/,
        use: getStyleLoader("less-loader"),
      },
      {
        test: /\.(jpe?g|png|gif|webp|svg)/,
        type: "asset",
        // 小图片转 base64
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      {
        // 字体图标不做打包处理，原封不动的移动
        test: /\.(woff2?|ttf)/,
        type: "asset/resource",
      },
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "../src"),
        // babel 处理 js，同时配合外部 babel.config.js 使用
        loader: "babel-loader",
        options: {
          // babel 缓存
          cacheDirectory: true,
          cacheCompression: false,
          plugins: ["react-refresh/babel"],
        },
      },
    ],
  },
  plugins: [
    // eslint 配置，同时配合外部 .eslintrc.js 使用
    new EslintWebpackPlugin({
      context: path.resolve(__dirname, "../src"),
      exclude: "node_modules",
      // eslint 缓存
      cache: true,
      cacheLocation: path.resolve(
        __dirname,
        "../node_modules/.cache/.eslintcache"
      ),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    // react hmr
    new ReactRefreshWebpackPlugin(),
  ],
  mode: "development",
  devtool: "cheap-module-source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}.js`,
    },
  },
  resolve: {
    // 自动补全文件扩展名
    extensions: [".jsx", ".js", ".json"],
  },
  devServer: {
    host: "localhost",
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true, // 前端路径 404，返回 index
  },
};
