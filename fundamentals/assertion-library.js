const { sum, subtract } = require('./math')

test('sum add numbers', () => {
  const result = sum(10, 5)
  const expected = 15
  expect(result).tobe(expected)
})

test('subtract subtracts numbers', () => {
  const result = subtract(10, 5)
  const expected = 5
  expect(result).tobe(expected)
})

function test(title, callback) {
  try {
    callback()
    console.log(`✓ ${title}`)
  } catch (error) {
    console.error(`✗ ${title}`)
    console.error(error)
  }
}

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