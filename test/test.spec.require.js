/**
 * Lets retrieve all the files that end with .spec.ts within this current directory
 * This file is loaded by the karma configuration which in turn loads all the required files.
 */

if (typeof Function.prototype.bind != 'function') {
	Function.prototype.bind = function bind(obj) {
		var args = Array.prototype.slice.call(arguments, 1),
			self = this,
			nop = function() {
			},
			bound = function() {
				return self.apply(
					this instanceof nop ? this : (obj || {}), args.concat(
						Array.prototype.slice.call(arguments)
					)
				);
			};
		nop.prototype = this.prototype || {};
		bound.prototype = new nop();
		return bound;
	};
}

require('./test.main.ts');
var testContext = require.context('.', true, /\.spec\.ts/);
testContext.keys().forEach(testContext);