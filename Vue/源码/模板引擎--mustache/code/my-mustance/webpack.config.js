const path = require('path');

module.exports = {
	mode: 'development',
	entry: './index.js',
	output: {
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 8080,
	},
};
