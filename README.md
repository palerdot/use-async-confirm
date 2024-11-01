# `use-async-confirm`

Async, headless `useConfirm` hook that you can await on.

![tests](https://github.com/palerdot/use-async-confirm/actions/workflows/test.yml/badge.svg)

- **Async**: returns async `confirm` that you can await on
- **Headless**: No markup, context or provider to add. You get plain functions from hook that you can compose according to your needs. 
- **Better DX**: All the control flow stays in your event handler (e.g. onClick). You can simply await on the confirm callback and go on with your app logic

`v1.x` is compatible with `React` `v18`.

### Installation

```shell
# pnpm
pnpm add use-async-confirm

# npm
npm install use-async-confirm
```

### Quick Example

```javascript
// Example usage
import { useConfirm } from "use-async-confirm"

function MyComponent() {
    const { confirm, onConfirm, onCancel, open, onOpenChange } = useConfirm()

    const handleConfirm = async function () {
        // control flow stays in your event handler
        // you can just await on confirm
        const confirmed = await confirm()

        if (confirmed === true) {
            // confirmed action
            alert("User confirmed the action")
        } else {
            // user cancelled the action
            alert("User cancelled the action")
        }
    }

    return (
        <div>
            <Button onClick={handleConfirm}>Delete</Button>
            <MyModal open={open} onOpenChange={onOpenChange}>
                <button onClick={onConfirm}>Confirm</button>
                <button onClick={onCancel}>Cancel</button>
            </MyModal>
        </div>
    )
}
```

### Usage

#### Import `useConfirm`

```javascript
import { useConfirm } from 'use-async-confirm'

// you will get these helper functions that you can compose in your application logic
const { confirm, onConfirm, onCancel, open, onOpenChange } = useConfirm()
```

#### `useConfirm` returns following helper functions

| function    | type            | Description                                                    |
| ----------- |-----------------| -------------------------------------------------------------- |
| confirm     | async function  | This is the function that you can await on. `const hasConfirmed = await confirm()`. You can compose this function in your event handler or anywhere depending on your application logic.  |
| open        | boolean         | state indicatiing if the confirmation action in progress. You can pass this to your Modal (e.g. shadcn modal) to control opening/closing the modal |
| onOpenChange | function: (state: boolean) => void (or) React.Dispatch<React.SetStateAction<boolean>> | state update function.You can pass this to your modal (e.g. shadcn modal) or use this to control your modal display status |
| onConfirm    | function       | Calling this function will resolve the confirm action with `true` / truthy value. You can call this in your confirmation button in your modal. |
| onCancel    | function       | Calling this function will resolve the confirm action with `false` / falsy value. You can call this in your cancel button in your modal. |

### About

Works well with `shadcn` or other UI libraries as it is headless and gives you complete control over how you compose the hooks. Run `pnpm dev` locally to see an example of `shadcn` integration.
