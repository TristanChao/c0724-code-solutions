# css-positioning-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the **default** value for the `position` property of HTML elements?

  - static

- How does setting `position: relative` on an element affect document flow?

  - relative positioned elements remain in the document flow

- How does setting `position: relative` on an element affect where it appears on the page?

  - adding space on one of the sides will make it move from its original position

- How does setting `position: absolute` on an element affect document flow?

  - absolute positioned elements are taken out of the document flow onto another layer
  - the other elements will collapse onto the space it used to take up

- How does setting `position: absolute` on an element affect where it appears on the page?

  - adding space on one of the sides will move it relative to the side its closest non-static ancestor

- How do you constrain an absolutely positioned element to a containing block?

  - set an ancestor element to a non-static positioning (such as relative) and set its size to the desired constraints

- What are the four box offset properties?

  - top, bottom, left, and right

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
