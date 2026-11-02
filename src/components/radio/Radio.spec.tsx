import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { Radio } from './Radio'

describe('Radio', () => {
  it('keeps one option selected in a group', async () => {
    render(
      <>
        <Radio name="type" label="Public" />
        <Radio name="type" label="Confidential" />
      </>,
    )
    await userEvent.click(screen.getByText('Public'))
    await userEvent.click(screen.getByText('Confidential'))
    expect(screen.getByRole('radio', { name: 'Public' })).not.toBeChecked()
    expect(screen.getByRole('radio', { name: 'Confidential' })).toBeChecked()
  })

  it('forwards the ref to the input', () => {
    const ref = createRef<HTMLInputElement>()
    render(<Radio label="Public" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })
})
