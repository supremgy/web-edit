import express, { Router } from 'express';
import { authenticateUser } from '../middlewares/authentication';
import {
  createContent,
  deleteContent,
  getDetail,
  getList,
  updateContent,
} from '../models/note';
import { authorizeNote } from '../middlewares/authorization';

const router: Router = express.Router();
router.use(express.json());

router.post('/', authenticateUser, createContent);
router.get('/', authenticateUser, getList);
router.get('/:id', authenticateUser, authorizeNote, getDetail);
router.put('/:id', authenticateUser, authorizeNote, updateContent);
router.delete('/:id', authenticateUser, authorizeNote, deleteContent);

export default router;
