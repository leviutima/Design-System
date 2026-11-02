import type { Preview } from '@storybook/react-vite'
import './storybook.css'

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Color theme',
      toolbar: {
        title: 'Theme',
        icon: 'contrast',
        items: [
          { value: 'system', title: 'System' },
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: 'system' },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme as string
      return (
        <div
          data-theme={theme === 'system' ? undefined : theme}
          className="bg-background p-6 text-foreground"
        >
          <Story />
        </div>
      )
    },
  ],
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true },
  },
}

export default preview
