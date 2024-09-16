# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?
  - the pg npm packages allow node applications to query databases using postgres
- How do you tell `pg` which database to connect to?
  - when you create a pg.Pool, you assign it an object which includes the database it is connecting to (connectionString)
- How do you send SQL to PostgreSQL from your Express server?
  - create a string containing the SQL statement, then pass the string as an argument in a db.query
- How do you access the rows that get returned from the SQL query?
  - when you get the return of a db.query and assign it to a variable, you can access its rows property, which is an array, and you can index it for specific rows
- What must you always remember to put around your asynchronous route handlers? Why?
  - a try/catch block, for proper error handling
- What is a SQL Injection Attack and how do you avoid it in `pg`?
  - a sql injection attack is a way of bypassing security measures by inputting fragments of SQL statements that break conditional checks
  - you can avoid sql attacks in pg by passing dynamic parameters as an array in the pg.query
    - pg will formulate the request to avoid sql injection attacks

## Notes

All student notes should be written here.

- connection Pool: a pool of connections that are already established with a database
- creating a connection is the most expensive part of querying a database
- the connections stay open rather than being opened and closed each time you query
- instead of interacting directly with the database, you configure the Pool to establish connections, then interact with the Pool

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
