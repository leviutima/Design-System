import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './Table'

describe('Table', () => {
  it('links the cells to their column headers', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>master</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    )
    expect(screen.getByRole('columnheader', { name: 'Name' })).toHaveAttribute('scope', 'col')
    expect(screen.getByRole('cell', { name: 'master' })).toBeInTheDocument()
  })

  it('applies className to the table, not its scroll wrapper', () => {
    render(<Table className="table-fixed" />)
    expect(screen.getByRole('table')).toHaveClass('table-fixed')
  })
})
