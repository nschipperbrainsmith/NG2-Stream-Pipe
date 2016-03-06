/**
 * Karma configuration to run the specified unit tests within the test folder.
 * All files with the name <<filename>>.spec.js will be run by this test runner.
 */

var webpackConfig = require('./webpack.test.config.js');
module.exports = function (config) {
	config.set({
		basePath: '',
		// Start these browsers, currently available:
		// - Chrome
		// - Firefox
		// - PhantomJS
		browsers: ['PhantomJS'],
		browserNoActivityTimeout: 100000,
		frameworks: [
			'jasmine'
		],
		// level of logging
		// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
		logLevel: config.LOG_DISABLE,
		autoWatch: false,
		singleRun: true,
		port: 9876,
		files: [
			{pattern: './test/test.spec.require.js', watched: false}
		],
		preprocessors: {
			'./test/test.spec.require.js': ['webpack', 'sourcemap']
		},
		webpack: webpackConfig,
		webpackServer: {
			noInfo: true
		}
	});
};
