/*jshint node: true*/
/*global exports: true*/

/**
 * Protractor tests configurations. This causes all *.e2e.ts test files to be run
 * This validates all the end to end tests that have been written.
**/
var packageJsonCnf = require('./package.json');
exports.config = {
	baseUrl: packageJsonCnf.baseUrl,
	allScriptsTimeout: 11000,
	seleniumServerJar: "node_modules/protractor/selenium/selenium-server-standalone-2.51.0.jar",
	capabilities: {
		'browserName': 'chrome',
		'chromeOptions': {
			'args': ['show-fps-counter=true']
		}
	},
	framework: 'jasmine',
	specs: [
		'test/**/**.e2e.ts',
		'test/**/*.e2e.ts'
	],
	jasmineNodeOpts: {
		defaultTimeoutInterval: 60000,
		showTiming: true,
		showColors: true
	},
	onPrepare: function () {
		browser.ignoreSynchronization = true;
	},
	useAllAngular2AppRoots: true
};