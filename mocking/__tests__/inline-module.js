const gameWar = require('../gameWar');
const utils = require('../utils');

jest.mock('../utils')

test('return winner', () => {
  const winner = gameWar('Davee', 'Josh')
  expect(winner).toBe('Davee')
  expect(utils.getWinner.mock.calls).toEqual([
    ['Davee', 'Josh'],
    ['Davee', 'Josh'],
  ])

  utils.getWinner.mockReset()
})