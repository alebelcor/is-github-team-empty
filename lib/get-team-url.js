'use strict';

module.exports = function (teamId) {
  if (typeof teamId !== 'string' || teamId.length === 0) {
    throw new Error('Team ID must be a valid string');
  }

  return 'teams/' + teamId;
};
