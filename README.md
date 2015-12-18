# is-github-team-empty

> Check if a GitHub team is empty

[![npm version](https://img.shields.io/npm/v/is-github-team-empty.svg)](https://npmjs.org/package/is-github-team-empty)
[![Build Status](https://img.shields.io/travis/alebelcor/is-github-team-empty/master.svg)](https://travis-ci.org/alebelcor/is-github-team-empty)
[![Test Coverage](https://img.shields.io/coveralls/alebelcor/is-github-team-empty/master.svg)](https://coveralls.io/github/alebelcor/is-github-team-empty)

## Install

```bash
npm install --save is-github-team-empty
```

## Setup

Set up `GITHUB_TOKEN` environment variable with your OAuth GitHub access token.

## Usage

```js
var isGithubTeamEmpty = require('is-github-team-empty');

isGithubTeamEmpty('1234567');
//=> true (or false)
```

## API

### isGithubTeamEmpty(teamId)

Returns a **promise** that resolves to a boolean value of whether or not a GitHub team is without
members.

#### teamId

Type: `string`

The ID of the GitHub team.

## License

MIT © Alejandro Beltrán
