import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const authenticateUser = //
  async (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.cookies['access-token'];

    const JWT_SECRET = process.env.JWT_SECRET;
    if (!accessToken) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: '토큰정보가 없습니다.' });
    }
    if (!JWT_SECRET) {
      console.error('환경 변수 JWT_SECRET가 설정되지 않았습니다.');
      process.exit(1);
    }
    try {
      const decodedJwt = jwt.verify(accessToken, JWT_SECRET) as JwtPayload;
      req.user = decodedJwt;
      next();
    } catch (error) {
      console.error('토큰 검증에 실패했습니다:', error);
      res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: '토큰이 유효하지 않습니다.' });
    }
  };
