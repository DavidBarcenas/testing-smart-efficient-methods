require('../__no-framework-mocks__/utils')

const utilsPath = require.resolve('../utils');
const mockUtilsPath = require.resolve('../__no-framework-mocks__/utils')
require.cache[utilsPath] = require.cache[mockUtilsPath]

const assert = require('assert');
const gameWar = require('../gameWar');
const utils = require('../utils');

const winner = gameWar('Davee', 'Josh')
assert.strictEqual(winner, 'Davee')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Davee', 'Josh'],
  ['Davee', 'Josh'],
])

delete require.cache[utilsPath]