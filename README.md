# ngRamen

![Bower version](https://img.shields.io/bower/v/ng-ramen.svg)
[![Build Status](https://secure.travis-ci.org/ng-ramen/ng-ramen.svg)](https://travis-ci.org/ng-ramen/ng-ramen) [![Coverage Status](https://coveralls.io/repos/github/ng-ramen/ng-ramen/badge.svg?branch=master)](https://coveralls.io/github/ng-ramen/ng-ramen?branch=master)

A variety of Ramen made by [AngularJS](https://angularjs.org/) filters, components and services

<p align="center">
  <img src="https://raw.githubusercontent.com/astagi/mystatics/master/ng-ramen/ngramen-small.png"/>
</p>

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
