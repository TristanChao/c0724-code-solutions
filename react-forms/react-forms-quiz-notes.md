# react-forms-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How do controlled components differ from uncontrolled components?
  - controlled components use a state to determine what is displayed on the screen
    - input is maintained by React
  - uncontrolled components do not use states, and display what is inputted by the user
    - input is maintained by the DOM
- What are some advantages of using uncontrolled components?
  - they are simpler to implement
- What are some advantages of using controlled components?
  - controlled components make it simpler to retrieve values from inputs
  - other elements can be manipulated when an input is changed
- Which style do you prefer?
  - controlled components
  - they aren't much harder to implement and keeping track of the values is much simpler
- What two props must you pass to an input for it to be "controlled"?
  - value={state}
  - onChange={setState}
- What are some popular npm packages for creating forms in React?
  - react hook form, formik, react final form

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
