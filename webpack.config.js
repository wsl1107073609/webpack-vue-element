//webpack config

var path = require('path');
var webpack = require('webpack');

module.exports = {

	devtool: '#eval-source-map',

	//input
	entry: './src/main.js',

	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.css$/,
				loader: 'style-loader ! css-loader'
			}

		]
	},

	devServer: {
		historyApiFallback: true,
		noInfo: true
	},

	resolve: {
		alias: {
			'vue': 'vue/dist/vue.common.js'
		}
	}




} 