# unit-tests-jest-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are unit tests?
  - unit tests ways of testing pieces of code by evaluated them and comparing to an expected value
- Why is it important to write unit tests?
  - unit tests are a good tool for checking your code for mistakes
- What code should be tested with a unit test? What code is not well suited for unit tests?
  - unit tests should be used on small sections of code with returns that are relevant to the rest of the code
  - the less code that is tested in a unit test, the better - it lets the tests run faster
  - unit tests are meant to be simple, and shouldn't touch things like database or 3rd party software
    - there are other frameworks that are built for testing those things
- What is Jest? What are some other popular JavaScript unit testing frameworks?
  - jest is a simplistic JS testing framework
  - other unit testing frameworks include mocha, storybook, cypress, and jasmine

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
