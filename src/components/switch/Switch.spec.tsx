import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { Switch } from './Switch'

describe('Switch', () => {
  it('turns on when clicked', async () => {
    render(<Switch label="Enabled" />)
    const toggle = screen.getByRole('switch', { name: 'Enabled' })
    await userEvent.click(toggle)
    expect(toggle).toBeChecked()
  })

  it('toggles with the keyboard', async () => {
    render(<Switch label="Enabled" />)
    await userEvent.tab()
    await userEvent.keyboard(' ')
    expect(screen.getByRole('switch')).toBeChecked()
  })

  it('forwards the ref to the input', () => {
    const ref = createRef<HTMLInputElement>()
    render(<Switch label="Enabled" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })
})
