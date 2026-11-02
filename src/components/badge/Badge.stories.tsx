import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: { variant: { control: 'inline-radio', options: ['solid', 'outline'] } },
  args: { children: 'Enabled' },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Solid: Story = {}
export const Outline: Story = { args: { variant: 'outline', children: 'Disabled' } }
