'use strict';

module.exports = function (team) {
  return team['members_count'] <= 0;
};
