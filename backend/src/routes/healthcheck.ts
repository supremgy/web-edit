import express, { Router } from 'express';
const router: Router = express.Router();
router.use(express.json());

router.get('/');
export default router;
