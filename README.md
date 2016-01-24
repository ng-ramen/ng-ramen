# ngRamen

![Bower version](https://img.shields.io/bower/v/ng-ramen.svg)
[![Build Status](https://secure.travis-ci.org/astagi/ng-ramen.svg)](https://travis-ci.org/astagi/ng-ramen) [![Coverage Status](https://coveralls.io/repos/astagi/ng-ramen/badge.svg?branch=master)](https://coveralls.io/r/astagi/ng-ramen?branch=master)

A variety of Ramen made by [AngularJS](https://angularjs.org/) filters, components and services

## Quick start

Installing via [Bower](bower)
```
bower install ng-ramen
```

Include the required bower component:
``` html
<script src="ng-ramen/ng-ramen.min.js"></script>
```

Inject the `ngRamen` module into your app:
``` JavaScript
angular.module('myAwesomeApp', ['ngRamen']);
```

## Development
For running the dev environment:
```
npm install
bower install
```

For running the demo
```
gulp build
cd demo/
npm install
bower install
```
