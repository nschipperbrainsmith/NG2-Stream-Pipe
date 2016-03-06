var webpack = require('webpack');

module.exports = {
	resolve: {
		cache: false,
		extensions: ['.ts', '.js', '.scss', '.css', '.html', '']
	},
	entry: './app/main.ts',
	output: {
		path: "./dist",
		publicPath: 'dist/',
		filename: "bundle.js"
	},
	devtool: 'inline-source-map',
	module: {
		loaders: [
			// Support for TYPESCRIPT files.
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				exclude: [ /\.(e2e|async)\.ts$/ ],
				query: {
					"compilerOptions": {
						"noEmitHelpers": true,
						"removeComments": true,
					}
				}
			},

			// support for .html as raw text
			{ test: /\.html$/,  loader: 'raw-loader' },

			// Support for SASS
			{ test: /\.scss$/, loaders: ["raw", "sass"]},

			// Support for CSS
			{ test: /\.css$/, loaders: ["raw", "css"]}
		]
	}
};