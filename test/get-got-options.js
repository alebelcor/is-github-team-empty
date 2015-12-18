'use strict';

var test = require('ava');

var getGotOptions = require('../lib/get-got-options');
var expected = {
  headers: {
    'user-agent': 'https://github.com/alebelcor/is-github-team-empty'
  }
};

test('it should return the got options', function (t) {
  t.same(expected, getGotOptions());
});
