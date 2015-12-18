'use strict';

var ghGot = require('gh-got');

var getTeamUrl = require('./lib/get-team-url');
var getGotOptions = require('./lib/get-got-options');
var filterResponse = require('./lib/filter-response');
var isGhTeamEmpty = require('./lib/is-gh-team-empty');

module.exports = function (teamId) {
  return ghGot.get(getTeamUrl(teamId), getGotOptions())
    .then(filterResponse)
    .then(isGhTeamEmpty)
    .catch(console.error);
};
