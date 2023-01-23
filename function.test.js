import { describe, test, expect } from '@jest/globals'

import fizzbuzz from './function.js'

describe('fizzbuzz', () => {
  test('returns "fizzbuzz" for multiples of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })

  test('returns "fizz" for multiples of 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  test('returns "buzz" for multiples of 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
  })

  test('returns "" for non-multiples of 3 or 5', () => {
    expect(fizzbuzz(1)).toBe('')
  })
})
