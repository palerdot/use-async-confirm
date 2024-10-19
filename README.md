# `use-async-confirm`

Async, headless `useConfirm` hook that you can await on.

- **Async**: returns async `confirm` that you can await on
- **Headless**: No markup, context or provider to add. You get plain functions from hook that you can compose according to your needs. 
- **Better DX**: All the control flow stays in your event handler (e.g. onClick). You can simply await on the confirm callback and go on with your app logic

```javascript
// Example usage
import { confirm, onConfirm, onCancel, open, onOpenChange } from "use-async-confirm"

function MyComponent() {
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