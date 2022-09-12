const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 多进程打包
const os = require('os');
const threads = os.cpus().length;

/**
 * webpack打包优化：
 * 1.HMR（hot module replacement）
 *   一个模块发生变化，只会重新打包这一个模块（而不是所有模块）。极大提升构建速度。
 *   style-loader内部实现了HMR。
 *   js文件默认无HMR。
 *   html文件无需使用HMR。
 *
 * 2.source-map
 *    提供源代码到构建后代码映射的技术。（如果构建后代码出错，通过映射可以找到对应的源代码）
 *    https://www.webpackjs.com/configuration/devtool/#devtool
 *    开发环境常用：eval-source-map
 *    生产环境常用：source-map
 *
 * 3.oneOf
 *    oneOf表示以下loader只会匹配一个，可以提高打包速度。
 *    注意：使用oneOf不能使用两个loader处理一个类型文件，需要的话要放外面
 *
 * 4.include/exclude
 * 		主要写在 loader 中
 * 		include: 只处理目录下的文件
 * 		exclude: 不处理目录下的文件
 * 		include 和 exclude 不能一起使用
 * 
 * 5.缓存
 * 	 主要是针对 js 处理进行缓存，如 eslint，babel 等
 *   babel-loader缓存：
 *     cacheDiretory: true
 *     cacheCompression: false
 *   eslint
 * 		 cache: true
 *     cacheLocation: 
 *   文件资源缓存
 *     hash：每次webpack构建是会生成一个唯一的hash值。
 *     chunkhash：根据chunk生产的hash值。
 *     contenthash: 根据文件内容的hash值。
 *
 * 6.tree shaking：移除 js 中未用到的代码
 *   前提：1.使用ES6 module   2.mode:'production'
 *   在package.json中配置 "sideEffects":"[*.css]"，可以让指定类型文件不进行tree shaking
 *
 * 7.code split：代码分割
 *
 * 8.lazy loading：懒加载
 *   js等到调用时才加载
 *   预加载：先加载其他资源，等浏览器空闲时再加载
 *
 * 9.PWA
 *   离线可以访问部分内容
 *
 * 10.多进程打包（thread-loader）
 *   进程启动和通信需要时间，只有打包时间消耗长才需要多进程打包
 *   每个进程启动需要时间，如果是小项目，可能不使用多进程打包会更快
 *
 * 11.external
 *   防止引入的外部包打包进来。而是使用cdn加载。
 *
 * 12.dll
 * 
 * 13.preload/prefetch
 * 懒加载文件，提前加载
 */

module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'js/built[contenthash:10].js',
		path: resolve(__dirname, 'build'),
	},
	module: {
		rules: [
			{
				oneOf:[
					{
						test: /\.css$/,
						use: ['style-loader', 'css-loader'],
					},
				]
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
	// 将node_modules中的内容打包分割
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	mode: 'production',
	devServer: {
		compress: true,
		port: 3000,
		open: true,
		// 模块热更新
		hot: true,
	},
	// 开启source-map
	devtool: 'source-map',
};
