(function() {
  'use strict';

  var basher = require('./main.js');
  var cmd = basher({
    replace: 'echo "{1}" | sed -e "s/{2}/{3}/g"',
    grep: 'echo "{1}" | grep "{2}"'
  });

  var echo = basher('echo {1}');

  console.log(cmd.replace('hello, world!', 'hello', 'good bye'));
  console.log(cmd.grep('hi\nih\nhi\noj', 'j'));
}());
