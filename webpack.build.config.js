var webpack = require('webpack');

module.exports = {
	resolve: {
		extensions: ['.ts', '.js', '.scss', '.css', '.html', '']
	},
	entry: './src/stream.ts',
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			comments: false
		})
	],
	output: {
		filename: "stream.js"
	},
	module: {
		loaders: [
			// Support for TYPESCRIPT files.
			{ test: /stream\.ts$/, loader: 'ts-loader', exclude: [ /\.(spec|e2e|async)\.ts$/ ] },

			// support for .html as raw text
			{ test: /\.html$/,  loader: 'html?minimize=false' },

			// Support for SASS
			{ test: /\.scss$/, loaders: ["raw", "sass"]},

			// Support for CSS
			{ test: /\.css$/, loaders: ["raw", "css"]},

			// Assets etc.
			{ test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'}
		]
	},
	ts: {
		compilerOptions: {
			sourceMap: false,
			declaration: true,
			outDir: './'
		}
	}
};