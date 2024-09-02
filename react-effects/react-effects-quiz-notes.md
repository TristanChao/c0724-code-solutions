# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  - a component is mounted to the DOM when its function is called
- What is a React Effect?
  - a React effect lets your component remember that something needs to be done on the DOM after the initial render
- When should you use an Effect and when should you not use an Effect?
  - an effect should be used when something on the page will change without user interaction
- When do Effects run?
  - effects run when the component is mounted
- What function is used to declare an Effect?
  - useEffect
- What are Effect dependencies and how do you declare them?
  - effect dependencies are extra information that the useEffect needs when the function is running
  - you declare them in an array as the second argument of the useEffect function
- Why would you want to clean up from an Effect?
  - the cleanup function is meant to remove any effects that are no longer needed at the end of the useEffect function that might cause unwanted behaviors in other parts of the code
  - for example, ending intervals/timeouts, aborting fetch requests, removing event listeners
- How do you clean up from an Effect?
  - a cleanup function is a dev-defined function that is returned from useEffect
- When does the cleanup function run?
  - the cleanup function is run at the end of the useEffect function

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
