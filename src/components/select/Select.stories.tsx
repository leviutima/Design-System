import type { Meta, StoryObj } from '@storybook/react-vite'
import { Select } from './Select'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    'aria-label': 'Client type',
    children: (
      <>
        <option value="public">Public</option>
        <option value="confidential">Confidential</option>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Invalid: Story = { args: { 'aria-invalid': true } }
export const Disabled: Story = { args: { disabled: true } }
