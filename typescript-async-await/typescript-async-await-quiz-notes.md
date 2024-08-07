# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  - the `async` keyword marks the function you are defining as an asynchronous function
  - the `await` keyword indicates to the runtime that it should wait until the function is complete before continuing by passing it into asynchronous execution
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  - `async` and `await` allow code to be written more sequentially, and when paired with the try/catch mechanism, can perform the same functionality as `Promise.then` and `Promise.catch` with improved readability
- When do you use `async`?
  - `async` is used at the start of a function definition when there is a function within it that might be a block or has to wait for other things to run before being run itself
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  - `await` is used on function calls that might be a block (take a long time) and you want to pass it into asynchronous execution
  - you don't want to use `await` on regular functions, especially if their returns are needed for other synchronous functions, which would cause errors
- How do you handle errors with `await`?
  - with the try/catch/finally statements
- What do `try`, `catch` and `throw` do? When do you use them?
  - the try block will attempt to execute all the code within it
  - if there is an error in the try block, it will pass into the catch block and execute the code within it
  - the `throw` keyword will indicate that an error should be passed to the catch block
    - if there is no catch block, the program will terminate
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  - the program will not wait for the Promise to finish and send a response before running the rest of the code
  - instead of running what is in the catch block, it will just print the error it received
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  - `async/await` seems to be the easiest to conceptualize and understand while coding

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
