import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './Card'

describe('Card', () => {
  it('renders its parts in order, with the title as a heading', () => {
    render(
      <Card data-testid="card">
        <CardHeader>
          <CardTitle>Shop</CardTitle>
          <CardDescription>Customer accounts</CardDescription>
        </CardHeader>
        <CardContent>Three clients</CardContent>
        <CardFooter>Updated today</CardFooter>
      </Card>,
    )
    expect(screen.getByRole('heading', { name: 'Shop' })).toBeInTheDocument()
    expect(screen.getByTestId('card')).toHaveTextContent(
      'ShopCustomer accountsThree clientsUpdated today',
    )
  })

  it('merges a custom className', () => {
    render(<Card data-testid="card" className="border-2" />)
    const card = screen.getByTestId('card')
    expect(card).toHaveClass('border-2')
    expect(card).not.toHaveClass('border')
  })
})
