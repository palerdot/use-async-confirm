import { renderHook, act, waitFor } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

import { useConfirm } from './'

describe('use-async-confirm', () => {
  test('onConfirm() works fine', async () => {
    let hasConfirmed: boolean | undefined = undefined
    const { result } = renderHook(() => useConfirm())
    // it should be not open by default
    expect(result.current.open).toBeFalsy()
    // update tracker value for testing
    act(() => {
      result.current.confirm().then(value => {
        hasConfirmed = value
      })
    })
    // now it should be OPEN
    expect(result.current.open).toBeTruthy()
    // confirm the operation
    await waitFor(
      () => {
        result.current.onConfirm()
      },
      {
        // timeout: 5000,
      }
    )
    // check for confirmation
    expect(hasConfirmed).toBeTruthy()
    // modal should be closed
    expect(result.current.open).toBeFalsy()
  })

  test('onCancel() works fine', async () => {
    let hasConfirmed: boolean | undefined = undefined
    const { result } = renderHook(() => useConfirm())
    // it should be not open by default
    expect(result.current.open).toBeFalsy()
    // update tracker value for testing
    act(() => {
      result.current.confirm().then(value => {
        hasConfirmed = value
      })
    })
    // now it should be OPEN
    expect(result.current.open).toBeTruthy()
    // cancel the operation
    await waitFor(
      () => {
        result.current.onCancel()
      },
      {
        // timeout: 5000,
      }
    )
    // check for confirmation
    expect(hasConfirmed).toBeFalsy()
    // modal should be closed
    expect(result.current.open).toBeFalsy()
  })
})
