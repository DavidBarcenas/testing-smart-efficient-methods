const gameWar = require('../gameWar');
const utils = require('../utils');

test('return winner', () => {
  jest.spyOn(utils, 'getWinner')
  utils.getWinner.mockImplementation((p1, p2) => p1)

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

  utils.getWinner.mockRestore()
})