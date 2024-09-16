# express-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the significance of an HTTP request's method?
  - the http request method lets you know how the client wants to manipulate the database
- What is the significance of an HTTP response's status?
  - the response status lets the client know what happened on the server's end, and whether their request was successful or not
- What does the express.json() middleware do and when would you need it?

  - the express.json middleware parses the request body
  - you would need it when you need to handle requests with json in the body (for us, if there is json in the body, it will almost always be json)

  - checks content type of body
    - if not 'application/json', calls next()
  - gets request body and parses it from a json
  - assigns the object to req.body
    - if not installed in a middleware, req will not exist
    - make sure express.json is called inside an app.use
  - calls next

  if (req.header('content-type') !== 'application/json') {
  next();
  return;
  }
  const json - JSON.parse(req.getBody()); \*\*getBody is just an example method
  req.body = json;
  next();

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
