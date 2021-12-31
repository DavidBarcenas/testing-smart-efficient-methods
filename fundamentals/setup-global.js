async function test(title, callback) {
  try {
    await callback()
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
  }
}

global.test = test
global.expect = expect