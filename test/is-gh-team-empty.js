'use strict';

var test = require('ava');

var isGhTeamEmpty = require('../lib/is-gh-team-empty');
var team = {};

test('it should return true if the team is empty', function (t) {
  team['members_count'] = 0;
  t.true(isGhTeamEmpty(team));

  team['members_count'] = -1;
  t.true(isGhTeamEmpty(team));
});

test('it should return false when the team is not empty', function (t) {
  team['members_count'] = 1;
  t.false(isGhTeamEmpty(team));

  team['members_count'] = 5;
  t.false(isGhTeamEmpty(team));

  team['members_count'] = 10;
  t.false(isGhTeamEmpty(team));

  team['members_count'] = 100;
  t.false(isGhTeamEmpty(team));
});
