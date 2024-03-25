import express, { Router } from 'express';
import { authenticateUser } from '../middlewares/authentication';
import {
  createContent,
  deleteContent,
  getDetail,
  getList,
  updateContent,
} from '../models/note';

const router: Router = express.Router();
router.use(express.json());

router.post('/', authenticateUser, createContent);
router.get('/', authenticateUser, getList);
router.get('/:id', getDetail);
router.put('/:id', updateContent);
router.delete('/:id', deleteContent);

export default router;
