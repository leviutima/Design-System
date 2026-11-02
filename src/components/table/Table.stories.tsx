import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '../badge/Badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './Table'

const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const realms = [
  { name: 'legacy', displayName: 'Legacy', enabled: false },
  { name: 'master', displayName: 'Master', enabled: true },
  { name: 'shop', displayName: 'Shop', enabled: true },
]

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Display name</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {realms.map((realm) => (
          <TableRow key={realm.name}>
            <TableCell className="font-mono">{realm.name}</TableCell>
            <TableCell>{realm.displayName}</TableCell>
            <TableCell>
              <Badge variant={realm.enabled ? 'solid' : 'outline'}>
                {realm.enabled ? 'Enabled' : 'Disabled'}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}
