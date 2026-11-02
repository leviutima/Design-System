import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button, buttonVariants } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { children: 'Save changes' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'ghost'] },
    size: { control: 'inline-radio', options: ['sm', 'md'] },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
export const Secondary: Story = { args: { variant: 'secondary', children: 'Cancel' } }
export const Ghost: Story = { args: { variant: 'ghost', children: 'Skip for now' } }
export const Small: Story = { args: { size: 'sm' } }
export const Loading: Story = { args: { loading: true, children: 'Saving' } }
export const Disabled: Story = { args: { disabled: true } }

export const AsLink: Story = {
  render: () => (
    <a href="#docs" className={buttonVariants({ variant: 'secondary' })}>
      Read the docs
    </a>
  ),
}
