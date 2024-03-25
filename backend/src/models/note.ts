import { ResultSetHeader } from 'mysql2';
import { Request, Response } from 'express';
import conn from '../utils/mysql';
import { StatusCodes } from 'http-status-codes';

export const createContent = (req: Request, res: Response) => {
  const { title, content } = req.body;
  const userId = req.user?.userId;
  const date = new Date();
  const sql =
    'INSERT INTO notes (title, content, user_id, created_at, updated_at) VALUES(?,?,?,?,?)';
  const values = [title, content, userId, date, date];
  conn.query(sql, values, (err, results: ResultSetHeader) => {
    if (err) {
      console.error('데이터베이스 오류:', err);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: '내용을 생성하는 중에 오류가 발생했습니다.' });
    }

    if (results.affectedRows === 1) {
      console.log(results);
      return res.status(StatusCodes.OK).json(results);
    } else {
      console.error('데이터베이스 오류: 영향 받은 행이 1이 아닙니다.');
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: '내용을 생성하는 중에 오류가 발생했습니다.' });
    }
  });
};

export const getList = (req: Request, res: Response) => {
  const userId = req.user.userId;
  console.log(userId);

  const sql = 'SELECT * FROM notes WHERE user_id = ?';
  conn.query(sql, userId, (err, results: ResultSetHeader[]) => {
    if (err) {
      console.error('데이터베이스 오류:', err);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: '내용을 생성하는 중에 오류가 발생했습니다.' });
    }
    if (results) {
      return res.status(StatusCodes.OK).json(results);
    }
  });
};

export const getDetail = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const sql = 'SELECT * FROM notes WHERE id = ?';
  conn.query(sql, id, (err, results: ResultSetHeader[]) => {
    if (err) {
      console.error('데이터베이스 오류:', err);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: '내용을 생성하는 중에 오류가 발생했습니다.' });
    }
    if (results) {
      return res.status(StatusCodes.OK).json(results[0]);
    }
  });
};

export const updateContent = (req: Request, res: Response) => {};

export const deleteContent = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const sql = 'DELETE FROM notes WHERE id = ?';
  conn.query(sql, id, (err, results: ResultSetHeader) => {
    if (err) {
      console.error('데이터베이스 오류:', err);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: '내용을 생성하는 중에 오류가 발생했습니다.' });
    }

    if (results.affectedRows === 1) {
      return res.status(StatusCodes.OK).json(results);
    }
  });
};
