import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { Field } from '../field/Field'
import { Select } from './Select'

const options = (
  <>
    <option value="public">Public</option>
    <option value="confidential">Confidential</option>
  </>
)

describe('Select', () => {
  it('changes the selected option', async () => {
    render(<Select aria-label="Type">{options}</Select>)
    const select = screen.getByRole('combobox', { name: 'Type' })
    await userEvent.selectOptions(select, 'confidential')
    expect(select).toHaveValue('confidential')
  })

  it('takes its name from a Field', () => {
    render(
      <Field label="Type">
        <Select>{options}</Select>
      </Field>,
    )
    expect(screen.getByRole('combobox', { name: 'Type' })).toBeInTheDocument()
  })

  it('forwards the ref to the select', () => {
    const ref = createRef<HTMLSelectElement>()
    render(
      <Select aria-label="Type" ref={ref}>
        {options}
      </Select>,
    )
    expect(ref.current).toBeInstanceOf(HTMLSelectElement)
  })
})
