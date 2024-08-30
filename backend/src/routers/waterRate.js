import { Router } from 'express';
import { updateDailyNormaController } from '../controllers/waterRateController.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.patch('/', authenticate, updateDailyNormaController);

export default router;
