# sql-select-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is SQL and how is it different from languages like JavaScript?
  - SQL is a declarative programming language for accessing and manipulating databases
  - declarative languages, like SQL, HTML, and CSS, describe a process and lets the programming environment execute it however it sees fit
  - imperative languages, like JavaScript, tell the runtime exactly what to do and how to do it
- How do you retrieve specific columns from a database table?
  - use the `select` keyword followed by the names of the columns in double quotes
- How do you filter rows based on some specific criteria?
  - after `select` and `from`, use `where` to specify which attribute and what to compare it to
  - ex `where "name" = 'Joe'` or `where "price" < '1'`
- What are the benefits of formatting your SQL?
  - SQL does not need to be formatted with indentations, but doing so gives it a consistent format, making it more readable
- What are four comparison operators that can be used in a `where` clause?
  - =, <, >, and !=
- How do you limit the number of rows returned in a result set?
  - with the `limit` keyword followed by an integer
- How do you retrieve all columns from a database table?
  - by selecting \*, which is a symbol meaning 'all'
- How do you control the sort order of a result set?
  - using `order by` followed by the column, followed by the optional `desc` keyword to set the order to descending rather than ascending

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
