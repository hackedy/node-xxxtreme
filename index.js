var xtreme_fs = require('fs');
require.extensions['.js'] = function(module, filename) {
  var xtreme_data = xtreme_fs.readFileSync(filename).toString();
  var plain_data = xtreme_data.replace(/(x|\\u0078)+/g, 'x').replace(/(X|\\u0058)+/g, 'X');
  module._compile(plain_data, filename);
};
