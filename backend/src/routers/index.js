import { Router } from 'express';


import authRouter from './auth.js';

const router = Router();

router.use('/auth', authRouter);

import usersRouter from './users.js';

const router = Router();

router.use('/users', usersRouter);


export default router;
