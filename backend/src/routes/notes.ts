import express, { Router, Request, Response } from 'express';
import { CustomRequest, authenticateUser } from '../middlewares/authentication';
import { StatusCodes } from 'http-status-codes';

const router: Router = express.Router();
router.use(express.json());

// router.get('/', authenticateUser, async (req: CustomRequest, res: Response) => {
//   if (req.user) {
//     console.log(req.user);
//     return res.status(StatusCodes.ACCEPTED);
//   }
// });
router.get('/:id');
router.post('/');
router.put('/:id');
router.delete('/:id');

export default router;
