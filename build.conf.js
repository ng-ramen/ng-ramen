var fs = require('fs');
var pkg = require('./package.json');

module.exports = {
  banner: '/*!\n' +
    ' * ngRamen\n' +
    ' * v' + pkg.version +'\n' +
    ' * Copyright 2016 Andrea Stagi stagi.andrea@gmail.com/\n' +
    ' * See LICENSE in this repository for license information\n' +
    ' */\n',

  closureStart: '(function(){\n',
  closureEnd: '\n})();',

  dist: 'dist',
  demo : {
    ngRamen : 'demo/lib/ngRamen/dist',
    lib : 'demo/lib',
    www : 'demo'
  },

  templateFiles: [
    'template/**/*.html',
  ],

  pluginFiles: [
    'src/module.js',
    'src/filters/*.js',
    'src/services/*.js',
    'src/components/*.js',
    'template/**/*.html.js'
  ],

  versionData: {
    version: pkg.version
  }
};
