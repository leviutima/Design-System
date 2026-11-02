import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { Button, buttonVariants } from './Button'

describe('Button', () => {
  it('does not submit forms by default', () => {
    render(<Button>Save</Button>)
    expect(screen.getByRole('button', { name: 'Save' })).toHaveAttribute('type', 'button')
  })

  it('calls onClick when pressed', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Save</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('blocks clicks and reports progress while loading', async () => {
    const onClick = vi.fn()
    render(
      <Button loading onClick={onClick}>
        Save
      </Button>,
    )
    const button = screen.getByRole('button', { name: 'Save' })
    await userEvent.click(button)
    expect(onClick).not.toHaveBeenCalled()
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('aria-busy', 'true')
  })

  it('lets className replace a variant class', () => {
    render(<Button className="h-12">Save</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('h-12')
    expect(button).not.toHaveClass('h-10')
  })

  it('forwards the ref to the button', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<Button ref={ref}>Save</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('exposes its classes for links styled as buttons', () => {
    expect(buttonVariants({ variant: 'secondary', size: 'sm' })).toContain('h-8')
  })
})
