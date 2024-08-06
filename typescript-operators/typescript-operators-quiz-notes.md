# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  - the `&&` and `||` operators check for truthy and falsy values
  - outside of `if` statements, you can use them to return a certain value based on whether a different value is truthy (`&&`) or falsy (`||`)
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  - "short-circuit evaluation" is a concept in which the remainder of a conditional expression is skipped if an earlier condition makes it certain to be true or false
  - in `&&` statements, if the first condition is falsy, the other conditions will be skipped because it is certain to be false
  - similarly, in `||` statements, the later conditions will be skipped if the first is true
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  - the `??` operator returns the second value if the first is null or undefined
  - the `||` operator returns the second value if the first is falsy
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  - the `?:` operator will return the value on the left of the : if the expression before the ? is true, and the value on the right if the expression is false
  - it is simply a more concise way of writing if/else statements when you are only checking for truthy/falsy of one expression
- What is the `?.` (optional chaining) operator? When would you use it?
  - the `?.` operator will return undefined if the object's property is undefined
  - it is used when you are not sure if a property of an object exists or not
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  - the `...` syntax will allow you to insert the elements of an array or properties of an object into the creation of another array/object
- What data types can be spread into an array? Into an object?
  - iterable objects, such as arrays and strings, can be spread into arrays (a string will be split by letter)
  - objects can be spread into objects
- How does spread syntax differ from rest syntax?
  - spread syntax takes an object or array and divides its elements/properties so they can be accessed individually
  - rest syntax takes a collection of items and puts them into one object or array so they can be accessed as a whole
    - rest syntax is common for gathering function arguments

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
