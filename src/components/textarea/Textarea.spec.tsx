import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { Field } from '../field/Field'
import { Textarea } from './Textarea'

describe('Textarea', () => {
  it('accepts typing', async () => {
    render(<Textarea aria-label="Notes" />)
    const textarea = screen.getByRole('textbox', { name: 'Notes' })
    await userEvent.type(textarea, 'Hello')
    expect(textarea).toHaveValue('Hello')
  })

  it('takes its state from a Field', () => {
    render(
      <Field label="Notes" error="Too short">
        <Textarea />
      </Field>,
    )
    const textarea = screen.getByRole('textbox', { name: 'Notes' })
    expect(textarea).toBeInvalid()
    expect(textarea).toHaveAccessibleDescription('Too short')
  })

  it('forwards the ref to the textarea', () => {
    const ref = createRef<HTMLTextAreaElement>()
    render(<Textarea aria-label="Notes" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement)
  })
})
