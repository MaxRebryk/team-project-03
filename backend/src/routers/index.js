import { Router } from 'express';
import userRouter from './user.js';
import waterRouter from './water.js';
import authRouter from './auth.js';
import waterRateRouter from './waterRate.js';

const router = Router();

router.use('/user', userRouter);
router.use('/water', waterRouter);
router.use('/auth', authRouter);
router.use('/water-rate', waterRateRouter);

export default router;
