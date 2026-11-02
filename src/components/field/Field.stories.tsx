import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../button/Button'
import { Input } from '../input/Input'
import { Field } from './Field'

const meta = {
  title: 'Components/Field',
  component: Field,
  tags: ['autodocs'],
  args: { label: 'Email', children: <Input type="email" placeholder="you@example.com" /> },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithHint: Story = { args: { hint: 'We only use it to sign in.' } }
export const WithError: Story = { args: { error: 'Enter a valid email address.' } }
export const Required: Story = { args: { required: true } }
export const Disabled: Story = { args: { disabled: true } }

export const SignInForm: Story = {
  render: () => (
    <form className="flex flex-col gap-4" onSubmit={(event) => event.preventDefault()}>
      <Field label="Email" required>
        <Input type="email" autoComplete="off" />
      </Field>
      <Field label="Password" required error="Those credentials did not work.">
        <Input type="password" autoComplete="off" />
      </Field>
      <Button type="submit">Sign in</Button>
    </form>
  ),
}
