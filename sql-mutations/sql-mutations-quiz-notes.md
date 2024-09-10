# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  - Create, Read, Update, and Delete
  - collectively, these are known as 'mutations'
  - the SQL clauses are `insert into`, `select`, `update`, and `delete`
- How do you add a row to a SQL table?
  - with the `insert into` to specify table, followed by a tuple of the columns
  - then the `values` clause with a tuple of values matching the order of the columns tuple
- How do you add multiple rows to a SQL table at once?
  - list multiple tuples of values after the `values` clause, separated by commas
- How do you update rows in a database table?
  - with the `update` clause, followed by a list of the columns and the values you want to assign to them
  - you would typically have a `where` clause to specify which rows to update
- How do you delete rows from a database table?
  - with the `delete` clause, followed by `from` to specify the table
  - you would typically have a `where` clause to specify which rows to delete
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  - if you don't specify which rows to update or delete with the `where` clause, it will affect the entire database
- How do you accidentally delete or update all rows in a table?
  - by not using the `where` clause to specify which rows you want to affect
- How do you get back the modified row without a separate `select` statement?
  - by finishing the statement with a `returning` clause specifying the columns you want, or `*` if you want all of them
- Why did you get an error when trying to delete certain films?
  - information from the films db is referenced in the castMembers db, so it is preventing rows from the films db from being updated or deleted

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
