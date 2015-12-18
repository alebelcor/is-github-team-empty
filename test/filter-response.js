'use strict';

var test = require('ava');

var filterResponse = require('../lib/filter-response');
var response = { body: { foo: 'bar' } };

test('it should return the `body` member', function (t) {
  t.same({ foo: 'bar' }, filterResponse(response));
});
