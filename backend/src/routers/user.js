import { Router } from 'express';
import {
  getUserInfoByIdController,
  createUserController,
  patchUserController,
} from '../controllers/users.js';
import { ctrlWrapper } from '../middlewares/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { updateUserSchema, createUserSchema } from '../validation/users.js';
import { isValidId } from '../middlewares/isValidId.js';
import { upload } from '../middlewares/multer.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use(authenticate);

router.get('/:userId/info', isValidId, ctrlWrapper(getUserInfoByIdController));

router.post(
  '/:userId/info/photo',
  upload.single('photo'),
  validateBody(updateUserSchema),
  ctrlWrapper(patchUserController),
);

router.patch(
  '/:userId/info/update',
  isValidId,
  upload.single('photo'),
  validateBody(updateUserSchema),
  ctrlWrapper(patchUserController),
);

export default router;
