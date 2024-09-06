# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?
  - the dialog element is used to show a brief popup with some functionality to the user
- How do you show and hide a modal dialog?
  - you show a dialog with the showModal() function
  - you hide it with the close() function
- How do you manipulate child components in React? Why will that not work for the `<dialog>` element?
  - you pass the child a prop that can be used to affect its behavior
  - this wouldn't work in a regular dialog element because you can't access its props the same way as a custom component
- How do you call the dialog element's functions in React?
  - you need to set its ref prop to a useRef, then you can call its function through ref.current
- How can you render nested components or JSX elements in React?
  - nested components and JSX elements can be accessed by creating a `children` prop with a type of ReactNode

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
