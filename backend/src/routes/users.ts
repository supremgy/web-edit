import express, { Router, Request, Response } from 'express';
import { User as IUser } from '../models/user';
import { join, login } from '../controller/user';
const router: Router = express.Router();

router.post('/login', login);

router.post('/logout');

router.get('/me');

router.post('/users', join);

export default router;
