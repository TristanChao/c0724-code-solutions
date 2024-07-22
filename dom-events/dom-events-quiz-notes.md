# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

  - to check values and/or debug

- What is the purpose of events and event handling?

  - to make a web page respond to specific user interactions

- Are all possible parameters required to use a JavaScript method or function?

  - no, some parameters may be optional, but the required ones must be given an argument
  - when defining a function, all parameters that are defined must be used in the function or you will get an error

- What method of element objects lets you set up a function to be called when a specific type of event occurs?

  - the addEventListener method

- What is a callback function?

  - a function that is used inside another function

- What object is passed into an event listener callback when the event fires?

  - the `event` object

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?

  - the event.target is the html element connected to the event trigger
  - you could check by logging it to the console
  - to get more information about the element, you could use console.dir
  - to get more information about the target method, you could read the documentation

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  - the first snippet will run the handleClick function with the event as its argument when the event is triggered
  - the second snippet will run the handleClick function with no arguments immediately upon reaching that line, and not run it again when the event is triggered

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
