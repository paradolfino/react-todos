var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: ['webpack-dev-server/client?http://127.0.0.1:8080',
	'webpack/only-dev-server',
	'./src'],
	out: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		modulesDirectories: ['node_modules', 'src'],
		extensions: ['', '.js']
	},
	module: {
		loaders: [
		{
			test: /\.jsx?$/,
			exclude: /node_module/,
			loader: ['react-hot','babel?presets[]=react,presets[]=es2015']
		}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};