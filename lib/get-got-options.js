'use strict';

var pkg = require('../package.json');

module.exports = function () {
  return {
    headers: {
      'user-agent': 'https://github.com/alebelcor/' + pkg.name
    }
  };
};
