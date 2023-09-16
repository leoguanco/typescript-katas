import { describe, it, expect } from 'vitest'
import { getHighestNumber } from './getHighestNumber'

describe('getHighestNumber', () => {
  it('should get the zero element in the list if the list is empty', () => {
    const actual = getHighestNumber([])

    expect(actual).toBeNull()
  })

  it('should get one element if the list has one element', () => {
    const actual = getHighestNumber([1])

    expect(actual).toBe(1)
  })

  it('should get the highest element if the list has more than one element', () => {
    const actual = getHighestNumber([1, 2, 3])

    expect(actual).toBe(3)
  })
})
