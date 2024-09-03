# javascript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- In JavaScript, when is scope determined?
  - scope is determined when the function is called
  - JavaScript lexical scope is determined by code structure/layout
- What allows JavaScript functions to "remember" variables from their surroundings?
  - closure
- What values does a closure contain?
  - closure contains the variables within the scope of the function definition
- When is a closure created?
  - closure is created while code is executed when a function declaration is encountered
  - every time the running code encounters a declaration, a new reference with a new closure is created
- How can you tell if a function will be created with a closure?
  - a function will always be created with a closure
  - closure is usually only relevant when a function references variables outside of its local scope
- In React, what is one important case where you need to know if a closure was created?
  - when you are calling functions inside of the useEffect function

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
