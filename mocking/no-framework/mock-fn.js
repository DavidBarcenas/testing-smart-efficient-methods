const assert = require('assert');
const gameWar = require('../gameWar');
const utils = require('../utils');

function fn(impl = () => { }) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return impl(...args)
  }
  mockFn.mock = { calls: [] }
  mockFn.mockImplementation = newImpl => (impl = newImpl)
  return mockFn
}

function spyOn(obj, prop) {
  const originalValue = obj[prop]
  obj[prop] = fn()
  obj[prop].mockRestore = () => (obj[prop] = originalValue)
}

spyOn(utils, 'getWinner')
utils.getWinner.mockImplementation((p1, p2) => p1)

const winner = gameWar('Davee', 'Josh')
assert.strictEqual(winner, 'Davee')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Davee', 'Josh'],
  ['Davee', 'Josh'],
])

utils.getWinner.mockRestore()