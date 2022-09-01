/**
 * 不使用 webpack.config.js 运行指令：
 * 开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
 * 生成环境：webpack ./src/index.js -o ./build/built.js --mode=production
 *
 * webpack 配置文件：
 * entry：入口起点
 *   类型：string，array，object
 *   string：单入口。打包形成一个chunk（chunk默认为main），输出一个bundle文件。
 *   array：多入口。所有入口文件只会形成一个chunk，输出一个bundle文件。
 *   object：多入口。每个入口文件形成一个chunk（chunk为key值），输入一个bundle文件。
 *
 * output：出口
 *   filename：输出文件名称（可以加通过 / 加入目录）
 *   path：输出文件的目录
 *   pubilcPath：所有资源引入的公共路径前缀
 *   chunkFilename：非入口chunk的名称
 */
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// 入口
	entry: './src/index.js',
	// 输出
	output: {
		filename: 'build.js',
		path: resolve(__dirname, 'build'), // 绝对路径
	},
	// loader
	module: {
		rules: [
			{
				// 匹配文件
				test: /\.css$/,
				// 使用的 loader
				use: [
					// use 执行顺序从后面到前面
					// style-loader：创建style标签，插入html的head中
					'style-loader',
					// css-loader：将css文件变成commonjs模块加载到js中
					'css-loader',
				],
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader'],
			},
			// {
			// 	test: /\.(jpg|png|gif)$/,
			// 	// url-loader依赖file-loader，需要同时下载file-loader
			// 	// 只使用一个loader，可以直接使用loader
			// 	loader: 'url-loader',
			// 	options: {
			// 		// 图片大小小于8kb，就会按base64处理
			// 		// 使用base64可以减少请求数量（减轻服务器压力）
			// 		// 但会使得图片体积变大（文件请求速度下降）
			// 		limit: 8 * 1024,
			// 		esModule: false,
			// 	},
			// },
			{
				test: /\.html$/,
				// 处理html文件的img图片（复杂引入img，供url-loader使用）
				loader: 'html-loader',
			},
		],
	},
	// plugins
	plugins: [
		// 默认创建一个空的html，自动打包引入其他资源
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
	mode: 'development',
	// webpack-dev-server配置
	// 自动编译，自动打开浏览，自动刷新浏览器
	devServer: {
		// contentBase: resolve(__dirname, 'build'),
		// 开启gzip压缩
		compress: true,
		port: 3000,
		open: true,
	},
};
