var minimist = require("minimist");
var argv = minimist(process.argv.slice(process.argv[0] == 'node' ? 2 : 1));

module.exports = command;

function command (options) {
  var result = argv;

  var key;
  for (key in argv) {
    if (key == '_') continue;
    if (!options[key]) continue;

    result[options[key]] = argv[key];
  }

  if ((argv.version && !options.version) || (argv.v && !options.v)) {
    require('show-version')('../../');
  }

  if ((argv.help && !options.help) || (argv.h && !options.h)) {
    require('show-help')('../../');
  }

  return argv;
}
