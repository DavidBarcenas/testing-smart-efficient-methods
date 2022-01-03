const gameWar = require('../gameWar');
const utils = require('../utils');

jest.mock('../utils', () => {
  return {
    getWinner: jest.fn((p1, p2) => p1)
  }
})

test('return winner', () => {
  const winner = gameWar('Davee', 'Josh')
  expect(winner).toBe('Davee')
  expect(utils.getWinner.mock.calls).toEqual([
    ['Davee', 'Josh'],
    ['Davee', 'Josh'],
  ])

  utils.getWinner.mockReset()
})