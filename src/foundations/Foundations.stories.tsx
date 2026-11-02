import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Foundations',
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const colors = [
  { token: 'background', swatch: 'bg-background', use: 'Page and component surfaces' },
  { token: 'foreground', swatch: 'bg-foreground', use: 'Text, borders and solid fills' },
  { token: 'muted-foreground', swatch: 'bg-muted-foreground', use: 'Secondary text' },
  { token: 'disabled', swatch: 'bg-disabled', use: 'Disabled controls only' },
]

export const Colors: Story = {
  render: () => (
    <ul className="flex max-w-xl flex-col gap-4">
      {colors.map(({ token, swatch, use }) => (
        <li key={token} className="flex items-center gap-4">
          <div className={`size-12 shrink-0 border border-foreground ${swatch}`} />
          <div>
            <p className="font-mono text-sm">{token}</p>
            <p className="text-sm text-muted-foreground">{use}</p>
          </div>
        </li>
      ))}
    </ul>
  ),
}

const typeScale = [
  { name: 'text-3xl semibold', className: 'text-3xl font-semibold' },
  { name: 'text-lg semibold', className: 'text-lg font-semibold' },
  { name: 'text-base', className: 'text-base' },
  { name: 'text-sm', className: 'text-sm' },
  { name: 'font-mono text-sm', className: 'font-mono text-sm' },
]

export const Typography: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      {typeScale.map(({ name, className }) => (
        <div key={name}>
          <p className="font-mono text-xs text-muted-foreground">{name}</p>
          <p className={className}>Sign in to your account</p>
        </div>
      ))}
    </div>
  ),
}

export const Themes: Story = {
  render: () => (
    <div className="grid gap-4 sm:grid-cols-2">
      {['light', 'dark'].map((theme) => (
        <div
          key={theme}
          data-theme={theme}
          className="border border-foreground bg-background p-6 text-foreground"
        >
          <p className="font-semibold">data-theme="{theme}"</p>
          <p className="text-sm text-muted-foreground">Any element can force a theme.</p>
        </div>
      ))}
    </div>
  ),
}
