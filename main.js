(function() {
  'use strict';
  var execSync = require('exec-sync');

  // basher({ function_name: <code> })
  module.exports = function(bindings) {
    if(bindings === undefined)
      throw new Error('invalid argument');

    // e.g. basher(<code>)
    if(typeof bindings === 'string')
      return exec.bind(null, bindings);
    else if(typeof bindings !== 'object')
      throw new Error('unknown argument type');

    var functions = function() {},
        binding,
        output;

    for(var name in bindings)
      functions[name] = exec.bind(null, bindings[name]);

    return functions;
  };

  function exec(binding) {
    var args = Array.prototype.slice.call(arguments, 0),
        i = 1;
    while(binding.indexOf('{' + i + '}') !== -1)
      binding = binding.replace('{' + i + '}', args[i++]);

    return execSync(binding);
  }
}());
