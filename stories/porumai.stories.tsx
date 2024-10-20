import type React from 'react'
import { useCallback } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { StoryFn } from '@storybook/react'
import { toast } from 'sonner'

import { useConfirm } from '../src/'
import { Toaster } from '@/components/ui/sonner'
import { Button } from '@/components/ui/button'
import Dialog from './Dialog'

function Porumai() {
  const { confirm, onConfirm, onCancel, open, onOpenChange } = useConfirm()

  const handleConfirm = useCallback(async () => {
    const hasConfirmed = await confirm()

    if (hasConfirmed) {
      toast.success('porumai ... confirmed  !!!')
    } else {
      toast.error('porumai .. .cancelled ... ')
    }
  }, [confirm])

  return (
    <div className="flex flex-col">
      <div className="p-4 bg-blue-50 text-blue-600 font-medium">
        {'porumai ... component'}
      </div>
      <div>
        <Button
          variant={'destructive'}
          onClick={() => {
            handleConfirm()
          }}
        >
          {'Delete Account'}
        </Button>
      </div>
      <Dialog
        open={open}
        onOpenChange={onOpenChange}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </div>
  )
}

function Root({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster richColors={true} closeButton={true} theme={'light'} />
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
