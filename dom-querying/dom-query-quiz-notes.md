# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

  - to check the values of variables
  - to debug
  - to check our expectations vs reality

- What is a "model"?

  - a representation of something

- Which "document" is being referred to in the phrase Document Object Model?

  - the HTML document

- What is the word "object" referring to in the phrase Document Object Model?

  - the elements in the HTML document

- What is a DOM Tree?

  - a model of the elements in an HTML document and their structure

- Give two examples of `document` methods that retrieve a single element from the DOM.

  - querySelector and getElementById

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.

  - querySelectorAll and getElementsByClassName

- Why might you want to assign the return value of a DOM query to a variable?

  - so you can reference an element without having to constantly query the DOM

- What `console` method allows you to inspect the properties of a DOM element object?

  - the dir method

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?

  - so the elements in the HTML can be created before trying to reference them in the script

- What does `document.querySelector()` take as its argument and what does it return?

  - takes a css selector in quotes
  - returns the first element matching the selector

- What does `document.querySelectorAll()` take as its argument and what does it return?

  - takes a css selector in quotes
  - returns a nodelist of all matching elements

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
