(function() {
  'use strict';
  var basher = require('./');

  var str_replace = basher('echo "{1}" | sed -e "s/{2}/{3}/g"');
  console.log(str_replace('hello, world!', 'hello', 'good bye'));
}());
