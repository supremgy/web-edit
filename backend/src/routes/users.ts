import express, { Router, Request, Response } from 'express';
import { join, login, logout } from '../models/user';
import { authenticateUser } from '../middlewares/authentication';
import { StatusCodes } from 'http-status-codes';
const router: Router = express.Router();

router.post('/login', login);

router.post('/logout', logout);

router.get(
  '/users/me',
  authenticateUser,
  async (req: Request, res: Response) => {
    return res.status(StatusCodes.OK).json(req.user);
  }
);

router.post('/users', join);

export default router;
