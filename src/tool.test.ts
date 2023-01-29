import { describe, expect, it,test } from 'vitest'
import { sum,generateRandomColor } from './tool'

test('sum',()=>{
  expect (sum(1,2)).toBe(3)
})

// it('generateRandomColor', () => {
//   expect(generateRandomColor()).toEqual([])
// })