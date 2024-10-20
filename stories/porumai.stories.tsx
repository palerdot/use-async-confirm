import type React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { StoryFn } from '@storybook/react'
import { toast } from 'sonner'

import { Toaster } from '@/components/ui/sonner'
import { Button } from '@/components/ui/button'

function Porumai() {
  return (
    <div className="flex flex-col">
      <div className="p-4 bg-blue-50 text-blue-600 font-medium">
        {'porumai ... component'}
      </div>
      <div>
        <Button
          variant={'secondary'}
          onClick={() => {
            console.log('porumai ... button clicked')
            toast.success('porumai ... button clicked')
          }}
        >
          {'porumai'}
        </Button>
      </div>
    </div>
  )
}

function Root({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster richColors={true} />
      {children}
    </>
  )
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Porumai> = {
  title: 'porumai component',
  component: () => (
    <Root>
      <Porumai />
    </Root>
  ),
}

export default meta

type Story = StoryObj<typeof Porumai>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
}
