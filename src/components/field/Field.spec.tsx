import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Input } from '../input/Input'
import { Field } from './Field'

describe('Field', () => {
  it('names the control with its label', () => {
    render(
      <Field label="Email">
        <Input />
      </Field>,
    )
    expect(screen.getByRole('textbox', { name: 'Email' })).toBeInTheDocument()
  })

  it('describes the control with the hint and the error', () => {
    render(
      <Field label="Email" hint="We only use it to sign in" error="Enter a valid email">
        <Input />
      </Field>,
    )
    const input = screen.getByRole('textbox', { name: 'Email' })
    expect(input).toHaveAccessibleDescription('We only use it to sign in Enter a valid email')
    expect(input).toBeInvalid()
  })

  it('does not mark the control invalid without an error', () => {
    render(
      <Field label="Email">
        <Input />
      </Field>,
    )
    expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-invalid')
  })

  it('passes required and disabled to the control', () => {
    render(
      <Field label="Email" required disabled>
        <Input />
      </Field>,
    )
    const input = screen.getByRole('textbox')
    expect(input).toBeRequired()
    expect(input).toBeDisabled()
  })

  it('uses the given id for the control', () => {
    render(
      <Field label="Email" id="email">
        <Input />
      </Field>,
    )
    expect(screen.getByRole('textbox')).toHaveAttribute('id', 'email')
  })
})
