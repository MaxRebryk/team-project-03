import { Router } from 'express';
import usersRouter from './users.js';
import waterRouter from './water.js';
import authRouter from './auth.js';

const router = Router();

router.use('/users', usersRouter);
router.use('/water', waterRouter);
router.use('/auth', authRouter);

export default router;
