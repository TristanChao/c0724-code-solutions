import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select *
      from "grades";
    `;

    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, 'gradeId must be an integer');
    }

    const sql = `
      select *
      from "grades"
      where "gradeId" = $1;
    `;

    const result = await db.query(sql, [gradeId]);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `grade ${gradeId} not found`);
    }
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (name === undefined || course === undefined || score === undefined) {
      throw new ClientError(400, 'name, course, and score are required');
    }
    if (typeof score !== 'number') {
      throw new ClientError(400, 'score must be a number');
    }
    if (score < 0 || score > 100 || !Number.isInteger(score)) {
      throw new ClientError(400, 'score must be an integer from 0-100');
    }

    const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *;
    `;

    const params = [name, course, score];
    const result = await db.query(sql, params);
    const newGrade = result.rows[0];
    res.status(201).json(newGrade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, 'gradeId must be an integer');
    }
    const { name, course, score } = req.body;
    if (name === undefined || course === undefined || score === undefined) {
      throw new ClientError(400, 'name, course, and score are required');
    }
    if (typeof score !== 'number') {
      throw new ClientError(400, 'score must be a number');
    }
    if (score < 0 || score > 100 || !Number.isInteger(score)) {
      throw new ClientError(400, 'score must be an integer from 0-100');
    }

    const sql = `
      update "grades"
      set "name" = $1,
          "course" = $2,
          "score" = $3
      where "gradeId" = $4
      returning *;
    `;

    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    const updatedGrade = result.rows[0];
    if (!updatedGrade) {
      throw new ClientError(404, `grade ${gradeId} not found`);
    }

    res.json(updatedGrade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, 'gradeId must be an integer');
    }

    const sql = `
      delete
      from "grades"
      where "gradeId" = $1
      returning *;
    `;

    const result = await db.query(sql, [gradeId]);
    if (!result.rows[0]) {
      throw new ClientError(404, `grade ${gradeId} not found`);
    }

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('server listening on port 8080');
});
