const assert = require('assert');
const gameWar = require('../gameWar');
const utils = require('../utils');

const originalGetWinner = utils.getWinner
utils.getWinner = (p1, p2) => p1

const winner = gameWar('Davee', 'Josh')
assert.strictEqual(winner, 'Davee')

utils.getWinner = originalGetWinner