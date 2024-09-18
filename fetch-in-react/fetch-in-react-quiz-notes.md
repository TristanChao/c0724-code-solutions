# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?

  - the fetch function

- What two things need to be done to properly handle HTTP request errors? Why?

  - fetch requests must be in a try/catch block so we can actually receive the error and do something with it
    - fetch requests only throw errors if it can't make a connection
  - check response.ok (response status in 200 range)
    - even bad responses will not throw an error without checking the response status
  - there must be a visual indication on the **site** (not in the console) that an error happened so the user can know that there was an error

- How can `useEffect` be used to load data for a component?

  - within a useEffect, you can create an call an async function that will make the fetch request asynchronously and return the data
  - once the data has been returned, you can update the page

- How do you use `useEffect` to load component data just once when the component mounts?

  - if there are no dependencies in a useEffect's dependency array, it will only load once when the component mounts

- How do you use `useEffect` to load component data every time the data key changes?

  - if the data key is used in the useEffect and is placed in the dependency array, the useEffect will be run whenever the data key changes

- In a large-scale production app, what are some better alternatives for loading and managing backend data?

  - using a third-party data management library, like React Query and Vercel SWR

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
