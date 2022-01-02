const utils = require('./utils')

function gameWar(player1, player2) {
  const numberToWin = 2
  const player1Wins = 0
  const player2Wins = 0

  while (player1Wins < numberToWin && player2Wins < numberToWin) {
    const winner = utils.getWinner(player1, player2)

    if (winner === player1) {
      player1Wins += 1
    } else if (winner === player2) {
      player2Wins += 1
    }
  }

  return player1wins > player2Wins ? player1 : player2
}

module.exports = gameWar