import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(new Date(), req.method, req.path);
  next();
});

app.get('/', (req, res, next) => {
  res.send('bananas');
  next();
});

app.get('/notes', (req, res, next) => {
  res.send('pears');
  next();
});

app.post('/notes/123', (req, res, next) => {
  res.send('apples');
  next();
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
