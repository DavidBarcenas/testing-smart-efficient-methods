const { sum, subtract } = require('./math')

let result, expected

result = sum(10, 5)
expected = 15
expect(result).tobe(expected)

result = subtract(10, 5)
expected = 5
expect(result).tobe(expected)

function expect(actual) {
  return {
    tobe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
    toEqual(expected) { }
  }
}