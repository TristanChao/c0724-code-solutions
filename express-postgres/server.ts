import pg from 'pg';
import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
      select "title",
             "filmId"
      from "films"
      order by "replacementCost" desc;
    `;
    const result = await db.query(sql);
    if (!result) {
      res.send([]);
    }
    res.send(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/film', async (req, res, next) => {
  try {
    const { filmId } = req.query;
    if (filmId === undefined) {
      throw new ClientError(400, 'filmId is required');
    }
    const sql = `
      select *
      from "films"
      where "filmId" = $1;
    `;
    const params = [filmId];
    const result = await db.query(sql, params);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.put('/api/film', async (req, res, next) => {
  try {
    const { filmId, newTitle } = req.query;
    if (filmId === undefined || newTitle === undefined) {
      throw new ClientError(400, 'filmId and newTitle are required');
    }

    const sql = `
      update "films"
      set "title" = $2
      where "filmId" = $1
      returning *;
    `;

    const params = [filmId, newTitle];
    const result = await db.query(sql, params);
    const newFilm = result.rows[0];
    if (!newFilm) {
      throw new ClientError(404, 'filmId not found');
    }
    res.send(newFilm);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
