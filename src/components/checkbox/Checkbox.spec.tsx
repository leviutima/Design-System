import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('toggles when its label is clicked', async () => {
    render(<Checkbox label="Remember me" />)
    await userEvent.click(screen.getByText('Remember me'))
    expect(screen.getByRole('checkbox', { name: 'Remember me' })).toBeChecked()
  })

  it('does not toggle while disabled', async () => {
    render(<Checkbox label="Remember me" disabled />)
    await userEvent.click(screen.getByText('Remember me'))
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('forwards the ref to the input', () => {
    const ref = createRef<HTMLInputElement>()
    render(<Checkbox label="Remember me" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })
})
