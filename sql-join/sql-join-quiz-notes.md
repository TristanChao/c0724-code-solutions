# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?
  - a foreign key is a reference to another table's primary key
- How do you join two SQL tables? (Provide at least two syntaxes.)
  - select columns from one table
  - join the other table using the id
  - ```
     select "table"."row"
     from "table"
     join "table" using ("tableId")
    ```
  - to use `using` the foreign key has to have the same name as the primary key it references
  - if it doesn't, you need to use `on`
    - join "table2" on "table1"."foreignKey" = "table2"."primaryKey"
- How do you temporarily rename columns or tables in a SQL statement?
  - use the `as` argument after the table or column name
  - for columns its in the select clause, for tables its in the from clause
  - `select "table"."column" as "alias"`
  - `from "table" as "alias"`
- How do you create a one-to-many relationship between two tables?
  - a one-to-many relationship is between two tables where each row in table1 could be referenced by many rows in table2, while each row in table2 can only reference one row in table1
  - for example, in a product/supplier relationship, each supplier could produce many products, but each product only comes from one supplier
- How do you create a many-to-many relationship between two tables?
  - to make a many-to-many relationship between two tables, you need to create a new table (called a join table) which references both tables
  - for example, in a class/student relationship, each class could reference multiple students, and each student could reference multiple classes

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
