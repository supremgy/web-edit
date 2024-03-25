import { RowDataPacket } from 'mysql2';
import { NextFunction, Request, Response } from 'express';
import conn from '../utils/mysql';
import { StatusCodes } from 'http-status-codes';

export const authorizeNote = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const userId = req.user.userId;
  const sql = 'SELECT * FROM notes WHERE id =?';
  conn.query(sql, id, (err, results: RowDataPacket[]) => {
    if (err) {
      console.error('Database error:', err);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' });
    }

    if (!results.length) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: '존재하지 않는 게시물입니다.' });
    }
    if (results[0].user_id !== userId) {
      return res
        .status(StatusCodes.FORBIDDEN)
        .json({ message: '게시물에 대한 권한이 없습니다.' });
    }
    next();
  });
};
