import { describe, expect, it } from 'vitest'
import { cn } from './cn'

describe('cn', () => {
  it('joins classes and skips falsy values', () => {
    expect(cn('a', false, undefined, 'b')).toBe('a b')
  })

  it('lets a later Tailwind class replace an earlier one', () => {
    expect(cn('px-3 text-sm', 'px-6')).toBe('text-sm px-6')
  })
})
