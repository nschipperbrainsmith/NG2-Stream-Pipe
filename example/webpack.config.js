var LiveReloadPlugin = require('webpack-livereload-plugin');
var webpack = require('webpack');

module.exports = {
	resolve: {
		extensions: ['.ts', '.js', '.scss', '.css', '.html', '']
	},
	plugins: [
		new LiveReloadPlugin()
	],
	entry: './app/main.ts',
	output: {
		path: "./dist",
		publicPath: 'dist/',
		filename: "bundle.js"
	},
	devtool: 'source-map',
	module: {
		loaders: [
			// Support for TYPESCRIPT files.
			{ test: /\.ts$/, loader: 'ts-loader', exclude: [ /\.(spec|e2e|async)\.ts$/ ] },

			// support for .html as raw text
			{ test: /\.html$/,  loader: 'raw-loader' },

			// Support for SASS
			{ test: /\.scss$/, loaders: ["raw", "sass"]},

			// Support for CSS
			{ test: /\.css$/, loaders: ["raw", "css"]}
		]
	},
	devServer: {
		historyApiFallback: true,
		hot: true
	}
};