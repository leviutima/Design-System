import type { Meta, StoryObj } from '@storybook/react-vite'
import { Radio } from './Radio'

const meta = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  args: { label: 'Public client', name: 'client-type' },
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Checked: Story = { args: { defaultChecked: true } }
export const Disabled: Story = { args: { disabled: true } }
export const DisabledChecked: Story = { args: { disabled: true, defaultChecked: true } }

export const Group: Story = {
  render: () => (
    <fieldset className="flex flex-col gap-2">
      <legend className="mb-1 text-sm font-medium">Client type</legend>
      <Radio name="client-type-group" label="Public" defaultChecked />
      <Radio name="client-type-group" label="Confidential" />
    </fieldset>
  ),
}
