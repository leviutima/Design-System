import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { Input } from './Input'

describe('Input', () => {
  it('accepts typing and native props', async () => {
    render(<Input aria-label="Name" maxLength={3} />)
    const input = screen.getByRole('textbox', { name: 'Name' })
    await userEvent.type(input, 'Gatehouse')
    expect(input).toHaveValue('Gat')
  })

  it('keeps its own attributes outside a Field', () => {
    render(<Input aria-label="Name" id="name" aria-invalid />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('id', 'name')
    expect(input).toBeInvalid()
  })

  it('forwards the ref to the input', () => {
    const ref = createRef<HTMLInputElement>()
    render(<Input aria-label="Name" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })
})
