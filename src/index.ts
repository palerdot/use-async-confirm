import { useState, useCallback } from 'react'

type ReturnValue = {
  open: boolean
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>
  onConfirm: () => void
  onCancel: () => void
  confirm: () => Promise<boolean>
}

function useConfirm(): ReturnValue {
  const [open, onOpenChange] = useState(false)
  const [resolver, setResolver] = useState(() => (v: boolean) => {})

  const onConfirm = useCallback(() => {
    resolver(true)
  }, [resolver])
  const onCancel = useCallback(() => {
    resolver(false)
  }, [resolver])

  const handler = useCallback(
    (res: (val: boolean) => void, rej: (reason: string) => void) => {
      setResolver(() => res)
    },
    []
  )
  const confirm: () => Promise<boolean> = useCallback(() => {
    onOpenChange(true)
    return new Promise(handler)
  }, [handler])

  return {
    open,
    onOpenChange,
    onConfirm,
    onCancel,
    confirm,
  }
}

export default useConfirm
