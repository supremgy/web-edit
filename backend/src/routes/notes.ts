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
router.get('/:id', authenticateUser, getDetail);
router.put('/:id', authenticateUser, updateContent);
router.delete('/:id', authenticateUser, deleteContent);

export default router;
