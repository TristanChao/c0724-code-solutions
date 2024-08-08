# fetch-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What does `fetch()` return?
  - `fetch` returns a promise that resolves to the `Response` object which represents the result of the request
- What is the default request method used by `fetch()`?
  - GET
- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?
  - pass an options object as the second argument of `fetch`, containing a `method` property with the request method in quotes
- How does `fetch` report errors?
  - `fetch` will reject a promise on network failures, or will resolve with an error status code that can be checked, as well as the `ok` property which signals if the response is good

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
