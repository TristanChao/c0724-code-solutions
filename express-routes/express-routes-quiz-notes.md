# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?
  - create -> post
  - read -> get
  - update -> put
  - delete -> delete
- What is Express middleware?
  - express middleware is a function that runs based on specific pieces of the request
- What is Express middleware useful for?
  - middleware allows you to run certain functions depending on the request made by the client
- How do you mount a middleware with an Express application?
  - mounting a middleware means to call a special function, which adds it to the middleware array
- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  - the request and response objects
  - the request object lets you access information from the request sent by the client
  - the response object lets you send information back from the server

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
