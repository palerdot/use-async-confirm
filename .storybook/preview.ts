import type { Preview } from '@storybook/react'
import '../stories/lib/tailwind/theme.css'

const preview: Preview = {
  parameters: {
    actions: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
