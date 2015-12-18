'use strict';

var test = require('ava');

var getTeamUrl = require('../lib/get-team-url');

test('it should throw if the team ID is not valid', function (t) {
  t.throws(function () { getTeamUrl(); });
  t.throws(function () { getTeamUrl(null); });
  t.throws(function () { getTeamUrl(158456); });
  t.throws(function () { getTeamUrl(''); });
});

test('it should return the team URL', function (t) {
  t.same('teams/123456', getTeamUrl('123456'));
});
