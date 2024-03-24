import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import userRouter from './routes/users';
import noteRouter from './routes/notes';
import healthRouter from './routes/healthcheck';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { CORS_ALLOWED_ORIGIN } from './settings';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: CORS_ALLOWED_ORIGIN,
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.sendStatus(500);
});
app.use('/', userRouter);
app.use('/notes', noteRouter);
app.use('/healthcheck', healthRouter);
export { app };
