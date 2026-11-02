import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Badge } from './Badge'

describe('Badge', () => {
  it('is solid by default', () => {
    render(<Badge>Enabled</Badge>)
    expect(screen.getByText('Enabled')).toHaveClass('bg-foreground')
  })

  it('merges a custom className', () => {
    render(
      <Badge variant="outline" className="px-3">
        Disabled
      </Badge>,
    )
    const badge = screen.getByText('Disabled')
    expect(badge).toHaveClass('bg-transparent', 'px-3')
    expect(badge).not.toHaveClass('px-1.5')
  })
})
