# typescript-objects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are objects used for?
  - objects are used for making reusable collections of organized data
- What are object properties?
  - object properties are named values that are connected to the object
- Describe object literal notation.
  - variable keyword, variable name, `=` operator, curly braces with property assignment inside
- How do you remove a property from an object?
  - use the `delete` operator, then specify the property of the object
- What are the two ways to get or update the value of a property?
  - dot notation (object.property) and bracket notation (object['property'])
- What is the purpose of interfaces in TypeScript?
  - interfaces provide a framework for creating objects by declaring names and data types beforehand
- What are two different ways to describe the shape of an object in TypeScript?
  - object literal and interface?
- How do optional properties in a TypeScript interface differ from mandatory properties, and why are they useful?
  - when creating an object annotated with an interface, mandatory properties have to be assigned during initialization
  - optional properties can be assigned after initialization or not at all, and can also be deleted
  - optional properties are helpful for when you have properties that may not apply to all objects, but you still want to annotate them with the same interface

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
