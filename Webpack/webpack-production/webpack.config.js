const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

/**
 * 对html文件的处理：
 * 压缩html
 */

/**
 * 对css文件的处理：
 * 1.抽离js中的css，单独成为css文件（mini-css-extract-plugin）
 * 2.css内容兼容低版本浏览器  （postcss-loader）
 * 3.css压缩（optimize-css-assets-webpack-plugin）
 */

/**
 * 对js文件的处理：
 * 1.js语法检查（eslint，eslint-loader）
 *   使用airbnb风格（eslint-config-aribnb-base，eslint-plugin-import）
 * 2.js兼容性处理，ES6+降级（babel-loader，@babel/core，@babel/preset-env）
 *   处理全部兼容问题（@babel/polyfill，或者core-js）
 * 3.js压缩（mode: 'production'）
 */

module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'js/built.js',
		path: resolve(__dirname, 'build'),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					// 'style-loader',
					// 这个loader取代 style-loader。作用：提取js中的css成单独文件
					MiniCssExtractPlugin.loader,
					'css-loader',
					// 使用postcss来进行兼容性处理
					'postcss-loader',
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				// loader: 'eslint-loader',
				// options: {
				// 自动修复
				// fix: true,
				// },
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'],
				},
			},
			{
				test: /\.(jpg|png|gif)/,
				loader: 'url-loader',
				options: {
					limit: 8 * 1024,
					outputPath: 'imgs',
				},
			},
			{
				exclude: /\.(js|css|html|jpg|png|gif)/,
				loader: 'file-loader',
				options: {
					outputPath: 'media',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			minify: {
				// 删除空格
				collapseWhitespace: true,
				// 删除注释
				removeComments: true,
			},
		}),
		// 将css提取成单独文件，提高js的请求速度。
		new MiniCssExtractPlugin({
			// 对输出文件重命名
			filename: 'css/built.css',
		}),
		// css压缩插件
		new OptimizeCssAssetsWebpackPlugin(),
	],
	// 生产环境自动压缩js
	mode: 'production',
};
