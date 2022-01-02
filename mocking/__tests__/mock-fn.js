const { expect } = require('@jest/globals');
const gameWar = require('../gameWar');
const utils = require('../utils');

test('return winner', () => {
  const originalGetWinner = utils.getWinner
  utils.getWinner = jest.fn((p1, p2) => p1)

  const winner = gameWar('Davee', 'Josh')
  expect(winner).toBe('Davee')
  // expect(utils.getWinner).toHaveBeenCalledTimes(2)
  // expect(utils.getWinner).toHaveBeenCalledWith('Davee', 'Josh')
  // expect(utils.getWinner).toHaveBeenNthCalledWith(1, 'Davee', 'Josh')
  // expect(utils.getWinner).toHaveBeenNthCalledWith(2, 'Davee', 'Josh')
  expect(utils.getWinner.mock.calls).toEqual([
    ['Davee', 'Josh'],
    ['Davee', 'Josh'],
  ])

  utils.getWinner = originalGetWinner
})