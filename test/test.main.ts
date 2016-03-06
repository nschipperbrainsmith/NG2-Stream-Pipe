/**
 * Import a couple of angular specific files that are generally required by all unit-tests. Through the import 'test.main.te'
 * These include setting the providers in testing mode etc. And include the es6-shim, zone.js and reflect-metadata
 */
import 'es6-shim';
import 'zone.js';
import 'reflect-metadata';

import {setBaseTestProviders} from 'angular2/testing';
import {TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS} from 'angular2/platform/testing/browser';

setBaseTestProviders(
	TEST_BROWSER_PLATFORM_PROVIDERS,
	TEST_BROWSER_APPLICATION_PROVIDERS
);