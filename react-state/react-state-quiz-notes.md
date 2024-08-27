# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  - a hook is a function that allows a component to access things like state
  - for example, useState is a hook
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  - hook names need to begin with "use", followed by an uppercase letter
  - hooks can only be called by react components and other hooks
  - hooks in a components must be called at the top level of the component
- What is the purpose of state in React?
  - a state allows information to be stored between calls of a component function, allowing data to be maintained across renders
- Why can't we just maintain state in a local variable?
  - states can only be called by components or other hooks
- What two actions happen when you call a `state setter` function?
  - the new value to be set is stored in a cache by React
  - React schedules a re-render of the app
- When does the local `state variable` get updated with the new value?
  - the local state variable is updated when the app is re-rendered, when the useState is called

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
