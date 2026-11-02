import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: { 'aria-label': 'Email', placeholder: 'you@example.com' },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithValue: Story = { args: { defaultValue: 'you@example.com' } }
export const Invalid: Story = { args: { defaultValue: 'you@', 'aria-invalid': true } }
export const Disabled: Story = { args: { disabled: true } }
