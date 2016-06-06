var path = require('path');
var webpack = require('webpack');
 
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin(
	{
		template: __dirname + '/src/index.html',
		filename: 'index.html',
		inject: 'body'
	}
)

module.exports = {
	entry: './src/app.js',
	output: {
		path: __dirname + '/dist',
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015','react']
				}				
			}
		]
	},
	plugins: [HtmlWebpackPluginConfig]
};

