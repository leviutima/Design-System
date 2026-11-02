import type { Meta, StoryObj } from '@storybook/react-vite'
import { Alert } from './Alert'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: { tone: { control: 'inline-radio', options: ['info', 'error'] } },
  args: { title: 'Realm saved', children: 'New sign-ins use these settings right away.' },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {}

export const Error: Story = {
  args: {
    tone: 'error',
    title: 'The realm could not be saved',
    children: 'Check your connection and try again.',
  },
}

export const TitleOnly: Story = { args: { children: undefined } }
