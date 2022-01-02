const assert = require('assert');
const gameWar = require('../gameWar');
const utils = require('../utils');

function fn(impl) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return impl(...args)
  }
  mockFn.mock = { calls: [] }
  return mockFn
}

const originalGetWinner = utils.getWinner
utils.getWinner = fn((p1, p2) => p1)

const winner = gameWar('Davee', 'Josh')
assert.strictEqual(winner, 'Davee')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Davee', 'Josh'],
  ['Davee', 'Josh'],
])

utils.getWinner = originalGetWinner