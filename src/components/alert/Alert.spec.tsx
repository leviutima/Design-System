import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Alert } from './Alert'

describe('Alert', () => {
  it('announces information politely by default', () => {
    render(<Alert title="Saved">The realm was updated.</Alert>)
    expect(screen.getByRole('status')).toHaveTextContent('SavedThe realm was updated.')
  })

  it('announces errors immediately', () => {
    render(<Alert tone="error">The realm could not be saved.</Alert>)
    expect(screen.getByRole('alert')).toHaveTextContent('The realm could not be saved.')
  })

  it('lets the caller choose another role', () => {
    render(<Alert role="note">Read this first.</Alert>)
    expect(screen.getByRole('note')).toBeInTheDocument()
  })
})
