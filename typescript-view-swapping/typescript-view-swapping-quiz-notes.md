# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  - the element that was interacted with when the event was triggered
- What is the effect of setting an element to `display: none`?
  - the element and its contents are hidden and removed from the document flow
- What does the `element.matches()` method take as an argument and what does it return?
  - it takes a css selector as a string and returns a boolean (whether or not the element matches the selector)
- How can you retrieve the value of an element's attribute?
  - using the getAttribute method
- At what steps of the solution would it be helpful to log things to the console?
  - I logged to the console to ensure I was getting the correct elements in my query selector variables and to verify the event target
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?
  - without event delegation, you would have to query for each tab and create event listeners for each of the tabs
  - you could likely create one function and use it as the callback function for every event listener
  - if you wanted to add more tabs, you would need to add event listeners to each one
- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?
  - if you didn't use a loop, you would have to individually check each element within the nodelist and add if/else statements within those checks
  - it would take up a lot more room and wouldn't automatically accommodate for new added tabs and views

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
