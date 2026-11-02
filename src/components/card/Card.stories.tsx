import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../button/Button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Shop</CardTitle>
        <CardDescription>Customer accounts for the online store.</CardDescription>
      </CardHeader>
      <CardContent>3 clients and 1,204 users.</CardContent>
      <CardFooter>
        <Button size="sm">Open realm</Button>
        <Button size="sm" variant="ghost">
          Disable
        </Button>
      </CardFooter>
    </Card>
  ),
}
