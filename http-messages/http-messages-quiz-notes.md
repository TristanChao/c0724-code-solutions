# http-messages-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a client?
  - a client is a computer that makes requests for services from a server
- What is a server?
  - a server is a computer that shares its services with clients
- Which HTTP method does a browser issue to a web server when you visit a URL?
  - an HTTP GET request
- What three things are on the start-line of an HTTP **request** message?
  - an HTTP method (GET in our example)
  - the request target, usually a url (blank in our example)
  - the HTTP version (1.1 in our example)
- What three things are on the start-line of an HTTP **response** message?
  - the protocol version (1.1 in our example)
  - a status code (200 in our example) that indicates success or failure of the request
  - a status text (OK in our example) that is a textual description of the status code for the user to understand
- What are HTTP headers?
  - HTTP headers let clients and servers pass additional information with HTTP messages
  - there are several different types of headers, such as request and response headers
- Where would you go if you wanted to learn more about a specific HTTP Header?
  - HTTP documentation (such as MDN)
- Is a body required for a valid HTTP request or response message?
  - no, the body is not required and GET requests commonly don't need one

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
