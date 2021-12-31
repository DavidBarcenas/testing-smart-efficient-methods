const { sumAsync, subtractAsync } = require('./math')

test('sumAsync adds numbers asynchronously', async () => {
  const result = await sumAsync(10, 5)
  const expected = 15
  expect(result).tobe(expected)
})

test('subtractAsync subtracts numbers asynchronously', async () => {
  const result = await subtractAsync(10, 5)
  const expected = 5
  expect(result).tobe(expected)
})

