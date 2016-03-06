var webpack = require('webpack');

module.exports = {
	resolve: {
		cache: false,
		extensions: ['.ts', '.js', '.scss', '.css', '.html', '']
	},
	devtool: 'inline-source-map',
	module: {
		loaders: [
			// Support for TYPESCRIPT files.
			{ test: /\.ts$/, loader: 'ts-loader', exclude: [ /\.(e2e|async)\.ts$/ ] },

			// support for .html as raw text
			{ test: /\.html$/,  loader: 'raw-loader' },

			// Support for SASS
			{ test: /\.scss$/, loaders: ["raw", "sass"]},

			// Support for CSS
			{ test: /\.css$/, loaders: ["raw", "css"]}
		]
	}
};