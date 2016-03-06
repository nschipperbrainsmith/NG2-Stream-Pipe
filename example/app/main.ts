import '!style!css!sass!./assets/css/style.scss';

import 'es6-shim';
import 'zone.js';
import 'reflect-metadata';

import {provide, enableProdMode} from 'angular2/core';
import {bootstrap, ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/browser';
import {CUSTOM_PROVIDERS} from './injectables/providers';
import {AppComponent} from './app'

//set the environment type
const ENV_PROVIDERS = [];
if ('production' === process.env.ENV) enableProdMode();
else  ENV_PROVIDERS.push(ELEMENT_PROBE_PROVIDERS);

/**
 * We bootstrap or application here. We only add our CUSTOM PROVIDERS into the bootstrap to keep this class nice and clean
 * If we require other providers please add those to the array of providers within ./injectables/providers/ and not here!
 */
document.addEventListener('DOMContentLoaded', function main() {
	bootstrap(AppComponent, [ENV_PROVIDERS, CUSTOM_PROVIDERS])
		.catch(error => console.error(error));
});