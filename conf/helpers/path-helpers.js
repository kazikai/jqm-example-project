var path = require('path');

module.exports.register = function (Handlebars, options, params)  {
  Handlebars.registerHelper('path', function (a, b)  {
      console.log( "a: "+ a );
      console.log( "b: "+ b );
      return  path.relative(a, b);
  });
};