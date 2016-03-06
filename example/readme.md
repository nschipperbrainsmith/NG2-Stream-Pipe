# Twensoc Angular2 base package. 
## This uses Webpack + NPM + Typescript + Angular2 and SASS to quickly create angular2 applications.

This package is easy to install and should be ready to be used as a base for production applications after installation.
Things included within this package are the gulp watch tasks to quickly write software that checks changes in scss files,
ts files to detect changes and if changes are detected to compile them down to their respective file type (js / css).

## Requirements pre-installation:

* npm download: https://nodejs.org/en/download/
* windows users only: make sure you read through the following guide https://github.com/Microsoft/nodejs-guidelines/blob/master/windows-environment.md#configuring-your-windows-development-environment (especially the parts about node-gyp)

## Installation:

1. npm install

## File structure used:

```
root/
│──app/
│	│──assets/
│	│	│──css/
│	│	│	│──style.scss
│	│	│
│	│	│──fonts/
│	│	│──image
│	│──components/
│	│──directives/
│	│──injectables/
│	│──app.ts
│	│──main.ts
│
│──test/
```

## NPM commands

* npm start (starts a server on port 8080 where the application can be viewed, this also creates a live reload server)
* npm run unit-test (runs karma unit tests)
* npm run e2e-test (runs protractor end to end tests)

## Useful links for various configuration / other options used within this package:

* Typescript compiler options for the tsconfig.json file https://github.com/Microsoft/TypeScript/wiki/Compiler-Options
* Some additional information when encountering errors with running karma https://www.npmjs.com/package/karma-systemjs 
* Tip make sure you have npm 3.2.* + this is due to a bug in older npm versions causing weird errors during npm install on windows systems. 