const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
});
