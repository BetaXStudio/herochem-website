# Animation Fix: CSS Transitions Not Working on Heavy DOM Pages

## Problem
The `SimpleCartModal` close animation was not working on the `/categories` page, but worked correctly on the home page (`/`). The modal would disappear instantly without the 250ms opacity/transform transition.

## Root Cause
On pages with heavy DOM updates (like the Categories page with its complex product grid, filters, and multiple state updates), React's state changes can batch in a way that skips the visual "closing" state. 

The original code:
```tsx
const closeCart = () => {
  if (isClosing || !isOpen) return;
  setIsClosing(true);  // Browser may not paint this before...
  setTimeout(() => {
    setIsOpen(false);  // ...this gets executed
    setIsClosing(false);
  }, 250);
};
```

The issue: `setIsClosing(true)` triggers a React re-render, but the browser might not have time to paint the new CSS state (opacity: 0, transform applied) before the setTimeout callback runs. On simpler pages this works fine, but on complex pages with CSS containment (`contain: layout style`) and many DOM nodes, the browser's paint cycle can be delayed or batched.

## Solution
Use nested `requestAnimationFrame` calls to ensure the browser has actually painted the closing state before starting the timeout:

```tsx
const closeCart = () => {
  if (isClosing || !isOpen) return;
  // First rAF: Ensure React has committed the state change
  requestAnimationFrame(() => {
    setIsClosing(true);
    // Second rAF: Ensure the browser has painted the new CSS state
    requestAnimationFrame(() => {
      // NOW start the timeout - animation is guaranteed to be visible
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 250);
    });
  });
};
```

## Why This Works
1. **First `requestAnimationFrame`**: Defers the state change to the next animation frame, ensuring we're in sync with the browser's render cycle
2. **`setIsClosing(true)`**: Triggers React re-render with new CSS values (opacity: 0, transform offset)
3. **Second `requestAnimationFrame`**: Waits for the browser to actually paint the frame with the new CSS values
4. **`setTimeout(250ms)`**: Now the animation is visible, so we wait for it to complete before hiding

## Key Insight
The double `requestAnimationFrame` pattern is essential for CSS transitions that depend on React state:
- Single rAF: Only ensures we're at the start of a frame
- Double rAF: Ensures we're at the start of the NEXT frame, meaning the previous frame (with our CSS change) has been painted

## When to Apply This Fix
Use this pattern when:
- A CSS transition doesn't play on certain pages but works on others
- The problematic page has heavy DOM (many elements, complex layouts)
- The page uses CSS containment (`contain: layout style paint`)
- The page has frequent state updates that could batch with your animation state

## Related CSS in the Modal
```tsx
style={{
  transition: "transform 250ms cubic-bezier(...), opacity 250ms cubic-bezier(...)",
  opacity: (isOpen && !isClosing) ? 1 : 0,
  transform: (isOpen && !isClosing) ? "translateX(0)" : "translateX(2%)",
}}
```

The `(isOpen && !isClosing)` condition is critical - it ensures the "closing" visual state (opacity 0, transform offset) is applied while `isClosing` is true, giving the CSS transition time to animate.

## File Modified
- `/components/cart/simple-cart-modal.tsx` - `closeCart()` function
