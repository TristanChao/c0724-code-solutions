# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  - the `event.target` is the element that was interacted with when the event triggered
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  - because of event propagation
  - when an event is triggered, event listeners that are on ancestor elements will be executed
- What DOM element property tells you what type of element it is?
  - the tagName property
- What does the `element.closest()` method take as its argument and what does it return?
  - it takes a css selector as a string and returns the nearest ancestor to the element matching the selector
- How can you remove an element from the DOM?
  - use the remove method
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  - add the listener to a common ancestor with code that will execute if certain elements are interacted with

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
