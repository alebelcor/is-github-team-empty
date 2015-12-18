'use strict';

var ghGot = require('gh-got');

var getTeamUrl = require('./lib/get-team-url');
var filterResponse = require('./lib/filter-response');
var isGhTeamEmpty = require('./lib/is-gh-team-empty');
var pkg = require('./package.json');
var getGotOptions = {
  headers: {
    'user-agent': pkg.repository.url
  }
};

module.exports = function (teamId) {
  return ghGot.get(getTeamUrl(teamId), getGotOptions())
    .then(filterResponse)
    .then(isGhTeamEmpty)
    .catch(console.error);
};
