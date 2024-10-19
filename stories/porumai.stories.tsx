import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { StoryFn } from '@storybook/react'

function Porumai() {
  return (
    <div className="p-4 bg-blue-50 text-blue-600 font-medium">
      {'porumai ... component'}
    </div>
  )
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Porumai> = {
  title: 'porumai component',
  component: Porumai,
}

export default meta

type Story = StoryObj<typeof Porumai>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
}
